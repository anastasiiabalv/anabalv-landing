<template>
  <div>
    <div :inert="showcontact" :class="{ 'opacity-40 trans': showcontact }">
      <HeroSection />
      <ProblemsSection />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <ProofSection />
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

usePageSeo({
  title: 'Ana Balieieva · FinTech and MetaTrader developer',
  description:
    'FinTech dashboards, MetaTrader systems and trade copiers — built end to end by a developer who trades. MQL4/5, Nuxt, NestJS, VPS.',
  path: '/',
  fullTitle: true
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped></style>
