<template>
  <div class="relative text-milk selection:bg-bronze/30">
    <ClientOnly>
      <div
        ref="spotlightLayer"
        class="pointer-events-none absolute top-0 left-0 w-full min-h-[200vh] z-0"
        :style="spotlightStyle"></div>
    </ClientOnly>
    <div class="relative z-10 flex flex-col min-h-screen">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)
const scrollYPosition = ref(0)

const spotlightStyle = computed(() => {
  const startFade = window.innerHeight * 0.4
  const endFade = window.innerHeight * 1.1

  let opacity = 1
  if (scrollYPosition.value > startFade) {
    opacity = Math.max(0, 1 - (scrollYPosition.value - startFade) / (endFade - startFade))
  }

  return {
    background: `radial-gradient(circle 600px at ${mouseX.value}px ${mouseY.value}px, rgba(177,155,140, ${0.1 * opacity}), transparent 80%)`
  }
})

const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY + window.scrollY
}

const handleScroll = () => {
  scrollYPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
div {
  transition: background 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
