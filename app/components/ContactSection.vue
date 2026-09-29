<template>
  <section id="contact" class="relative overflow-hidden py-[clamp(120px,16vw,200px)]">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 select-none">
      <div class="bgbox top-[8%] left-[2%] h-[clamp(110px,16vw,176px)] w-[clamp(90px,15vw,166px)]"></div>
      <div class="bgbox top-[14%] left-[58%] h-[clamp(90px,13vw,150px)] w-[clamp(80px,13vw,150px)]"></div>
      <div class="bgbox top-[44%] left-[30%] h-[clamp(60px,8vw,90px)] w-[clamp(60px,9vw,100px)]"></div>
      <div class="bgbox right-[10%] bottom-[10%] h-[clamp(100px,14vw,150px)] w-[clamp(90px,14vw,160px)]"></div>
    </div>

    <div class="relative mx-auto flex max-w-160 flex-col items-center gap-7 text-center">
      <p class="eyebrow">Contact</p>
      <h2 class="m-0 max-w-[14em] font-mono text-[clamp(32px,5vw,56px)] leading-[1.12] font-normal text-balance">
        Tell me what you trade and what you need built.
      </h2>
      <div class="flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
        <button type="button" class="btn-primary" @click="showcontact = true">Start a project</button>
        <NuxtLink
          to="https://www.linkedin.com/in/anastasiia-balieieva-33714936a/"
          target="_blank"
          class="trans border-b border-bronze/50 pb-0.5 font-mono text-base text-milk hover:text-bronze-400">
          Message me on LinkedIn
        </NuxtLink>
      </div>
      <p class="m-0 text-[15px] text-ink-400">Usually replies within a day</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
const showcontact = useState<boolean>('showcontact', () => false)
</script>

<style scoped>
@reference '@/assets/css/main.css';

.bgbox {
  @apply absolute bg-linear-180 from-[rgba(255,240,225,.035)] to-transparent;
}
</style>
