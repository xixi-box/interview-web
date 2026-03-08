# 部署步骤

## 1. 重新构建前端

```bash
cd resume
npm install
npm run build
```

## 2. 重新构建并启动 Docker 容器

```bash
# 停止现有容器
docker-compose down

# 构建日志服务镜像并启动
docker-compose up -d --build
```

## 3. 查看日志页面

访问: `http://你的服务器IP/?view=logs`

或点击首页底部的 "查看访问日志" 链接。

## 4. 直接查看日志

```bash
# 实时查看容器日志
docker logs -f wangshun-portfolio

# 或查看宿主机上的日志文件
cat logs/access.log

# 实时查看日志文件
tail -f logs/access.log
```

## 5. 端口说明

- **80**: 前端网站
- **3000**: 日志服务API

前端通过 nginx 反向代理访问 `/api/logs` 来获取日志数据。