<template>
  <Transition name="fade">
    <div
      v-if="showcontact"
      class="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/20 backdrop-blur-xs"
      @mousedown="onMousedown"
      @mouseup="onMouseup">
      <div class="relative w-full max-w-lg bg-[#0d0908] border border-bronze/50 p-10 shadow-2xl flex flex-col gap-y-10">
        <button
          type="button"
          class="absolute top-4 right-4 text-bronze hover:text-milk cursor-pointer trans text-xl"
          @click="showcontact = false">
          ✕
        </button>

        <div class="space-y-1">
          <h2 class="text-2xl!">Let's connect</h2>
          <p class="text-center text-bronze">Drop me a message and I'll get back to you shortly.</p>
        </div>

        <form class="flex flex-col gap-y-4" @submit.prevent="handleSubmit">
          <div class="flex flex-col gap-y-1">
            <label class="font-mono text-xs text-milk/50">Your Name</label>
            <input v-model.trim="name" type="text" required />
          </div>

          <div class="flex flex-col gap-y-1">
            <label class="font-mono text-xs text-milk/50">Email Address</label>
            <input v-model.trim="email" type="email" required />
          </div>

          <div class="flex flex-col gap-y-1">
            <label class="font-mono text-xs text-milk/50">Message</label>
            <textarea v-model="message" rows="4" required></textarea>
          </div>

          <button type="submit" class="mt-2 btn-bronzeblock text-xl">Send Message</button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
const name = ref('')
const email = ref('')
const message = ref('')
const isSending = ref(false)
const showcontact = useState<boolean>('showcontact')
const showalert = useState<string>('showalert', () => '')
const isMaskClick = ref(false)

const onMousedown = (event: MouseEvent) => {
  isMaskClick.value = event.target === event.currentTarget
}

const onMouseup = (event: MouseEvent) => {
  if (isMaskClick.value && event.target === event.currentTarget) {
    showcontact.value = false
  }
}

const handleSubmit = async () => {
  if (isSending.value) return
  isSending.value = true

  try {
    const res = await $fetch<ResendCall>('/api/contact', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: message.value
      }
    })

    if (res.success) {
      if (showalert.value) {
        showalert.value = ''
      }
      setTimeout(() => {
        name.value = ''
        email.value = ''
        message.value = ''
        showcontact.value = false
        showalert.value = 'Message sent succesfully.'
      }, 100)
    } else throw new Error('(error) ' + res.data.error)
  } catch (error) {
    console.error('Captured Form Exception:', error)
    showalert.value =
      error instanceof Error ? 'Unexpected error occured: ' + error.message : 'An unexpected error occurred.'
  } finally {
    isSending.value = false
  }
}
useHead({
  bodyAttrs: {
    class: computed(() => (showcontact.value ? 'overflow-hidden touch-none' : ''))
  }
})
</script>

<style>
@reference '@/assets/css/main.css';

input,
textarea {
  @apply w-full bg-brownblock border border-bronze/10 px-4 py-2.5 text-sm resize-none outline-none;
  @apply trans focus:border-bronze;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #1c1412 inset !important;
  outline: none !important;
  border-color: #15110e !important;
  -webkit-text-fill-color: #f7f4f0 !important;
}
</style>
