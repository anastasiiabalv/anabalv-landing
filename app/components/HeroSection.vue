<template>
  <PageHero id="top">
    <h1 class="hero-title">Built by a trader. <span class="text-bronze-400">Tested on real money.</span></h1>
    <p class="hero-sub">
      FinTech dashboards, MetaTrader systems and trade copiers — built end to end by someone who trades.
    </p>
    <div class="flex flex-wrap gap-3 pt-2">
      <NuxtLink to="/#work" class="btn-primary">See my work</NuxtLink>
      <button type="button" class="btn-outline" @click="showcontact = true">Contact me</button>
    </div>
    <p class="m-0 font-mono text-[13px] leading-[1.6] text-ink-400">
      Nuxt · Vue · NestJS · MongoDB · MQL4/5 · Ubuntu VPS
    </p>
  </PageHero>
</template>

<script lang="ts" setup>
const showcontact = useState<boolean>('showcontact', () => false)
</script>
