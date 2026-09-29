<template>
  <section id="top" class="flex flex-wrap items-center gap-x-16 gap-y-14 pt-[clamp(48px,8vw,96px)]">
    <div class="flex min-w-0 flex-[1_1_440px] flex-col gap-7">
      <h1 class="m-0 font-mono text-[clamp(38px,6vw,64px)] leading-[1.08] font-normal tracking-[-.02em] text-balance">
        Built by a trader. <span class="text-bronze-400">Tested on real money.</span>
      </h1>
      <p class="m-0 max-w-[34em] text-[clamp(17px,1.6vw,19px)] leading-[1.6] text-pretty text-gray">
        FinTech dashboards, MetaTrader systems and trade copiers — built end to end by someone who trades.
      </p>
      <div class="flex flex-wrap gap-3 pt-2">
        <NuxtLink to="/#work" class="btn-primary">See my work</NuxtLink>
        <button type="button" class="btn-outline" @click="showcontact = true">Contact me</button>
      </div>
      <p class="m-0 font-mono text-[13px] leading-[1.6] text-ink-400">
        Nuxt · Vue · NestJS · MongoDB · MQL4/5 · Ubuntu VPS
      </p>
    </div>

    <div class="mx-auto w-full max-w-130 flex-[1_1_320px]">
      <div class="relative aspect-square w-full">
        <div class="absolute inset-x-[14%] top-[14%] bottom-0 bg-sand"></div>
        <NuxtImg
          src="hero/hero_img.png"
          alt="Ana Balieieva"
          draggable="false"
          class="absolute inset-0 h-full w-full object-contain object-bottom" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const showcontact = useState<boolean>('showcontact', () => false)
</script>
