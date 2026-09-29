<template>
  <section class="section-pad">
    <p class="eyebrow mb-10">Proof</p>
    <figure class="m-0 flex max-w-220 flex-col gap-6">
      <blockquote class="m-0 font-mono text-[clamp(22px,2.6vw,30px)] leading-[1.4] text-pretty text-milk">
        “I am super pleased with the work Anastasiia did for me. She understood exactly the challenges with my codes and
        solved the issues within 10 minutes. I recommend her services.”
      </blockquote>
      <figcaption class="text-[15px] text-ink-400">— Upwork client, MQL4 code correction · ★ 5.0</figcaption>
    </figure>
    <div class="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-8 border-t border-ink-600 pt-8">
      <div>
        <p class="m-0 font-mono text-[clamp(36px,4vw,48px)] leading-none text-milk">5.0 ★</p>
        <p class="mt-3 mb-0 text-sm text-ink-400">Upwork rating</p>
      </div>
      <div>
        <p class="m-0 font-mono text-[clamp(36px,4vw,48px)] leading-none text-milk">24/7</p>
        <p class="mt-3 mb-0 text-sm text-ink-400">systems running on VPS with auto-reconnect</p>
      </div>
    </div>
    <div class="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[15px]">
      <NuxtLink
        to="https://github.com/anastasiiabalv"
        target="_blank"
        class="link-accent inline-flex min-h-11 items-center gap-2.5">
        <NuxtImg src="footer/github.svg" alt="" class="h-5 w-5" />GitHub ↗
      </NuxtLink>
      <NuxtLink v-if="upworkUrl" :to="upworkUrl" target="_blank" class="link-accent inline-flex min-h-11 items-center">
        Upwork profile ↗
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
// TODO: put the Upwork profile URL here to show the link
const upworkUrl = ''
</script>
