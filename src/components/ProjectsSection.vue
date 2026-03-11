<template>
  <section id="projects" class="min-h-screen py-20 relative">
    <!-- Section header -->
    <div class="container mx-auto px-4 mb-16">
      <div class="flex items-center gap-4 mb-4">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-primary/30"></div>
        <span class="text-cyber-primary/60 text-sm font-mono">02</span>
        <div class="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-primary/30"></div>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">
        <span class="gradient-text">核心项目展厅</span>
      </h2>
      <p class="text-center text-white/50 text-lg">Project Showcase</p>
    </div>

    <!-- Projects grid -->
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Project 1: Lumina-RPC (C位) -->
        <div class="project-card glass rounded-2xl overflow-hidden glow-border lg:scale-105 lg:-translate-y-4 border-2 border-cyber-primary/30 relative group">
          <!-- Featured badge -->
          <div class="absolute top-4 right-4 z-10">
            <span class="px-3 py-1 bg-cyber-primary/20 border border-cyber-primary/50 text-cyber-primary text-xs rounded-full">
              ⭐ C位项目
            </span>
          </div>

          <!-- Project header -->
          <div class="p-6 border-b border-cyber-primary/10">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-primary/20 to-cyber-accent/20 flex items-center justify-center mb-4">
              <Rocket class="w-6 h-6 text-cyber-primary" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Lumina-RPC</h3>
            <p class="text-cyber-primary/80 text-sm font-mono">微服务治理平台</p>
          </div>

          <!-- Project content -->
          <div class="p-6">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-tag">Java</span>
              <span class="tech-tag">Netty</span>
              <span class="tech-tag">Vue3</span>
              <span class="tech-tag">Docker</span>
              <span class="tech-tag">微服务</span>
            </div>

            <!-- Description -->
            <p class="text-white/70 text-sm leading-relaxed mb-6">
              面向云原生的企业级 RPC 框架。摒弃 Zookeeper，自研基于 SSE 的轻量级配置中心。实现全链路元数据发现、动态路由、以及 0 延迟的短路与数据篡改引擎 (Tamper Engine)。
            </p>

            <!-- Features -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-xs text-white/50">
                <Check class="w-3 h-3 text-cyber-primary" />
                <span>自研 SSE 配置中心</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-white/50">
                <Check class="w-3 h-3 text-cyber-primary" />
                <span>全链路元数据发现</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-white/50">
                <Check class="w-3 h-3 text-cyber-primary" />
                <span>Tamper Engine 数据篡改</span>
              </div>
            </div>

            <!-- Action button -->
            <a
              href="http://120.26.186.0:3000"
              target="_blank"
              class="cyber-btn w-full flex items-center justify-center gap-2 rounded-lg text-cyber-primary"
            >
              <Rocket class="w-4 h-4" />
              <span>进入星际指挥台</span>
              <ExternalLink class="w-3 h-3" />
            </a>
          </div>
        </div>

        <!-- Project 2: AutoGuard AI -->
        <div class="project-card glass rounded-2xl overflow-hidden glow-border-hover border border-white/5">
          <!-- Project header -->
          <div class="p-6 border-b border-white/5">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-secondary/20 to-cyber-primary/20 flex items-center justify-center mb-4">
              <Shield class="w-6 h-6 text-cyber-secondary" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">AutoGuard AI</h3>
            <p class="text-cyber-secondary/80 text-sm font-mono">智能代码审查与 CI/CD 拦截</p>
          </div>

          <!-- Project content -->
          <div class="p-6">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">Webhook</span>
              <span class="tech-tag">LLM</span>
              <span class="tech-tag">GitHub App</span>
              <span class="tech-tag">DevOps</span>
            </div>

            <!-- Description -->
            <p class="text-white/70 text-sm leading-relaxed mb-6">
              基于事件驱动架构的企业级 DevOps 扩展。无侵入式接入 GitHub PR 流程，利用大模型结合 AST 进行业务语义级 Code Review，实现代码质量的自动化卡点与熔断。
            </p>

            <!-- Features -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-xs text-white/50">
                <Check class="w-3 h-3 text-cyber-secondary" />
                <span>无侵入式 GitHub 集成</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-white/50">
                <Check class="w-3 h-3 text-cyber-secondary" />
                <span>LLM + AST 语义分析</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-white/50">
                <Check class="w-3 h-3 text-cyber-secondary" />
                <span>自动化质量卡点</span>
              </div>
            </div>

            <!-- Action button -->
            <a
              href="https://github.com/xixi-box/AutoGuard-AI-Reviewer"
              target="_blank"
              class="cyber-btn w-full flex items-center justify-center gap-2 rounded-lg text-cyber-secondary border-cyber-secondary/30 hover:border-cyber-secondary/60"
              style="background: linear-gradient(135deg, rgba(255, 0, 160, 0.1), rgba(0, 240, 255, 0.1));"
            >
              <Github class="w-4 h-4" />
              <span>访问 GitHub 源码</span>
              <ExternalLink class="w-3 h-3" />
            </a>
          </div>
        </div>

        <!-- Project 3: Agentic Cloud IDE -->
        <div class="project-card glass rounded-2xl overflow-hidden glow-border-hover border border-white/5">
          <!-- Project header -->
          <div class="p-6 border-b border-white/5">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-accent/20 to-cyber-secondary/20 flex items-center justify-center mb-4">
              <Cloud class="w-6 h-6 text-cyber-accent" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Agentic Cloud IDE</h3>
            <p class="text-cyber-accent/80 text-sm font-mono">智能云端代码沙箱</p>
          </div>

          <!-- Project content -->
          <div class="p-6">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-tag">SpringBoot</span>
              <span class="tech-tag">Docker</span>
              <span class="tech-tag">LangChain</span>
              <span class="tech-tag">WebSocket</span>
            </div>

            <!-- Description -->
            <p class="text-white/70 text-sm leading-relaxed mb-6">
              带有 AI 自动纠错闭环的云端代码运行环境。实现了底层 Docker 沙箱隔离，并在代码运行异常时，自动抓取堆栈交由大模型进行修复并重新执行。
            </p>

            <!-- Features -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-xs text-white/50">
                <Check class="w-3 h-3 text-cyber-accent" />
                <span>Docker 沙箱隔离</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-white/50">
                <Check class="w-3 h-3 text-cyber-accent" />
                <span>AI 自动纠错闭环</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-white/50">
                <Check class="w-3 h-3 text-cyber-accent" />
                <span>实时 WebSocket 通信</span>
              </div>
            </div>

            <!-- Action button -->
            <a
              href="http://120.26.186.0:8888"
              target="_blank"
              class="cyber-btn w-full flex items-center justify-center gap-2 rounded-lg text-cyber-accent"
              style="background: linear-gradient(135deg, rgba(112, 0, 255, 0.1), rgba(255, 0, 160, 0.1));"
            >
              <Rocket class="w-4 h-4" />
              <span>进入云端IDE</span>
              <ExternalLink class="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Rocket, Shield, Cloud, ExternalLink, Github, Check } from 'lucide-vue-next'
</script>

<style scoped>
.project-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(112, 0, 255, 0.2), rgba(255, 0, 160, 0.2));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s;
}

.project-card:hover::before {
  opacity: 1;
}
</style>
