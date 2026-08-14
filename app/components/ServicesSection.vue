<template>
  <section id="services" class="translate-y-15">
    <h2 class="text-center md:text-left">Services</h2>

    <div class="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 mb-6 md:mb-10">
      <!-- fullstack -->
      <div class="grid grid-cols-1 sm:grid-cols-5 md:col-span-3 box items-center gap-6 sm:gap-0">
        <div class="flexcol sm:col-span-3">
          <h3>Full-stack engineering</h3>
          <p class="mr-0 sm:mr-10">
            End-to-end development using <b>scalable JS frameworks</b>. Robust architecture, <b>API integrations</b>,
            and secure <b>database management</b> tailored for business logic.
          </p>
          <p class="text-xs"><b>Frameworks:</b> Nuxt, NestJS, Vue.js <br /><b>Databases:</b> MongoDB, MySQL</p>
        </div>
        <NuxtImg
          src="fullstack_schema.svg"
          class="sm:col-span-2 w-full h-auto object-contain max-w-[200px] sm:max-w-full mx-auto sm:mx-0" />
      </div>

      <!-- fintech -->
      <div class="box md:col-span-2 flexcol">
        <h3>FinTech solutions</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Analytics dashboards,</li>
          <li>MQL4/5 solutions,</li>
          <li>Integration of payment systems (PayU API).</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
      <!-- devops (changed order on mobile to match layout flow) -->
      <div class="box md:col-span-2 flexcol order-2 md:order-none">
        <h3>DevOps</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>VPS / VDS configuration</li>
          <li>Domain setup & SSL encryption</li>
          <li>Git-based automated deployment</li>
          <li>Live project support</li>
        </ul>
      </div>

      <!-- design -->
      <div class="grid grid-cols-1 sm:grid-cols-5 md:col-span-3 box items-center gap-6 sm:gap-0 order-1 md:order-none">
        <div class="flexcol sm:col-span-3">
          <h3>UI/UX & Motion Design</h3>
          <p class="mr-0 sm:mr-10">
            High-fidelity interactive prototypes, responsive digital interfaces, and cinematic UI animations up to 120
            FPS that elevate conversion rates.
          </p>
          <p class="text-xs"><b>Apps: </b> After Effects, Photoshop, Figma, Canva, Illustrator</p>
        </div>
        <NuxtImg
          src="design_schema.svg"
          class="sm:col-span-2 w-full h-auto object-contain max-w-[200px] sm:max-w-full mx-auto sm:mx-0" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
@reference '@/assets/css/main.css';

.box {
  @apply bg-brownblock p-6 md:p-10 box-border;
}
</style>
