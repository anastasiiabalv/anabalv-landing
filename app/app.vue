<template>
  <div>
    <NuxtLayout> <NuxtPage /> </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// defaults for every page, pages override title/description with usePageSeo()
useSeoMeta({
  ogSiteName: 'Ana Balieieva',
  ogType: 'website',
  ogLocale: 'en_US',
  ogImage: `${SITE_URL}/og-image.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Ana Balieieva — Built by a trader. Tested on real money.',
  twitterCard: 'summary_large_image',
  twitterSite: '@anabalvdev',
  twitterCreator: '@anabalvdev',
  twitterImage: `${SITE_URL}/og-image.jpg`
})
</script>
