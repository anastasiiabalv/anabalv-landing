<template>
  <div>
    <ContactForm v-if="showcontact" />
    <AlertMsg v-if="showalert" />
    <div :class="{ 'pointer-events-none select-none opacity-40 transition-all duration-300': showcontact }">
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
    </div>
    <ContactSection />
  </div>
</template>

<script lang="ts" setup>
const showcontact = useState<boolean>('showcontact', () => false)
const showalert = useState<string>('showalert')

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
