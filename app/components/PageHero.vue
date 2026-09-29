<template>
  <section class="flex flex-wrap items-center gap-x-16 gap-y-14 pt-[clamp(48px,8vw,96px)]">
    <div class="flex min-w-0 flex-[1_1_440px] flex-col gap-7">
      <slot />
    </div>

    <div class="mx-auto w-full max-w-130 flex-[1_1_320px]">
      <div class="relative aspect-square w-full">
        <div class="absolute inset-x-[14%] top-[14%] bottom-0 bg-sand"></div>
        <NuxtImg
          src="hero/hero_img.png"
          alt="Ana Balieieva"
          width="520"
          height="520"
          sizes="sm:100vw md:520px"
          format="webp"
          preload
          fetchpriority="high"
          draggable="false"
          class="absolute inset-0 h-full w-full object-contain object-bottom" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
