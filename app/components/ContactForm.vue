<template>
  <Transition name="fade">
    <div
      v-if="showcontact"
      class="fixed inset-0 z-30 flex items-center justify-center bg-black/20 p-4 backdrop-blur-xs"
      @mousedown="onMousedown"
      @mouseup="onMouseup">
      <div class="relative flex w-full max-w-lg flex-col gap-y-10 border border-bronze/50 bg-ink-950 p-10 shadow-2xl">
        <button
          type="button"
          aria-label="Close"
          class="trans absolute top-4 right-4 cursor-pointer text-xl text-bronze-400 hover:text-milk"
          @click="showcontact = false">
          ✕
        </button>

        <div class="space-y-1">
          <h2 class="m-0 text-center font-mono text-2xl font-normal">Let's connect</h2>
          <p class="text-center text-bronze-400">Drop me a message and I'll get back to you shortly.</p>
        </div>

        <ContactFormFields @sent="showcontact = false" />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
const showcontact = useState<boolean>('showcontact')
const isMaskClick = ref(false)

const onMousedown = (event: MouseEvent) => {
  isMaskClick.value = event.target === event.currentTarget
}

const onMouseup = (event: MouseEvent) => {
  if (isMaskClick.value && event.target === event.currentTarget) {
    showcontact.value = false
  }
}

useHead({
  bodyAttrs: {
    class: computed(() => (showcontact.value ? 'overflow-hidden touch-none' : ''))
  }
})
</script>
