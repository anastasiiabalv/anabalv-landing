<template>
  <footer class="w-full bg-linear-180 from-transparent to-brownblock/50 min-h-50 mt-20">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-8 flex flex-col gap-8 md:gap-12">
      <div class="px-0 sm:px-10 flex flex-col lg:flex-row justify-between w-full gap-10 lg:gap-0">
        <h3 class="font-mono text-3xl md:text-4xl font-normal leading-tight lg:leading-15 text-center lg:text-left">
          Ana<br class="hidden lg:inline" /><span class="inline lg:hidden"> </span>Balieieva
        </h3>
        <div class="*:text-gray grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center sm:text-left">
          <div>
            <h4>About</h4>
            <!-- <NuxtLink class="link" to="/about">About me</NuxtLink> -->
            <NuxtLink class="link" to="/#experience">Experience</NuxtLink>
          </div>
          <div>
            <h4>Services</h4>
            <NuxtLink class="link" to="/#services">General</NuxtLink>
            <NuxtLink class="link" to="/stack">Technologies</NuxtLink>
          </div>
          <div>
            <h4>Contact</h4>
            <!-- <NuxtLink class="link" to="/contact">Contact details</NuxtLink> -->
            <button class="link w-full sm:w-auto" @click="showcontact = true">Contact me</button>
          </div>
        </div>
        <div class="text-center lg:text-left">
          <h4>Find me on:</h4>
          <div class="grid grid-cols-2 gap-x-5 gap-y-3 mt-4 max-w-xs mx-auto lg:mx-0">
            <NuxtLink
              class="flex! gap-2 link items-center justify-center lg:justify-start text-gray"
              to="https://linkedin.com"
              target="_blank">
              <NuxtImg src="footer/linkedin.svg" alt="LinkedIn" class="img" /><span>LinkedIn</span>
            </NuxtLink>
            <NuxtLink
              class="flex! gap-2 link items-center justify-center lg:justify-start text-gray"
              to="https://x.com"
              target="_blank">
              <NuxtImg src="footer/x.svg" alt="LinkedIn" class="img" /><span>Twitter</span>
            </NuxtLink>
            <NuxtLink
              class="flex! gap-2 link items-center justify-center lg:justify-start text-gray"
              to="https://github.com"
              target="_blank">
              <NuxtImg src="footer/github.svg" alt="LinkedIn" class="img" /><span>GitHub</span>
            </NuxtLink>
            <NuxtLink
              class="flex! gap-2 link items-center justify-center lg:justify-start text-gray"
              to="https://bsky.app"
              target="_blank">
              <NuxtImg src="footer/bluesky.svg" alt="LinkedIn" class="img" /><span>BlueSky</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <p class="text-gray text-xs font-mono border-t border-[#453d39] pt-4 text-center sm:text-left">
        © Ana Balieieva. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const showcontact = useState<boolean>('showcontact')
</script>

<style scoped>
@reference '@/assets/css/main.css';

.img {
  @apply h-6 w-auto;
}

h4 {
  @apply text-milk! font-semibold text-xl mb-3;
}

.link {
  @apply leading-8 cursor-pointer block trans hover:text-milk hover:text-shadow-[0_0_10px_rgba(177,155,140,0.5)];
}
</style>
