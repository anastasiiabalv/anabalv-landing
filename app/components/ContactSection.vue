<template>
  <section id="contact" class="relative min-h-100 md:min-h-150 w-full flexbox mt-30 px-4 md:px-0">
    <div class="absolute inset-0 pointer-events-none select-none overflow-hidden">
      <div class="top-10 -left-10 w-40 md:w-60 h-40 md:h-60 bgbox"></div>
      <div class="top-[40%] left-[10%] md:left-[32%] w-24 md:w-30 h-24 md:h-30 opacity-70 bgbox"></div>
      <div class="top-20 right-[5%] md:right-[20%] w-36 md:w-45 h-36 md:h-45 bgbox"></div>
      <div class="bottom-5 right-[-5%] md:right-[5%] w-36 md:w-48 h-36 md:h-48 bgbox"></div>
    </div>

    <div class="relative z-10 max-w-lg text-milk text-center">
      <p class="text-xl md:text-2xl leading-relaxed">
        Ready to bring your Web product to life or need a technical hand? Don't hesitate to reach out to discuss it
        together!
      </p>
      <button class="btn-bronzeblock mt-6 md:mt-8 w-full sm:w-auto" @click="showcontact = !showcontact">
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
