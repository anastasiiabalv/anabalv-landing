<template>
  <section class="section-pad">
    <p class="eyebrow mb-12">{{ label }}</p>
    <div class="flex flex-wrap items-start gap-x-16 gap-y-14" :class="{ 'flex-row-reverse': reverse }">
      <div class="@container flex min-w-0 flex-[1_1_380px] flex-col gap-7">
        <div class="flex items-center gap-4">
          <NuxtImg v-if="logo" :src="logo" :alt="title" class="block h-12 w-12 rounded-xl" />
          <div>
            <h3 class="m-0 font-mono text-[clamp(26px,3vw,34px)] leading-[1.2] font-normal">{{ title }}</h3>
            <p class="mt-0.5 mb-0 text-sm text-ink-400">{{ role }}</p>
          </div>
        </div>
        <p class="m-0 text-[17px] leading-[1.65] text-pretty text-gray">{{ description }}</p>
        <div class="flex flex-col gap-2.5">
          <p class="m-0 font-mono text-xs tracking-[.08em] text-milk/50 uppercase">What I built</p>
          <ul class="bullet-list">
            <li v-for="item in built" :key="item">{{ item }}</li>
          </ul>
        </div>
        <!-- one column on narrow screens, so "2 yrs" and "< 1 s" don't break -->
        <div class="grid grid-cols-1 gap-5 border-t border-ink-600 pt-6 @sm:grid-cols-3 @sm:gap-6">
          <div v-for="stat in stats" :key="stat.value">
            <p class="stat-value">{{ stat.value }}</p>
            <p class="stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <div
        class="grid min-w-0 flex-[1.3_1_440px] grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-5 gap-y-7">
        <figure v-for="shot in shots" :key="shot.caption" class="m-0 flex flex-col gap-2.5">
          <!-- a single shot keeps its own proportions (e.g. a diagram), several are cropped to one grid -->
          <NuxtImg
            v-if="shot.src"
            :src="shot.src"
            :alt="shot.alt"
            :width="single ? 960 : 480"
            :sizes="single ? 'sm:100vw lg:720px' : 'sm:100vw md:50vw lg:360px'"
            format="webp"
            loading="lazy"
            class="block w-full border border-milk/10"
            :class="single ? 'h-auto' : 'aspect-16/10 object-cover object-top'" />
          <div v-else class="aspect-16/10 w-full border border-milk/10 bg-ink-850"></div>
          <figcaption class="text-[13px] leading-[1.45] text-ink-400">{{ shot.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

export interface CaseShot {
  src?: string
  alt?: string
  caption: string
}

const props = defineProps<{
  label: string
  title: string
  role: string
  logo?: string
  description: string
  built: string[]
  stats: { value: string; label: string }[]
  shots: CaseShot[]
  reverse?: boolean
}>()

const single = computed(() => props.shots.length === 1)
</script>
