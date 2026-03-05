<template>
  <section id="tech-stack" class="min-h-screen py-20 relative grid-bg">
    <!-- Section header -->
    <div class="container mx-auto px-4 mb-16">
      <div class="flex items-center gap-4 mb-4">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-primary/30"></div>
        <span class="text-cyber-primary/60 text-sm font-mono">03</span>
        <div class="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-primary/30"></div>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">
        <span class="gradient-text">专业技能栈</span>
      </h2>
      <p class="text-center text-white/50 text-lg">Tech Stack</p>
    </div>

    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Backend & Cloud -->
        <div class="glass rounded-2xl p-8 glow-border-hover">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-lg bg-cyber-primary/10 flex items-center justify-center">
              <Server class="w-5 h-5 text-cyber-primary" />
            </div>
            <h3 class="text-xl font-bold text-white">Backend & Cloud Native</h3>
          </div>

          <div class="flex flex-wrap gap-3">
            <span v-for="tech in backendTechs" :key="tech.name"
              class="group relative px-4 py-2 rounded-lg border border-cyber-primary/20 bg-cyber-primary/5 text-cyber-primary hover:bg-cyber-primary/20 hover:border-cyber-primary/40 transition-all cursor-default"
            >
              {{ tech.name }}
              <span class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ tech.level }}
              </span>
            </span>
          </div>
        </div>

        <!-- Frontend -->
        <div class="glass rounded-2xl p-8 glow-border-hover">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-lg bg-cyber-secondary/10 flex items-center justify-center">
              <Monitor class="w-5 h-5 text-cyber-secondary" />
            </div>
            <h3 class="text-xl font-bold text-white">Frontend Development</h3>
          </div>

          <div class="flex flex-wrap gap-3">
            <span v-for="tech in frontendTechs" :key="tech.name"
              class="group relative px-4 py-2 rounded-lg border border-cyber-secondary/20 bg-cyber-secondary/5 text-cyber-secondary hover:bg-cyber-secondary/20 hover:border-cyber-secondary/40 transition-all cursor-default"
            >
              {{ tech.name }}
              <span class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ tech.level }}
              </span>
            </span>
          </div>
        </div>

        <!-- AI & Research -->
        <div class="glass rounded-2xl p-8 glow-border-hover">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-lg bg-cyber-accent/10 flex items-center justify-center">
              <Brain class="w-5 h-5 text-cyber-accent" />
            </div>
            <h3 class="text-xl font-bold text-white">AI & Research</h3>
          </div>

          <div class="flex flex-wrap gap-3">
            <span v-for="tech in aiTechs" :key="tech.name"
              class="group relative px-4 py-2 rounded-lg border border-cyber-accent/20 bg-cyber-accent/5 text-cyber-accent hover:bg-cyber-accent/20 hover:border-cyber-accent/40 transition-all cursor-default"
            >
              {{ tech.name }}
              <span class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ tech.level }}
              </span>
            </span>
          </div>
        </div>

        <!-- DevOps & Tools -->
        <div class="glass rounded-2xl p-8 glow-border-hover">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Wrench class="w-5 h-5 text-green-400" />
            </div>
            <h3 class="text-xl font-bold text-white">DevOps & Tools</h3>
          </div>

          <div class="flex flex-wrap gap-3">
            <span v-for="tech in devopsTechs" :key="tech.name"
              class="group relative px-4 py-2 rounded-lg border border-green-400/20 bg-green-400/5 text-green-400 hover:bg-green-400/20 hover:border-green-400/40 transition-all cursor-default"
            >
              {{ tech.name }}
              <span class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ tech.level }}
              </span>
            </span>
          </div>
        </div>
      </div>

      <!-- Skills radar description -->
      <div class="mt-16 glass rounded-2xl p-8 max-w-4xl mx-auto">
        <h3 class="text-xl font-bold text-white mb-6 text-center">能力概览</h3>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="p-4">
            <div class="text-3xl font-bold text-cyber-primary mb-2">Cloud Native</div>
            <p class="text-white/60 text-sm">微服务架构设计与实现</p>
            <p class="text-white/60 text-sm">容器化与 DevOps 实践</p>
          </div>
          <div class="p-4 border-x border-white/10">
            <div class="text-3xl font-bold text-cyber-secondary mb-2">Full Stack</div>
            <p class="text-white/60 text-sm">前后端全栈开发能力</p>
            <p class="text-white/60 text-sm">从原型到生产的完整交付</p>
          </div>
          <div class="p-4">
            <div class="text-3xl font-bold text-cyber-accent mb-2">3D Vision</div>
            <p class="text-white/60 text-sm">基于 3DGS 的三维重建</p>
            <p class="text-white/60 text-sm">无人机影像实时建模</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Server, Monitor, Brain, Wrench } from 'lucide-vue-next'

const backendTechs = [
  { name: 'Java', level: '精通' },
  { name: 'Spring Boot', level: '精通' },
  { name: 'Netty', level: '熟练' },
  { name: 'Python', level: '熟练' },
  { name: 'MySQL', level: '熟练' },
  { name: 'Redis', level: '熟练' },
  { name: 'RabbitMQ', level: '了解' },
]

const frontendTechs = [
  { name: 'Vue 3', level: '精通' },
  { name: 'TypeScript', level: '熟练' },
  { name: 'TailwindCSS', level: '熟练' },
  { name: 'Vite', level: '熟练' },
  { name: 'Element Plus', level: '熟练' },
]

const aiTechs = [
  { name: '3DGS', level: '研究中' },
  { name: 'LangChain', level: '熟练' },
  { name: 'LLM API', level: '熟练' },
  { name: 'OpenCV', level: '了解' },
]

const devopsTechs = [
  { name: 'Docker', level: '精通' },
  { name: 'CI/CD', level: '熟练' },
  { name: 'GitHub Actions', level: '熟练' },
  { name: 'Nginx', level: '熟练' },
  { name: 'Kubernetes', level: '了解' },
  { name: 'Linux', level: '熟练' },
]
</script>

<style scoped>
.glass {
  background: rgba(18, 18, 26, 0.6);
  backdrop-filter: blur(12px);
}
</style>
