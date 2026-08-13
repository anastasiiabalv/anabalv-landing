<template>
  <BgInteractive>
    <div class="flex flex-col min-h-screen">
      <div class="w-full max-w-7xl mx-auto px-10 grow">
        <NavBar />
        <main>
          <slot></slot>
        </main>
      </div>
      <FooterSection />
    </div>
  </BgInteractive>
</template>
