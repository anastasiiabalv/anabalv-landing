<template>
  <section id="experience" class="translate-y-20">
    <h2>Experience</h2>
    <!-- fxats -->
    <div class="section-grid">
      <div class="flexcol">
        <div class="flex gap-10">
          <NuxtImg src="logo-fxats.svg" alt="FX-ATS logo" class="w-20 rounded-xl border border-bronze" />
          <div class="flex flex-col justify-evenly">
            <h3>Founding software engineer</h3>
            <p class="">FX-ATS Group</p>
          </div>
        </div>
        <p>
          Engineered the <b>entire FinTech application architecture</b> single-handedly, managed deployments, optimized
          data delivery, and designed web pages.
        </p>
        <div class="flex gap-10">
          <div class="infobox">
            <p class="text-3xl text-milk!">2 years</p>
            <p class="">working</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-1 h-full content-stretch">
        <NuxtImg v-for="ind in 4" :key="ind" :src="`/examples/fx_${ind}.png`" class="w-full h-full object-cover" />
      </div>
    </div>

    <hr class="border-[#453d39] my-10" />

    <!-- design -->
    <div class="section-grid">
      <div class="flexcol">
        <h3>Digital & motion design</h3>
        <p class="">Started as a hobby, it later became an integral part of my web development workflow.</p>
        <div class="flex gap-10">
          <div class="infobox">
            <p class="text-3xl text-milk!">400+</p>
            <p class="">video edits</p>
          </div>
          <div class="infobox">
            <p class="text-3xl text-milk!">6 years</p>
            <p class="">experience</p>
          </div>
        </div>
      </div>
      <NuxtImg src="examples/cloud_preview.png" class="border-2 border-bronze w-full h-full object-cover"></NuxtImg>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
@reference '@/assets/css/main.css';

.infobox {
  @apply bg-brownblock min-w-35 h-25 flexbox p-3 rounded-none;
  @apply trans hover:border-bronze/30 hover:shadow-[0_0_30px_rgba(177,155,140,0.15)];
}

.section-grid {
  @apply grid grid-cols-2 gap-20 items-center;
}
</style>
