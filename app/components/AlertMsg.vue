<template>
  <div :key="showalert" class="fixed left-5 bottom-5 bg-bronze px-7 py-3 z-30 animate-fade-alert max-w-[50%]">
    {{ showalert }}
  </div>
</template>

<script lang="ts" setup>
const showalert = useState<string>('showalert')
</script>

<style scoped>
.animate-fade-alert {
  animation: fadeAlert ease-in-out 4s forwards;
}

@keyframes fadeAlert {
  0%,
  100% {
    opacity: 0;
  }
  10%,
  70% {
    opacity: 1;
  }
}
</style>
