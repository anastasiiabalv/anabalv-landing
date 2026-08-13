<template>
  <section id="experience">
    <h2>Experience</h2>
    <!-- fxats -->
    <div class="grid">
      <div class="flexcol">
        <div class="flex gap-10">
          <NuxtImg src="logo-fxats.svg" alt="FX-ATS logo" class="w-20 rounded-xl border border-bronze" />
          <div class="flex flex-col justify-evenly">
            <h3>Founding software engineer</h3>
            <p class="">FX-ATS Group</p>
          </div>
        </div>
        <p>
          Engineered the <b>entire application architecture</b> single-handedly, managed deployments, optimized data
          delivery, and designed web pages.
        </p>
        <div class="flex gap-10">
          <div class="infobox">
            <p class="text-3xl text-milk!">2 years</p>
            <p class="">working</p>
          </div>
          <NuxtLink to="https://github.com/FX-ATS-Dev" class="btn-bronzelink flexbox"
            >See structure & <br />
            technologies used
          </NuxtLink>
        </div>
      </div>
      <div>*VIDEO*</div>
    </div>

    <hr class="border-[#5A514D] my-10" />

    <!-- design -->
    <div class="grid">
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
      <div>*VIDEO*</div>
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

.grid {
  @apply grid grid-cols-2 gap-20;
}
</style>
