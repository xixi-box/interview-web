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
        <div class="stat-value">{{ stats.uniqueIps || stats.topIps?.length || 0 }}</div>
        <div class="stat-label">独立访客</div>
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

    <!-- 设备分布 -->
    <div class="section" v-if="stats?.devices">
      <h3>设备分布</h3>
      <div class="device-stats">
        <div class="device-item" v-if="stats.devices.desktop">
          <span class="device-icon">💻</span>
          <span class="device-name">桌面端</span>
          <span class="device-count">{{ stats.devices.desktop }}</span>
        </div>
        <div class="device-item" v-if="stats.devices.mobile">
          <span class="device-icon">📱</span>
          <span class="device-name">手机</span>
          <span class="device-count">{{ stats.devices.mobile }}</span>
        </div>
        <div class="device-item" v-if="stats.devices.tablet">
          <span class="device-icon">📱</span>
          <span class="device-name">平板</span>
          <span class="device-count">{{ stats.devices.tablet }}</span>
        </div>
      </div>
    </div>

    <!-- Top 访问地区 -->
    <div class="section" v-if="stats?.topCountries?.length">
      <h3>Top 访问地区</h3>
      <div class="top-list">
        <div v-for="item in stats.topCountries" :key="item.country" class="top-item">
          <span class="country">{{ item.country }}</span>
          <span class="count">{{ item.count }} 次</span>
        </div>
      </div>
    </div>

    <!-- Top 浏览器 -->
    <div class="section" v-if="stats?.topBrowsers?.length">
      <h3>Top 浏览器</h3>
      <div class="top-list">
        <div v-for="item in stats.topBrowsers" :key="item.browser" class="top-item">
          <span class="browser">{{ item.browser }}</span>
          <span class="count">{{ item.count }} 次</span>
        </div>
      </div>
    </div>

    <!-- Top 访问IP -->
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
            <th>IP / 地区</th>
            <th>设备信息</th>
            <th>路径</th>
            <th>状态</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(log, index) in logs" :key="index">
            <td class="ip-cell">
              <div class="ip-info">
                <span class="ip">{{ log.ip }}</span>
                <span class="geo" v-if="log.geo">{{ formatGeo(log.geo) }}</span>
              </div>
            </td>
            <td class="device-cell">
              <div class="device-info" v-if="log.device">
                <span :class="['device-type', log.device.type]">{{ getDeviceIcon(log.device.type) }}</span>
                <span class="device-detail">{{ log.device.browser }} / {{ log.device.os }}</span>
              </div>
              <span v-else class="unknown">-</span>
            </td>
            <td class="path-cell" :title="log.path">
              <span :class="['method', log.method.toLowerCase()]">{{ log.method }}</span>
              <span class="path-text">{{ log.path }}</span>
            </td>
            <td>
              <span :class="['status', getStatusClass(log.status)]">{{ log.status }}</span>
            </td>
            <td class="time-cell">{{ log.time }}</td>
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

interface GeoInfo {
  country: string
  region: string
  city: string
  latitude?: number
  longitude?: number
}

interface DeviceInfo {
  type: string
  os: string
  browser: string
  device: string
}

interface LogEntry {
  ip: string
  geo: GeoInfo | null
  device: DeviceInfo | null
  method: string
  path: string
  status: number
  ua: string
  time: string
}

interface Stats {
  total: number
  uniqueIps?: number
  topIps: { ip: string; count: number }[]
  topPaths: { path: string; count: number }[]
  topCountries: { country: string; count: number }[]
  topBrowsers: { browser: string; count: number }[]
  devices: Record<string, number>
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

function formatGeo(geo: GeoInfo | null): string {
  if (!geo) return '-'
  const parts = []
  if (geo.city && geo.city !== '-') parts.push(geo.city)
  if (geo.region && geo.region !== '-' && geo.region !== geo.city) parts.push(geo.region)
  if (geo.country && geo.country !== '-') parts.push(geo.country)
  return parts.length > 0 ? parts.join(', ') : '-'
}

function getDeviceIcon(type: string): string {
  const icons: Record<string, string> = {
    mobile: '📱 手机',
    tablet: '📱 平板',
    desktop: '💻 桌面',
    tv: '📺 TV',
    wearable: '⌚ 穿戴',
    unknown: '❓'
  }
  return icons[type] || '❓'
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

.top-item .ip, .top-item .country, .top-item .browser {
  color: #00f0ff;
}

.top-item .count {
  color: #888;
}

.device-stats {
  display: flex;
  gap: 20px;
}

.device-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 15px;
  border-radius: 4px;
}

.device-icon {
  font-size: 18px;
}

.device-name {
  color: #ccc;
}

.device-count {
  color: #00f0ff;
  font-weight: bold;
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

.ip-cell .ip-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ip-cell .ip {
  color: #00f0ff;
  font-family: monospace;
}

.ip-cell .geo {
  font-size: 11px;
  color: #888;
}

.device-cell .device-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.device-type {
  font-size: 12px;
}

.device-type.mobile, .device-type.tablet {
  color: #4caf50;
}

.device-type.desktop {
  color: #2196f3;
}

.device-detail {
  font-size: 11px;
  color: #888;
}

.path-cell {
  max-width: 300px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.path-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.method {
  padding: 2px 8px;
  border-radius: 3px;
  font-weight: 600;
  font-size: 11px;
  flex-shrink: 0;
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
  font-size: 12px;
}

.unknown {
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

  .log-table th:nth-child(4),
  .log-table td:nth-child(4) {
    display: none;
  }
}
</style>