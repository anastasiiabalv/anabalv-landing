<template>
  <section id="experience" class="translate-y-20">
    <h2 class="text-center md:text-left">Experience</h2>
    <!-- fxats -->
    <div class="section-grid">
      <div class="flexcol">
        <div class="flex gap-6 md:gap-10">
          <NuxtImg
            src="logo-fxats.svg"
            alt="FX-ATS logo"
            class="w-16 md:w-20 h-16 md:h-20 rounded-xl border border-bronze" />
          <div class="flex flex-col justify-evenly">
            <h3 class="text-xl md:text-2xl">Founding software engineer</h3>
            <p class="">FX-ATS Group</p>
          </div>
        </div>
        <p>
          Engineered the <b>entire FinTech application architecture</b> single-handedly, managed deployments, optimized
          data delivery, and designed web pages.
        </p>
        <div class="flex gap-4 md:gap-10">
          <div class="infobox">
            <p class="text-2xl md:text-3xl text-milk!">2 years</p>
            <p class="">working</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-1 w-full aspect-video md:aspect-auto md:h-full content-stretch">
        <NuxtImg v-for="ind in 4" :key="ind" :src="`/examples/fx_${ind}.png`" class="w-full h-full object-cover" />
      </div>
    </div>

    <hr class="border-[#453d39] my-6 md:my-10" />

    <!-- design -->
    <div class="section-grid">
      <div class="flexcol">
        <h3>Digital & motion design</h3>
        <p class="">Started as a hobby, it later became an integral part of my web development workflow.</p>
        <div class="flex gap-4 md:gap-10">
          <div class="infobox">
            <p class="text-2xl md:text-3xl text-milk!">400+</p>
            <p class="">video edits</p>
          </div>
          <div class="infobox">
            <p class="text-2xl md:text-3xl text-milk!">6 years</p>
            <p class="">experience</p>
          </div>
        </div>
      </div>
      <NuxtImg
        src="examples/cloud_preview.png"
        class="border-2 border-bronze w-full aspect-video md:aspect-auto md:h-full object-cover"></NuxtImg>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
@reference '@/assets/css/main.css';

.infobox {
  @apply bg-brownblock min-w-28 md:min-w-35 h-20 md:h-25 flexbox p-3 rounded-none;
  @apply trans hover:border-bronze/30 hover:shadow-[0_0_30px_rgba(177,155,140,0.15)];
}

.section-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center;
}
</style>
