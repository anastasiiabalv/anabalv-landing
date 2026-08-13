<template>
  <section>
    <div class="flex flex-col justify-center gap-y-5 max-w-[37%] mt-20">
      <h1 class="font-mono text-4xl leading-15">
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
      <NuxtLink to="/about" class="btn-bronzelink">More about me</NuxtLink>
    </div>
    <div>
      <div class="absolute top-10 right-20 w-50 h-50 bg-linear-0 from-brownblock to-bronze -z-10"></div>
      <div class="absolute top-45 right-50 w-60 h-60 bg-[#B19B8C] -z-10"></div>
      <NuxtImg src="hero/hero_img.png" class="absolute top-30 right-40 w-80 h-auto" />
      <div class="absolute top-60 right-95 w-35 h-35 bg-linear-0 from-[#C1A79A] to-bronze -z-20"></div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped></style>
