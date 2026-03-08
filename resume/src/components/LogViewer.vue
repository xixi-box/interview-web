<template>
  <div class="log-viewer">
    <div class="header">
      <h2>访问日志</h2>
      <div class="actions">
        <button @click="refreshLogs" :disabled="loading" class="refresh-btn">
          {{ loading ? '加载中...' : '刷新' }}
        </button>
        <label class="auto-refresh">
          <input type="checkbox" v-model="autoRefresh" />
          自动刷新 (5s)
        </label>
      </div>
    </div>

    <!-- 统计卡片 -->
    <div class="stats-grid" v-if="stats">
      <div class="stat-card">
        <div class="stat-value">{{ stats.total }}</div>
        <div class="stat-label">总访问量</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ stats.topIps?.length || 0 }}</div>
        <div class="stat-label">独立IP</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" :class="statusClass">{{ stats.statusCodes[200] || 0 }}</div>
        <div class="stat-label">成功请求</div>
      </div>
      <div class="stat-card">
        <div class="stat-value error">{{ stats.statusCodes[404] || 0 }}</div>
        <div class="stat-label">404错误</div>
      </div>
    </div>

    <!-- Top IP -->
    <div class="section" v-if="stats?.topIps?.length">
      <h3>Top 访问IP</h3>
      <div class="top-list">
        <div v-for="item in stats.topIps" :key="item.ip" class="top-item">
          <span class="ip">{{ item.ip }}</span>
          <span class="count">{{ item.count }} 次</span>
        </div>
      </div>
    </div>

    <!-- 日志表格 -->
    <div class="log-table-container">
      <table class="log-table">
        <thead>
          <tr>
            <th>IP</th>
            <th>方法</th>
            <th>路径</th>
            <th>状态</th>
            <th>时间</th>
            <th>User-Agent</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(log, index) in logs" :key="index">
            <td class="ip-cell">{{ log.ip }}</td>
            <td>
              <span :class="['method', log.method.toLowerCase()]">{{ log.method }}</span>
            </td>
            <td class="path-cell" :title="log.path">{{ log.path }}</td>
            <td>
              <span :class="['status', getStatusClass(log.status)]">{{ log.status }}</span>
            </td>
            <td class="time-cell">{{ log.time }}</td>
            <td class="ua-cell" :title="log.ua">{{ truncateUA(log.ua) }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="logs.length === 0 && !loading" class="empty">
        暂无日志数据
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface LogEntry {
  ip: string
  method: string
  path: string
  status: number
  ua: string
  time: string
}

interface Stats {
  total: number
  topIps: { ip: string; count: number }[]
  topPaths: { path: string; count: number }[]
  statusCodes: Record<number, number>
}

const logs = ref<LogEntry[]>([])
const stats = ref<Stats | null>(null)
const loading = ref(false)
const autoRefresh = ref(false)
let refreshInterval: ReturnType<typeof setInterval> | null = null

const statusClass = ref('success')

async function fetchLogs() {
  loading.value = true
  try {
    const res = await fetch('/api/logs')
    const data = await res.json()
    logs.value = data.logs || []
    stats.value = data.stats || null
  } catch (e) {
    console.error('获取日志失败:', e)
  } finally {
    loading.value = false
  }
}

function refreshLogs() {
  fetchLogs()
}

function getStatusClass(status: number): string {
  if (status >= 200 && status < 300) return 'success'
  if (status >= 300 && status < 400) return 'redirect'
  if (status >= 400 && status < 500) return 'client-error'
  if (status >= 500) return 'server-error'
  return ''
}

function truncateUA(ua: string): string {
  if (ua.length > 40) {
    return ua.substring(0, 40) + '...'
  }
  return ua
}

watch(autoRefresh, (val) => {
  if (val) {
    refreshInterval = setInterval(fetchLogs, 5000)
  } else if (refreshInterval) {
    clearInterval(refreshInterval)
    refreshInterval = null
  }
})

onMounted(() => {
  fetchLogs()
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})
</script>

<style scoped>
.log-viewer {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  color: #00f0ff;
  margin: 0;
}

.actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.refresh-btn {
  padding: 8px 20px;
  background: #00f0ff;
  color: #0a0a0f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.refresh-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.auto-refresh {
  color: #fff;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.stat-card {
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
  color: #00f0ff;
}

.stat-value.error {
  color: #ff4444;
}

.stat-label {
  color: #888;
  font-size: 12px;
  margin-top: 5px;
}

.section {
  margin-bottom: 20px;
}

.section h3 {
  color: #fff;
  margin-bottom: 10px;
}

.top-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.top-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
}

.top-item .ip {
  color: #00f0ff;
}

.top-item .count {
  color: #888;
}

.log-table-container {
  overflow-x: auto;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.log-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.log-table th {
  background: rgba(0, 240, 255, 0.1);
  color: #00f0ff;
  padding: 12px;
  text-align: left;
  white-space: nowrap;
}

.log-table td {
  padding: 10px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: #ccc;
}

.log-table tr:hover {
  background: rgba(255, 255, 255, 0.02);
}

.ip-cell {
  color: #00f0ff;
  font-family: monospace;
}

.path-cell {
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.method {
  padding: 2px 8px;
  border-radius: 3px;
  font-weight: 600;
  font-size: 11px;
}

.method.get { background: #4caf50; color: #fff; }
.method.post { background: #2196f3; color: #fff; }
.method.put { background: #ff9800; color: #fff; }
.method.delete { background: #f44336; color: #fff; }

.status {
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 11px;
}

.status.success { background: #4caf50; color: #fff; }
.status.redirect { background: #ff9800; color: #fff; }
.status.client-error { background: #f44336; color: #fff; }
.status.server-error { background: #9c27b0; color: #fff; }

.time-cell {
  white-space: nowrap;
  color: #888;
}

.ua-cell {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #666;
}

.empty {
  text-align: center;
  padding: 40px;
  color: #666;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>