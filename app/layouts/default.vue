<template>
  <BgInteractive>
    <div class="flex min-h-screen flex-col">
      <div class="mx-auto w-full max-w-7xl grow px-[clamp(20px,5vw,40px)]">
        <NavBar />
        <ContactForm v-if="showcontact" />
        <main>
          <slot></slot>
        </main>
        <FooterSection />
      </div>
    </div>
  </BgInteractive>
</template>

<script lang="ts" setup>
const showcontact = useState<boolean>('showcontact', () => false)
</script>
