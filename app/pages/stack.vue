<template>
  <div class="pt-[clamp(48px,8vw,96px)]">
    <h1 class="section-title mb-12">My tech stack</h1>
    <!-- on phones the image keeps a readable size and scrolls sideways -->
    <div class="mb-30 overflow-x-auto border border-bronze/50">
      <NuxtImg src="TEMP_techstack.svg" :indent="true" class="block w-full min-w-180" draggable="false"></NuxtImg>
    </div>
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
