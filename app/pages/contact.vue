<template>
  <section class="flex flex-wrap items-start gap-x-16 gap-y-12 pt-[clamp(48px,8vw,96px)] pb-[clamp(80px,12vw,160px)]">
    <div class="flex min-w-0 flex-[1_1_360px] flex-col gap-7">
      <p class="eyebrow">Contact</p>
      <h1 class="hero-title">Tell me what you need built.</h1>
      <p class="m-0 text-[15px] text-ink-400">Usually replies within a day</p>

      <div class="flex flex-col gap-3 border-t border-ink-600 pt-6 font-mono text-[15px]">
        <NuxtLink v-if="contactEmail" :to="`mailto:${contactEmail}`" class="link-accent w-fit">
          {{ contactEmail }}
        </NuxtLink>
        <NuxtLink :to="linkedinUrl" target="_blank" class="link-accent w-fit">LinkedIn ↗</NuxtLink>
        <NuxtLink :to="githubUrl" target="_blank" class="link-accent w-fit">GitHub ↗</NuxtLink>
        <NuxtLink v-if="upworkUrl" :to="upworkUrl" target="_blank" class="link-accent w-fit">Upwork ↗</NuxtLink>
      </div>
    </div>

    <div class="w-full min-w-0 flex-[1_1_420px] border border-bronze/30 bg-ink-950 p-[clamp(24px,4vw,40px)]">
      <ContactFormFields />
    </div>
  </section>
</template>

<script lang="ts" setup>
usePageSeo({
  title: 'Contact',
  description: 'Tell me what you trade and what you need built. Usually replies within a day.',
  path: '/contact'
})
</script>
