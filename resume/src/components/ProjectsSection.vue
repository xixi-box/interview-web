<template>
  <section id="projects" class="pt-8 pb-16 relative">
    <!-- Section header -->
    <div class="container mx-auto px-4 mb-8">
      <div class="flex items-center gap-4 mb-3">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-primary/30"></div>
        <span class="text-cyber-primary/60 text-sm font-mono">02</span>
        <div class="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-primary/30"></div>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-2">
        <span class="gradient-text">核心项目展厅</span>
      </h2>
      <p class="text-center text-white/50 text-lg">Project Showcase</p>
    </div>

    <div class="container mx-auto px-4 space-y-10">
      <!-- ==================== Project 1: Lumina-RPC (C位项目) ==================== -->
      <div class="project-featured glass rounded-3xl overflow-hidden border-2 border-cyber-primary/30 relative">
        <!-- Featured badge -->
        <div class="absolute top-6 right-6 z-10">
          <span class="px-4 py-1.5 bg-cyber-primary/20 border border-cyber-primary/50 text-cyber-primary text-sm rounded-full font-semibold">
            ⭐ C位项目
          </span>
        </div>

        <div class="grid lg:grid-cols-2 gap-0">
          <!-- Left: Project Info -->
          <div class="p-8 lg:p-10">
            <!-- Header -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyber-primary/30 to-cyber-accent/30 flex items-center justify-center">
                <Rocket class="w-7 h-7 text-cyber-primary" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">Lumina-RPC</h3>
                <p class="text-cyber-primary/80 text-sm font-mono">云原生微服务治理框架</p>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="tech-tag text-sm">Java 21</span>
              <span class="tech-tag text-sm">Spring Boot 3.3</span>
              <span class="tech-tag text-sm">Netty 4.1</span>
              <span class="tech-tag text-sm">ByteBuddy</span>
              <span class="tech-tag text-sm">Vue 3</span>
              <span class="tech-tag text-sm">MySQL 8.0</span>
            </div>

            <!-- Description -->
            <p class="text-white/70 leading-relaxed mb-6">
              面向云原生时代的高性能、高可观测性 RPC 框架。彻底剥离了对 Zookeeper/Nacos 等重量级中间件的依赖，创新性地采用 Spring Boot + MySQL + SSE 长链接构建了轻量级 AP 架构的服务注册与配置中心。支持动态服务降级、Mock 规则引擎、SSE 实时推送等特性，对标 Dubbo 核心能力。
            </p>

            <!-- Architecture -->
            <div class="mb-6 p-4 rounded-xl bg-cyber-primary/10 border border-cyber-primary/20">
              <div class="flex items-center gap-2 mb-3">
                <Layers class="w-5 h-5 text-cyber-primary" />
                <span class="text-sm font-semibold text-cyber-primary">控制面/数据面分离架构</span>
              </div>
              <p class="text-sm text-white/60 leading-relaxed">
                数据面负责 RPC 通信、负载均衡、Mock 拦截；控制面管理服务元数据、Mock 规则、健康状态。符合云原生设计理念，控制逻辑与数据转发解耦，支持独立扩展和演进。
              </p>
            </div>

            <!-- Features -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">自研二进制协议</span>
                  <p class="text-xs text-white/50 mt-1">16字节消息头设计，支持多种序列化器 SPI 扩展</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">ByteBuddy 动态代理</span>
                  <p class="text-xs text-white/50 mt-1">运行时生成代理类，透明化远程调用</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">Mock 规则引擎</span>
                  <p class="text-xs text-white/50 mt-1">SHORT_CIRCUIT 短路 + TAMPER 篡改双模式</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">SSE 实时推送</span>
                  <p class="text-xs text-white/50 mt-1">Mock 规则变更毫秒级生效，全量消费者同步</p>
                </div>
              </div>
            </div>

            <!-- Performance -->
            <div class="grid grid-cols-4 gap-3 mb-6">
              <div class="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                <div class="text-xl font-bold text-cyber-primary">&lt;10ms</div>
                <div class="text-xs text-white/40 mt-1">RPC 调用</div>
              </div>
              <div class="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                <div class="text-xl font-bold text-cyber-primary">30s</div>
                <div class="text-xs text-white/40 mt-1">心跳间隔</div>
              </div>
              <div class="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                <div class="text-xl font-bold text-cyber-primary">90s</div>
                <div class="text-xs text-white/40 mt-1">服务过期</div>
              </div>
              <div class="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                <div class="text-xl font-bold text-cyber-primary">ms级</div>
                <div class="text-xs text-white/40 mt-1">Mock 生效</div>
              </div>
            </div>

            <!-- Action -->
            <a
              href="http://42.193.105.133:3000"
              target="_blank"
              class="cyber-btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium"
            >
              <span class="text-white/60 text-sm">点击查看demo</span>
              <Rocket class="w-5 h-5" />
              <span>进入星际指挥台</span>
              <ExternalLink class="w-4 h-4" />
            </a>
          </div>

          <!-- Right: Debug Records -->
          <div class="p-8 lg:p-10 bg-white/[0.02] border-l border-white/5">
            <div class="flex items-center gap-2 mb-6">
              <Bug class="w-5 h-5 text-red-400" />
              <span class="text-lg font-semibold text-white">Debug 记录</span>
              <span class="text-xs text-white/40 ml-2">踩坑与解决方案</span>
            </div>

            <div class="space-y-4">
              <!-- Debug 1 -->
              <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <div class="flex items-center gap-2 mb-3">
                  <AlertTriangle class="w-4 h-4 text-red-400" />
                  <span class="text-sm font-semibold text-red-300">🐛 跨进程泛型擦除 (Type Erasure) 灾难</span>
                </div>
                <p class="text-sm text-white/60 mb-3">
                  <span class="text-white/80 font-medium">挑战：</span>控制面发起泛化调用时，由于未引入业务包，Jackson 遇到 @class 标签抛出 InvalidTypeIdException，导致整个调用链路崩溃。
                </p>
                <p class="text-sm text-white/60">
                  <span class="text-green-400 font-medium">解决：</span>重写 Jackson 序列化器，引入"容错降级机制"——在缺失 Class 定义的进程中，自动捕获异常并将复杂对象安全降级为 LinkedHashMap，完美支撑前端大盘的 JSON 渲染，实现了跨进程的泛型兼容。
                </p>
              </div>

              <!-- Debug 2 -->
              <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <div class="flex items-center gap-2 mb-3">
                  <AlertTriangle class="w-4 h-4 text-red-400" />
                  <span class="text-sm font-semibold text-red-300">🐛 Spring 生命周期循环死锁</span>
                </div>
                <p class="text-sm text-white/60 mb-3">
                  <span class="text-white/80 font-medium">挑战：</span>在 BeanPostProcessor 中强行启动 Netty 并注册服务，导致 Spring 提前初始化引发上下文崩溃，整个应用无法启动。
                </p>
                <p class="text-sm text-white/60">
                  <span class="text-green-400 font-medium">解决：</span>引入延迟暴露机制，在 Bean 实例化阶段仅做内存缓存，监听 ContextRefreshedEvent 事件在容器完全就绪后拉起网络层，实现了与 Spring Boot 的完美无损整合。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== Project 2: AutoGuard AI ==================== -->
      <div class="project-card glass rounded-3xl overflow-hidden border border-cyber-secondary/30">
        <div class="grid lg:grid-cols-2 gap-0">
          <!-- Left: Workflow First (这是重点) -->
          <div class="p-8 lg:p-10 bg-cyber-secondary/5 order-2 lg:order-1">
            <div class="flex items-center gap-2 mb-6">
              <Sparkles class="w-5 h-5 text-cyber-secondary" />
              <span class="text-lg font-semibold text-white">Agentic 开发工作流</span>
              <span class="text-xs text-cyber-secondary/60 ml-2">项目的真正核心</span>
            </div>

            <p class="text-white/60 text-sm mb-6 leading-relaxed">
              这个项目本身只是一个「副产物」，真正有价值的是背后沉淀的 AI 驱动开发工作流。彻底抛弃传统手动编码模式，让 AI 深度参与从需求到交付的全流程。
            </p>

            <!-- Workflow Steps -->
            <div class="space-y-4">
              <div class="flex gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <div class="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Brain class="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-sm font-semibold text-purple-300">大模型充当架构师</span>
                  </div>
                  <p class="text-xs text-white/50">
                    使用拥有百万超大上下文的 Google Gemini 2.5 Pro 注入官方 API 文档，负责系统架构推演与 PRD 产出。通过多轮对话澄清需求边界，输出结构化的技术方案。
                  </p>
                </div>
              </div>

              <div class="flex gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <div class="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Terminal class="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-sm font-semibold text-green-300">Agentic CLI 核心开发</span>
                  </div>
                  <p class="text-xs text-white/50">
                    彻底抛弃传统手动编码，全程通过终端智能体 Claude Code 配合 Cursor 进行跨文件级别的自动脚手架生成、重构与报错排查。实现「描述即代码」的开发范式。
                  </p>
                </div>
              </div>

              <div class="flex gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div class="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare class="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-sm font-semibold text-blue-300">自动化 IM 飞书集成</span>
                  </div>
                  <p class="text-xs text-white/50">
                    编写 Webhook 服务并利用 OpenClaw 接入飞书机器人，充当项目流转小秘书，实现代码风险的实时群告警。推送 Code Review 结果到指定群组，闭环反馈。
                  </p>
                </div>
              </div>
            </div>

            <!-- Debug Records -->
            <div class="mt-6">
              <div class="flex items-center gap-2 mb-4">
                <Bug class="w-4 h-4 text-red-400" />
                <span class="text-sm font-semibold text-white">Debug 记录</span>
              </div>

              <div class="space-y-3">
                <div class="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                  <div class="flex items-center gap-2 mb-2">
                    <AlertTriangle class="w-3 h-3 text-red-400" />
                    <span class="text-xs font-semibold text-red-300">GitHub App 鉴权与全局效能阻碍</span>
                  </div>
                  <p class="text-xs text-white/50 mb-2">
                    <span class="text-white/70">挑战：</span>传统的单仓库 GitHub Actions 脚本难以实现组织级复用，且存在 Token 易过期、权限过大问题。
                  </p>
                  <p class="text-xs text-white/50">
                    <span class="text-green-400">解决：</span>采用最高阶的 GitHub App 模式架构。实现基于 RS256 算法的 JWT 动态签名与 Installation Token 实时交换机制，做到了极简的"一次安装、全局仓库生效"的 SaaS 化底座体验。
                  </p>
                </div>

                <div class="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                  <div class="flex items-center gap-2 mb-2">
                    <AlertTriangle class="w-3 h-3 text-red-400" />
                    <span class="text-xs font-semibold text-red-300">大模型幻觉与 Token 成本失控</span>
                  </div>
                  <p class="text-xs text-white/50 mb-2">
                    <span class="text-white/70">挑战：</span>直接将巨量源码丢给 LLM 会导致 Token 打爆并产生大量无用废话（信噪比极低），审查质量无法保证。
                  </p>
                  <p class="text-xs text-white/50">
                    <span class="text-green-400">解决：</span>在丢给 AI 之前建立清洗层。利用 AST（抽象语法树）精准提取 git diff 变更内容及关联函数签名作为 Context，编写结构化 Prompt 强制模型仅输出高危缺陷与伪代码修复方案，极大提升了审查的有效性。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Project Info -->
          <div class="p-8 lg:p-10 order-1 lg:order-2">
            <!-- Header -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyber-secondary/30 to-cyber-primary/30 flex items-center justify-center">
                <Shield class="w-7 h-7 text-cyber-secondary" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">AutoGuard AI</h3>
                <p class="text-cyber-secondary/80 text-sm font-mono">智能代码审查与流水线基建</p>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="tech-tag text-sm">FastAPI</span>
              <span class="tech-tag text-sm">GitHub App</span>
              <span class="tech-tag text-sm">DeepSeek</span>
              <span class="tech-tag text-sm">AST</span>
              <span class="tech-tag text-sm">飞书机器人</span>
            </div>

            <!-- Description -->
            <p class="text-white/70 leading-relaxed mb-6">
              一款以"零 UI 侵入"理念打造的 DevOps 质量门神。通过注册为 GitHub App，利用 Webhook 事件驱动模型实时监听 PR，结合大模型与静态代码分析，自动在 PR 评论区实施业务语义级 Code Review。支持安全漏洞检测、逻辑错误识别、LGTM 智能判断，输出 Markdown 格式的友好审查建议。
            </p>

            <!-- Architecture -->
            <div class="mb-6 p-4 rounded-xl bg-cyber-secondary/10 border border-cyber-secondary/20">
              <div class="flex items-center gap-2 mb-3">
                <Zap class="w-5 h-5 text-cyber-secondary" />
                <span class="text-sm font-semibold text-cyber-secondary">技术架构</span>
              </div>
              <p class="text-sm text-white/60 leading-relaxed">
                FastAPI + Uvicorn 高性能异步框架作为服务端，JWT + GitHub Installation Token 双重鉴权保障安全，DeepSeek 大模型驱动智能代码分析，支持 Zeabur/Vercel/自有服务器多种部署方式。
              </p>
            </div>

            <!-- Features -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">自动审查</span>
                  <p class="text-xs text-white/50 mt-1">PR 创建或更新时自动触发代码审查</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">安全检查</span>
                  <p class="text-xs text-white/50 mt-1">检测潜在的安全漏洞和逻辑错误</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">LGTM 支持</span>
                  <p class="text-xs text-white/50 mt-1">代码质量良好时显示 "Looks Good To Me ✅"</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">友好输出</span>
                  <p class="text-xs text-white/50 mt-1">Markdown 格式输出清晰的审查建议</p>
                </div>
              </div>
            </div>

            <!-- Action -->
            <a
              href="https://github.com/xixi-box/AutoGuard-AI-Reviewer"
              target="_blank"
              class="cyber-btn-secondary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium"
            >
              <Github class="w-5 h-5" />
              <span>访问 GitHub 源码</span>
              <ExternalLink class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <!-- ==================== Project 3: Agentic Cloud IDE ==================== -->
      <div class="project-card glass rounded-3xl overflow-hidden border border-cyber-accent/30">
        <div class="grid lg:grid-cols-2 gap-0">
          <!-- Left: Project Info -->
          <div class="p-8 lg:p-10">
            <!-- Header -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyber-accent/30 to-cyber-secondary/30 flex items-center justify-center">
                <Cloud class="w-7 h-7 text-cyber-accent" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">Agentic Cloud IDE</h3>
                <p class="text-cyber-accent/80 text-sm font-mono">智能代码生成与云端沙箱平台</p>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="tech-tag text-sm">Spring Boot 3</span>
              <span class="tech-tag text-sm">LangChain4j</span>
              <span class="tech-tag text-sm">LangGraph4j</span>
              <span class="tech-tag text-sm">Dubbo 3</span>
              <span class="tech-tag text-sm">Nacos</span>
              <span class="tech-tag text-sm">Docker</span>
            </div>

            <!-- Description -->
            <p class="text-white/70 leading-relaxed mb-6">
              基于微服务架构的 AI 代码生成与极速验证平台。用户输入自然语言需求，AI 即可通过智能路由选择策略，调用文件读写工具链生成完整工程。支持代码的实时流式输出 (SSE)、在线可视化编辑，以及一键打包部署到云端沙箱进行预览。实现从「需求描述」到「可运行代码」的端到端自动化。
            </p>

            <!-- Architecture -->
            <div class="mb-6 p-4 rounded-xl bg-cyber-accent/10 border border-cyber-accent/20">
              <div class="flex items-center gap-2 mb-3">
                <Zap class="w-5 h-5 text-cyber-accent" />
                <span class="text-sm font-semibold text-cyber-accent">多 Agent 协作编排架构</span>
              </div>
              <p class="text-sm text-white/60 leading-relaxed">
                需求分析 Agent → 架构设计 Agent → 代码生成 Agent → 测试验证 Agent，每个 Agent 可独立扩展和升级。通过 LangGraph4j 实现状态机编排，支持复杂的任务分解与并行执行。
              </p>
            </div>

            <!-- Features -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">多态智能体引擎</span>
                  <p class="text-xs text-white/50 mt-1">LangChain4j + LangGraph4j 工作流编排</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">Nacos + Dubbo 3</span>
                  <p class="text-xs text-white/50 mt-1">微服务治理，服务注册与发现</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">Docker 沙箱隔离</span>
                  <p class="text-xs text-white/50 mt-1">Cgroups 资源限制 + 网络隔离</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Check class="w-4 h-4 text-cyber-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span class="text-sm font-medium text-white">AI 自愈修复</span>
                  <p class="text-xs text-white/50 mt-1">异常堆栈回传 → 大模型分析 → 自动修复</p>
                </div>
              </div>
            </div>

            <!-- Action -->
            <button
              disabled
              class="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium bg-white/5 border border-white/10 text-white/40 cursor-not-allowed"
            >
              <Construction class="w-5 h-5" />
              <span>演示筹备中</span>
            </button>
          </div>

          <!-- Right: Debug Records -->
          <div class="p-8 lg:p-10 bg-white/[0.02] border-l border-white/5">
            <div class="flex items-center gap-2 mb-6">
              <Bug class="w-5 h-5 text-red-400" />
              <span class="text-lg font-semibold text-white">Debug 记录</span>
              <span class="text-xs text-white/40 ml-2">踩坑与解决方案</span>
            </div>

            <div class="space-y-4">
              <!-- Debug 1 -->
              <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <div class="flex items-center gap-2 mb-3">
                  <AlertTriangle class="w-4 h-4 text-red-400" />
                  <span class="text-sm font-semibold text-red-300">🐛 大模型上下文遗忘与跨服务漂移</span>
                </div>
                <p class="text-sm text-white/60 mb-3">
                  <span class="text-white/80 font-medium">挑战：</span>无状态的微服务难以维持多轮 AI 对话上下文，且容易超出 Token 限制，导致对话断裂、信息丢失。
                </p>
                <p class="text-sm text-white/60">
                  <span class="text-green-400 font-medium">解决：</span>基于 Redis 定制化开发多租户跨微服务对话记忆存储 (RedisChatMemoryStore)，并引入安全护轨（Guardrail）机制动态截断冗余历史，防止 Prompt 注入攻击。实现跨服务的对话状态持久化。
                </p>
              </div>

              <!-- Debug 2 -->
              <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <div class="flex items-center gap-2 mb-3">
                  <AlertTriangle class="w-4 h-4 text-red-400" />
                  <span class="text-sm font-semibold text-red-300">🐛 恶意代码沙箱逃逸防御</span>
                </div>
                <p class="text-sm text-white/60 mb-3">
                  <span class="text-white/80 font-medium">挑战：</span>运行 AI 生成的不可信代码可能导致宿主机崩溃或数据泄露，存在严重的安全隐患。
                </p>
                <p class="text-sm text-white/60">
                  <span class="text-green-400 font-medium">解决：</span>利用 Docker API 动态构建隔离容器环境，结合 Linux Cgroups 严格限制 CPU/内存资源，切断容器外网访问权限。当运行异常时，系统自动抓取 Exception 堆栈并回传给大模型进行"自愈修复"，形成完整的 Agentic 闭环。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== CI/CD Pipeline Section ==================== -->
      <div class="glass rounded-3xl border border-white/5 p-8 lg:p-10">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/30 to-cyber-primary/30 flex items-center justify-center">
            <GitBranch class="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-white">CI/CD 自动化流水线</h3>
            <p class="text-white/40 text-sm">全自动化部署，零人工干预</p>
          </div>
        </div>

        <!-- Pipeline Flow -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
            <Github class="w-5 h-5 text-white/60" />
            <span class="text-white/70 font-medium">Push to Master</span>
          </div>
          <ChevronRight class="w-5 h-5 text-white/30 rotate-90 md:rotate-0" />
          <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
            <Zap class="w-5 h-5 text-purple-400" />
            <span class="text-purple-300 font-medium">GitHub Actions</span>
          </div>
          <ChevronRight class="w-5 h-5 text-white/30 rotate-90 md:rotate-0" />
          <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
            <Box class="w-5 h-5 text-orange-400" />
            <span class="text-orange-300 font-medium">Docker Build</span>
          </div>
          <ChevronRight class="w-5 h-5 text-white/30 rotate-90 md:rotate-0" />
          <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <CloudIcon class="w-5 h-5 text-blue-400" />
            <span class="text-blue-300 font-medium">阿里云 ACR</span>
          </div>
          <ChevronRight class="w-5 h-5 text-white/30 rotate-90 md:rotate-0" />
          <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/30">
            <Server class="w-5 h-5 text-green-400" />
            <span class="text-green-300 font-medium">腾讯云部署</span>
          </div>
        </div>

        <p class="text-sm text-white/50 text-center">
          代码推送 → GitHub Actions 自动构建 → Docker 镜像推送到阿里云容器镜像服务 ACR → 腾讯云服务器 SSH 拉取并部署
        </p>
      </div>

      <!-- ==================== Tech Highlights ==================== -->
      <div class="glass rounded-3xl border border-white/5 p-8">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyber-primary/30 to-cyber-accent/30 flex items-center justify-center">
            <Code2 class="w-6 h-6 text-cyber-primary" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-white">技术亮点速览</h3>
            <p class="text-white/40 text-sm">Technical Highlights</p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <div class="w-2 h-2 rounded-full bg-cyber-primary"></div>
            <span class="text-sm text-white/70">自研 RPC 协议</span>
          </div>
          <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <div class="w-2 h-2 rounded-full bg-cyber-accent"></div>
            <span class="text-sm text-white/70">Multi-Agent 协作</span>
          </div>
          <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <div class="w-2 h-2 rounded-full bg-cyber-secondary"></div>
            <span class="text-sm text-white/70">GitHub App 生态</span>
          </div>
          <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <div class="w-2 h-2 rounded-full bg-green-400"></div>
            <span class="text-sm text-white/70">CI/CD 自动化</span>
          </div>
          <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span class="text-sm text-white/70">Docker 沙箱隔离</span>
          </div>
          <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <div class="w-2 h-2 rounded-full bg-pink-400"></div>
            <span class="text-sm text-white/70">AST 代码分析</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Rocket, Shield, Cloud, ExternalLink, Github, Check, Construction, Zap, Code2,
  Bug, AlertTriangle, GitBranch, Box, Server, ChevronRight,
  Sparkles, Brain, Terminal, MessageSquare, Layers, Cloud as CloudIcon
} from 'lucide-vue-next'
</script>

<style scoped>
.project-featured,
.project-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cyber-btn-primary {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(112, 0, 255, 0.15));
  border: 1px solid rgba(0, 240, 255, 0.4);
  color: #00f0ff;
  transition: all 0.3s ease;
}

.cyber-btn-primary:hover {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.25), rgba(112, 0, 255, 0.25));
  border-color: rgba(0, 240, 255, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 10px 40px rgba(0, 240, 255, 0.2);
}

.cyber-btn-secondary {
  background: linear-gradient(135deg, rgba(255, 0, 160, 0.15), rgba(0, 240, 255, 0.15));
  border: 1px solid rgba(255, 0, 160, 0.4);
  color: #ff00a0;
  transition: all 0.3s ease;
}

.cyber-btn-secondary:hover {
  background: linear-gradient(135deg, rgba(255, 0, 160, 0.25), rgba(0, 240, 255, 0.25));
  border-color: rgba(255, 0, 160, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 10px 40px rgba(255, 0, 160, 0.2);
}
</style>