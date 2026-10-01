<template>
  <footer
    class="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-ink-600 pt-6 pb-8 font-mono text-xs text-milk/50">
    <span>© Ana Balieieva</span>
    <nav class="flex flex-wrap gap-x-5">
      <NuxtLink v-for="link in socialLinks" :key="link.name" :to="link.url" target="_blank" class="link-muted py-1">
        {{ link.name }}
      </NuxtLink>
      <NuxtLink to="/about" class="link-muted py-1">About</NuxtLink>
      <NuxtLink to="/stack" class="link-muted py-1">Tech stack</NuxtLink>
    </nav>
    <span>Based in Poland · Works worldwide</span>
  </footer>
</template>

<script lang="ts" setup></script>
