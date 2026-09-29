<template>
  <section class="section-pad">
    <p class="eyebrow mb-4">Toolkit</p>
    <h2 class="section-title mb-12">What I build with</h2>
    <dl class="m-0 flex flex-col border-b border-ink-600">
      <div
        v-for="group in toolkit"
        :key="group.name"
        class="grid grid-cols-1 gap-x-12 gap-y-2 border-t border-ink-600 py-6 sm:grid-cols-[200px_1fr]">
        <dt class="font-mono text-xs tracking-[.08em] text-milk/50 uppercase sm:pt-1">{{ group.name }}</dt>
        <dd class="m-0 text-lg leading-normal text-milk">{{ group.items.join(' · ') }}</dd>
      </div>
    </dl>
  </section>
</template>

<script lang="ts" setup>
const toolkit = [
  { name: 'Front-end', items: ['Nuxt', 'Vue.js', 'Pinia', 'Tailwind CSS'] },
  { name: 'Back-end', items: ['NestJS', 'TypeORM', 'Redis'] },
  { name: 'Databases', items: ['MongoDB', 'MySQL'] },
  { name: 'DevOps', items: ['Ubuntu', 'VPS', 'SSH', 'GitHub Actions', 'PM2', 'Playwright'] },
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'MQL4/MQL5', 'Python'] }
]
</script>
