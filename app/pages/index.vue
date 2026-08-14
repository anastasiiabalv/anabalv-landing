<template>
  <div>
    <AlertMsg />
    <div :inert="showcontact" :class="{ 'opacity-40 trans': showcontact }">
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
    </div>
    <ContactSection />
  </div>
</template>

<script lang="ts" setup>
const showcontact = useState<boolean>('showcontact', () => false)

const router = useRouter()
onMounted(() => {
  if (window.location.hash) {
    router.replace({ hash: '' })
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped></style>
