<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <ExperienceSection />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
onMounted(() => {
  if (window.location.hash) {
    router.replace({ hash: '' })
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
})
</script>

<style scoped></style>
