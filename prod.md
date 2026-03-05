请帮我从零初始化一个纯前端项目，打造一个极具科技感、赛博朋克风或极简高级暗黑风的个人主页。

### 1. 技术栈要求

- 
- 框架：Vue 3 + Vite + TypeScript (或使用 Astro 框架，看你更擅长哪个来实现高级动画)。
- 样式：TailwindCSS (暗黑模式为主色调，加入一些发光边框或网格背景效果)。
- 图标：引入 lucide-vue-next 或类似的现代图标库。

### 2. 页面结构设计 (单页滚动式)

**区块 A：Hero Section (第一视觉中心)**

- 
- 大标题：**王顺 (Wang Shun)**
- 副标题：Cloud Native Developer | 3D Vision Researcher
- 核心信息：🎓 硕士：上海海洋大学 · 计算机技术 (2025.09 - 2028.06)🔬 研究方向：基于 3DGS 的无人机影像实时三维建模🎓 本科：山东理工大学 · 数据科学与大数据技术 (2021.09 - 2025.06)📧 Email: [2606209307@qq.com](https://www.google.com/url?sa=E&q=mailto%3A2606209307@qq.com)🐱 GitHub: https://github.com/xixi-box
- 加入一个动态的打字机特效或酷炫的粒子背景。

**区块 B：核心项目展厅 (Project Showcase)** - 采用精美的卡片网格布局

*卡片 1：Lumina-RPC 微服务治理平台 (C位)*

- 
- **标签：** Java, Netty, Vue3, Docker, 微服务
- **简介：** 面向云原生的企业级 RPC 框架。摒弃 Zookeeper，自研基于 SSE 的轻量级配置中心。实现全链路元数据发现、动态路由、以及 0 延迟的短路与数据篡改引擎 (Tamper Engine)。
- **按钮：** [🚀 进入星际指挥台 (Live Demo)] (链接: http://42.193.105.133:3000)

*卡片 2：AutoGuard AI - 智能代码审查与 CI/CD 拦截基建*

- 
- **标签：** Python, Webhook, LLM, GitHub App, DevOps
- **简介：** 基于事件驱动架构的企业级 DevOps 扩展。无侵入式接入 GitHub PR 流程，利用大模型结合 AST 进行业务语义级 Code Review，实现代码质量的自动化卡点与熔断。
- **按钮：** [💻 访问 GitHub 源码] (链接: https://github.com/xixi-box/AutoGuard-AI-Reviewer)

*卡片 3：Agentic Cloud IDE - 智能云端代码沙箱 (筹备中/示例)*

- 
- **标签：** SpringBoot, Docker, LangChain, WebSocket
- **简介：** 带有 AI 自动纠错闭环的云端代码运行环境。实现了底层 Docker 沙箱隔离，并在代码运行异常时，自动抓取堆栈交由大模型进行修复并重新执行。
- **按钮：** [🚧 敬请期待]

**区块 C：专业技能栈 (Tech Stack)**

- 
- 用标签墙（Tags）展示：Java, Spring Boot, Netty, Docker, CI/CD, Kubernetes(了解), Vue 3, Python, 3DGS 等。

### 3. 工程化与自动化部署 (GitHub Actions)

项目写好后，请帮我生成配套的 .github/workflows/deploy.yml。

- 
- 依然走阿里云 ACR 推送 + 腾讯云 SSH 拉取部署的模式。
- 生成一个只有 Nginx 的 Dockerfile。
- 生成一个单服务的 docker-compose.yml (映射到腾讯云的 80 端口，如果 3000 已经被占用了，这个简历网页可以映射到 8080 之外的比如 80 端口，直接通过 IP 访问)。

**请先帮我搭建本地项目骨架和首页 UI，确认 UI 设计的高级感后，我们再弄部署脚本。开始吧！**