<template>
  <div class="relative grid grid-cols-12 items-start gap-4 pt-7">
    <NuxtLink class="col-span-4" to="/">
      <span class="text-2xl logo">Ana</span>
      <span class="text-lgs logo">Balieieva</span>
    </NuxtLink>
    <div class="col-span-5 flex justify-between">
      <NuxtLink to="#services" class="btn-link">services</NuxtLink>
      <NuxtLink to="/projects" class="btn-link">projects</NuxtLink>
      <NuxtLink to="/about" class="btn-link">about</NuxtLink>
      <NuxtLink to="/contact" class="btn-link">contact</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@reference '@/assets/css/main.css';

.logo {
  @apply block font-mono select-none cursor-pointer;
}
</style>
