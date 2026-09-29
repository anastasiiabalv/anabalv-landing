<template>
  <form class="flex flex-col gap-y-4" @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-y-1">
      <label :for="`${uid}-name`" class="font-mono text-xs text-milk/50">Your Name</label>
      <input :id="`${uid}-name`" v-model.trim="name" type="text" autocomplete="name" required />
    </div>

    <div class="flex flex-col gap-y-1">
      <label :for="`${uid}-email`" class="font-mono text-xs text-milk/50">Email Address</label>
      <input :id="`${uid}-email`" v-model.trim="email" type="email" autocomplete="email" required />
    </div>

    <div class="flex flex-col gap-y-1">
      <label :for="`${uid}-msg`" class="font-mono text-xs text-milk/50">Message</label>
      <textarea :id="`${uid}-msg`" v-model="message" rows="5" required></textarea>
    </div>

    <button type="submit" class="btn-primary mt-2" :disabled="isSending">
      {{ isSending ? 'Sending…' : 'Send Message' }}
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits<{ sent: [] }>()

const uid = useId()
const name = ref('')
const email = ref('')
const message = ref('')
const isSending = ref(false)
const showalert = useState<string>('showalert', () => '')

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
        emit('sent')
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
</script>

<style>
@reference '@/assets/css/main.css';

input,
textarea {
  @apply w-full resize-none border border-bronze/10 bg-ink-800 px-4 py-2.5 text-sm text-milk outline-none;
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
