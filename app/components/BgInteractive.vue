<template>
  <div class="relative min-h-screen bg-[#0d0908] text-milk selection:bg-bronze/30">
    <div
      ref="spotlightLayer"
      class="pointer-events-none absolute top-0 left-0 w-full h-180 z-0 overflow-hidden"
      :style="spotlightStyle"></div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)
const isOutsideHero = ref(false)

const spotlightStyle = computed(() => {
  if (isOutsideHero.value) {
    return { background: 'transparent' }
  }
  return {
    background: `radial-gradient(circle 600px at ${mouseX.value}px ${mouseY.value}px, rgba(177,155,140,0.1), transparent 80%)`
  }
})

const handleMouseMove = (event: MouseEvent) => {
  if (window.scrollY > window.innerHeight) {
    isOutsideHero.value = true
    return
  }

  isOutsideHero.value = false
  mouseX.value = event.clientX
  mouseY.value = event.clientY + window.scrollY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
div {
  transition: background 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
