<template>
  <section class="relative min-h-150 w-full flexbox mt-30">
    <div class="absolute inset-0 pointer-events-none select-none">
      <div class="top-10 -left-10 w-60 h-60 bgbox"></div>
      <div class="top-[40%] left-[32%] w-30 h-30 opacity-70 bgbox"></div>
      <div class="top-20 right-[20%] w-45 h-45 bgbox"></div>
      <div class="bottom-5 right-[5%] w-48 h-48 bgbox"></div>
    </div>

    <div class="relative z-10 max-w-lg text-milk text-center">
      <p class="text-2xl">
        Ready to bring your Web product to life or need a technical hand? Don't hesitate to reach out to discuss it
        together!
      </p>
      <button
        class="bg-bronze px-7 py-3 text-2xl trans hover:bg-[#928178] hover:shadow-[0_0_10px_rgba(177,155,140,0.5)] mt-10 cursor-pointer active:bg-milk"
        @click="showcontact = true">
        Contact me
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
const showcontact = useState<boolean>('showcontact', () => false)
</script>

<style scoped>
@reference '@/assets/css/main.css';

.bgbox {
  @apply -z-10 bg-linear-180 from-brownblock to-transparent absolute;
}
</style>
