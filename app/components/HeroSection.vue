<template>
  <section
    class="relative flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-y-10 md:gap-y-0">
    <div class="flex flex-col justify-center gap-y-5 w-full max-w-full md:max-w-[37%] mt-30 order-2 md:order-1">
      <h1 class="font-mono text-4xl md:text-5xl leading-tight md:leading-20 text-center md:text-left">
        Full-Stack <br class="hidden md:inline" />
        Web Development
      </h1>
      <div class="flex justify-center md:justify-between gap-x-4 md:gap-x-0 overflow-x-auto py-2">
        <NuxtImg
          v-for="val in 6"
          :key="val"
          :src="`hero/icon_${val}.svg`"
          draggable="false"
          alt=""
          aria-hidden="true"
          class="h-7 hover:scale-105 trans flex-shrink-0" />
      </div>
      <hr class="border-bronze" />
      <p class="text-justify text-base md:text-lg">
        Hi, I'm Ana — a Ukrainian <b>Full-Stack developer</b> and digital designer based in Poland. I build functional
        web applications from initial design to deployment.
      </p>
    </div>

    <div class="relative flex-1 w-full min-h-[400px] hidden md:block order-1 md:order-2">
      <div class="absolute -top-10 right-10 w-50 h-50 bg-linear-0 from-brownblock to-bronze -z-10"></div>
      <div class="absolute top-35 right-30 w-70 h-80 bg-[#B19B8C] -z-10"></div>
      <NuxtImg src="hero/hero_img.png" class="absolute top-20 right-20 w-100 h-auto" />
      <div class="absolute top-60 right-85 w-40 h-45 bg-linear-0 from-[#C1A79A] to-bronze -z-20"></div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped></style>
