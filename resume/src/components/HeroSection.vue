<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative grid-bg">
    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-32 h-32 border border-cyber-primary/20 rounded-full animate-pulse-slow"></div>
    <div class="absolute bottom-20 right-10 w-48 h-48 border border-cyber-secondary/20 rounded-full animate-pulse-slow" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/3 right-1/4 w-2 h-2 bg-cyber-primary rounded-full animate-float"></div>
    <div class="absolute bottom-1/3 left-1/4 w-3 h-3 bg-cyber-secondary rounded-full animate-float" style="animation-delay: 2s;"></div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <!-- Status badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span class="text-sm text-cyber-primary/80">Available for opportunities</span>
      </div>

      <!-- Main title with typewriter effect -->
      <h1 class="text-5xl md:text-7xl font-bold mb-3">
        <span class="gradient-text glow-text">王顺</span>
      </h1>
      <h2 class="text-2xl md:text-4xl font-light mb-4 text-white/90">
        Wang Shun
      </h2>

      <!-- Typewriter subtitle -->
      <div class="h-8 mb-6">
        <p class="text-xl md:text-2xl text-cyber-primary">
          <span class="typewriter-text">{{ displayText }}</span>
          <span class="cursor"></span>
        </p>
      </div>

      <!-- Core info cards - 居中对称布局 -->
      <div class="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto mb-8">
        <!-- Education -->
        <div class="glass rounded-xl p-5 text-left glow-border-hover flex-1 max-w-md">
          <div class="flex items-center gap-2 mb-3">
            <GraduationCap class="w-5 h-5 text-cyber-primary" />
            <span class="text-cyber-primary font-semibold">Education</span>
          </div>
          <div class="space-y-2 text-sm">
            <div>
              <p class="text-white font-medium">上海海洋大学 · 硕士</p>
              <p class="text-white/60">计算机技术 (2025.09 - 2028.06)</p>
              <p class="text-cyber-primary/70 text-xs mt-1">研究方向：基于 3DGS 的无人机影像实时三维建模</p>
            </div>
            <div class="border-t border-cyber-primary/10 pt-2">
              <p class="text-white font-medium">山东理工大学 · 本科</p>
              <p class="text-white/60">数据科学与大数据技术 (2021.09 - 2025.06)</p>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <div class="glass rounded-xl p-5 text-left glow-border-hover flex-1 max-w-md">
          <div class="flex items-center gap-2 mb-3">
            <Contact class="w-5 h-5 text-cyber-secondary" />
            <span class="text-cyber-secondary font-semibold">Contact</span>
          </div>
          <div class="space-y-3">
            <a href="mailto:2606209307@qq.com" class="flex items-center gap-3 text-white/80 hover:text-cyber-primary transition-colors group">
              <Mail class="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span class="text-sm">2606209307@qq.com</span>
            </a>
            <a href="https://github.com/xixi-box" target="_blank" class="flex items-center gap-3 text-white/80 hover:text-cyber-primary transition-colors group">
              <Github class="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span class="text-sm">github.com/xixi-box</span>
            </a>
            <div class="flex items-center gap-3 text-white/80">
              <MapPin class="w-4 h-4" />
              <span class="text-sm">Shanghai, China</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Role badges -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <span class="px-4 py-2 rounded-full border border-cyber-primary/30 text-cyber-primary bg-cyber-primary/5 text-sm">
          Cloud Native Developer
        </span>
        <span class="px-4 py-2 rounded-full border border-cyber-secondary/30 text-cyber-secondary bg-cyber-secondary/5 text-sm">
          Full Stack Engineer
        </span>
        <span class="px-4 py-2 rounded-full border border-cyber-accent/30 text-cyber-accent bg-cyber-accent/5 text-sm">
          AI Agent Developer
        </span>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown class="w-6 h-6 text-cyber-primary/50" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { GraduationCap, Contact, Mail, Github, MapPin, ChevronDown } from 'lucide-vue-next'

const roles = [
  'Cloud Native Developer',
  'Microservices Architect',
  'AI Agent Developer',
  'Full Stack Engineer'
]

const displayText = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typingSpeed = 100

const typeWriter = () => {
  const currentRole = roles[roleIndex]

  if (isDeleting) {
    displayText.value = currentRole.substring(0, charIndex - 1)
    charIndex--
    typingSpeed = 50
  } else {
    displayText.value = currentRole.substring(0, charIndex + 1)
    charIndex++
    typingSpeed = 100
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true
    typingSpeed = 2000 // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
    typingSpeed = 500 // Pause before typing
  }

  setTimeout(typeWriter, typingSpeed)
}

onMounted(() => {
  typeWriter()
})
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.typewriter-text {
  display: inline;
}
</style>
