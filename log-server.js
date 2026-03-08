const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const LOG_FILE = process.env.LOG_FILE || '/var/log/nginx/access.log';

// 解析JSON日志行
function parseLogs(logText) {
  const lines = logText.trim().split('\n').filter(line => line.trim());
  const logs = [];

  for (const line of lines) {
    try {
      const entry = JSON.parse(line);
      // 提取IP地址
      const ip = entry.remote_addr || '-';
      // 解析请求
      const requestMatch = entry.request?.match(/^(GET|POST|PUT|DELETE|HEAD|OPTIONS)\s+(\S+)/);
      const method = requestMatch ? requestMatch[1] : '-';
      const path = requestMatch ? requestMatch[2] : entry.request || '-';
      // 状态码
      const status = parseInt(entry.status) || 0;
      // User Agent
      const ua = entry.http_user_agent || '-';
      // 时间
      const time = entry.time_local || '-';

      logs.push({
        ip,
        method,
        path,
        status,
        ua,
        time,
        raw: entry
      });
    } catch (e) {
      // 非JSON格式的行，跳过
    }
  }

  return logs.reverse(); // 最新在前
}

// 读取日志文件
function readLogFile(callback) {
  fs.readFile(LOG_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error('读取日志文件失败:', err.message);
      callback('');
      return;
    }
    callback(data);
  });
}

// 路由处理
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // 设置CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (pathname === '/api/logs') {
    readLogFile((logText) => {
      if (!logText) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ logs: [], stats: { total: 0, topIps: [], topPaths: [], statusCodes: {} } }));
        return;
      }

      const logs = parseLogs(logText);

      // 统计信息
      const stats = {
        total: logs.length,
        ips: {},
        paths: {},
        statusCodes: {}
      };

      for (const log of logs) {
        // IP统计
        stats.ips[log.ip] = (stats.ips[log.ip] || 0) + 1;
        // 路径统计
        stats.paths[log.path] = (stats.paths[log.path] || 0) + 1;
        // 状态码统计
        const statusGroup = Math.floor(log.status / 100) * 100;
        stats.statusCodes[statusGroup] = (stats.statusCodes[statusGroup] || 0) + 1;
      }

      // 转换为数组并排序
      stats.topIps = Object.entries(stats.ips)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([ip, count]) => ({ ip, count }));

      stats.topPaths = Object.entries(stats.paths)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([path, count]) => ({ path, count }));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ logs: logs.slice(0, 100), stats }));
    });
  } else if (pathname === '/api/stats') {
    // 简化的统计API（可以用作轮询）
    readLogFile((logText) => {
      if (!logText) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ total: 0, today: 0, uniqueIps: 0 }));
        return;
      }

      const logs = parseLogs(logText);
      const today = new Date().toISOString().split('T')[0];
      const stats = {
        total: logs.length,
        today: logs.filter(l => l.time.includes(today)).length,
        uniqueIps: new Set(logs.map(l => l.ip)).size
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(stats));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Log server running on port ${PORT}, reading from ${LOG_FILE}`);
});