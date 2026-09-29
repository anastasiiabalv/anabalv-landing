<template>
  <footer
    class="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-ink-600 pt-6 pb-8 font-mono text-xs text-milk/50">
    <span>© Ana Balieieva</span>
    <nav class="flex flex-wrap gap-x-5 gap-y-2">
      <NuxtLink v-for="link in socials" :key="link.name" :to="link.url" target="_blank" class="link-muted">
        {{ link.name }}
      </NuxtLink>
      <NuxtLink to="/stack" class="link-muted">Tech stack</NuxtLink>
    </nav>
    <span>Based in Poland · Works worldwide</span>
  </footer>
</template>

<script lang="ts" setup>
const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anastasiia-balieieva-33714936a/' },
  { name: 'GitHub', url: 'https://github.com/anastasiiabalv' },
  { name: 'X', url: 'https://x.com/anastasiiabalv' },
  { name: 'BlueSky', url: 'https://bsky.app/profile/anastasiiabalv.bsky.social' }
]
</script>
