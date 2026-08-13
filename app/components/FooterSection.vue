<template>
  <footer class="w-full bg-linear-180 from-transparent to-brownblock/50 min-h-50 mt-20">
    <div class="max-w-7xl mx-auto px-20 py-8 flex flex-col gap-12">
      <div class="px-10 flex justify-between w-full">
        <h3 class="font-mono text-4xl font-normal leading-15">Ana<br />Balieieva</h3>
        <div class="*:text-gray grid grid-cols-3 gap-10">
          <div>
            <h4>About</h4>
            <NuxtLink class="link" to="/about">About me</NuxtLink>
            <NuxtLink class="link" to="/#experience">Experience</NuxtLink>
          </div>
          <div>
            <h4>Services</h4>
            <NuxtLink class="link" to="/#services">General</NuxtLink>
            <NuxtLink class="link" to="/stack">Technologies</NuxtLink>
          </div>
          <div>
            <h4>Contact</h4>
            <NuxtLink class="link" to="/contact">Contact details</NuxtLink>
            <button class="link" @click="showcontact = true">Write me</button>
          </div>
        </div>
        <div>
          <h4>Find me on:</h4>
          <div class="grid grid-cols-2 gap-5 mt-5">
            <div class="flex gap-2">
              <NuxtImg src="footer/linkedin.svg" alt="LinkedIn" class="img" /><span>LinkedIn</span>
            </div>
            <div class="flex gap-2"><NuxtImg src="footer/x.svg" alt="LinkedIn" class="img" /><span>Twitter</span></div>
            <div class="flex gap-2">
              <NuxtImg src="footer/github.svg" alt="LinkedIn" class="img" /><span>GitHub</span>
            </div>
            <div class="flex gap-2">
              <NuxtImg src="footer/bluesky.svg" alt="LinkedIn" class="img" /><span>BlueSky</span>
            </div>
          </div>
        </div>
      </div>
      <p class="text-gray text-xs font-mono border-t border-[#453d39] pt-4">© Ana Balieieva. All rights reserved.</p>
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
