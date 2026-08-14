<template>
  <!-- FIX 1: Added relative, flex, justify-between, and items-start to layout columns side-by-side -->
  <section class="relative flex justify-between items-start w-full">
    <div class="flex flex-col justify-center gap-y-5 max-w-[37%] mt-30">
      <h1 class="font-mono text-5xl leading-20">
        Full-Stack <br />
        Web Development
      </h1>
      <div class="flex justify-between">
        <NuxtImg
          v-for="val in 6"
          :key="val"
          :src="`hero/icon_${val}.svg`"
          draggable="false"
          alt=""
          aria-hidden="true"
          class="h-7 hover:scale-105 trans" />
      </div>
      <hr class="border-bronze" />
      <p class="text-justify">
        Hi, I'm Ana — a Ukrainian <b>Full-Stack developer</b> and digital designer based in Poland. I build functional
        web applications from initial design to deployment.
      </p>
      <!-- <NuxtLink to="/about" class="btn-bronzelink">More about me</NuxtLink> -->
    </div>

    <div class="relative flex-1 w-full">
      <div class="absolute -top-10 right-10 w-50 h-50 bg-linear-0 from-brownblock to-bronze -z-10"></div>
      <div class="absolute top-35 right-30 w-70 h-80 bg-[#B19B8C] -z-10"></div>
      <NuxtImg src="hero/hero_img.png" class="absolute top-20 right-20 w-100 h-auto" />
      <div class="absolute top-60 right-85 w-40 h-45 bg-linear-0 from-[#C1A79A] to-bronze -z-20"></div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped></style>
