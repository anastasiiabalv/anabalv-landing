<template>
  <section id="services" class="section-pad">
    <p class="eyebrow mb-4">Services</p>
    <h2 class="section-title mb-12">What you can hire me for</h2>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-5">
      <div v-for="service in services" :key="service.title" class="card">
        <h3 class="m-0 text-xl leading-[1.4] font-semibold">{{ service.title }}</h3>
        <ul class="bullet-list text-[15px]">
          <li v-for="item in service.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <p class="mt-7 mb-0 font-mono text-sm text-gray">Typical project: 2–6 weeks</p>
  </section>
</template>

<script lang="ts" setup>
const services = [
  {
    title: 'FinTech dashboards',
    items: [
      'Live account and strategy analytics',
      'Investor-facing performance pages',
      'Payment integrations (PayU API)'
    ]
  },
  {
    title: 'MetaTrader systems',
    items: [
      'Expert Advisors and indicators in MQL4/5',
      'Trade copiers between accounts and brokers',
      'Fixes for EAs that fail on live accounts'
    ]
  },
  {
    title: 'Full-stack web apps',
    items: ['Nuxt / Vue front ends', 'NestJS APIs and MongoDB data models', 'Product UI and interface design']
  },
  {
    title: 'DevOps and support',
    items: [
      'VPS setup for web apps and terminals',
      'Domains, SSL and Git-based deployment',
      'Ongoing support after launch'
    ]
  }
]
</script>
