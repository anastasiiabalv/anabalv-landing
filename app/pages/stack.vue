<template>
  <div class="pt-[clamp(48px,8vw,96px)]">
    <h1 class="section-title mb-12">My tech stack</h1>
    <NuxtImg
      src="TEMP_techstack.svg"
      :indent="true"
      class="mb-30 w-full border border-bronze/50"
      draggable="false"></NuxtImg>
  </div>
</template>

<script lang="ts" setup>
usePageSeo({
  title: 'Tech stack',
  description:
    'The frameworks, databases and tools I use to build FinTech dashboards, MetaTrader systems and web apps.',
  path: '/stack'
})
</script>
