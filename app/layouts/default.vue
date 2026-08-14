<template>
  <BgInteractive>
    <div class="flex flex-col min-h-screen">
      <div class="w-full max-w-7xl mx-auto px-10 grow">
        <NavBar />
        <ContactForm v-if="showcontact" />
        <main>
          <slot></slot>
        </main>
      </div>
      <FooterSection />
    </div>
  </BgInteractive>
</template>

<script lang="ts" setup>
const showcontact = useState<boolean>('showcontact', () => false)
</script>
