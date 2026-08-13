<template>
  <section id="services">
    <h2>Services</h2>
    <div class="grid grid-cols-5 gap-10 mb-10">
      <!-- fullstack -->
      <div class="grid grid-cols-3 col-span-3 box">
        <div class="flexb col-span-2">
          <h3>Full-stack engineering</h3>
          <p class="max-w-[60%]">
            End-to-end development using <b>scalable JS frameworks</b>. Robust architecture, <b>API integrations</b>,
            and secure <b>database management</b> tailored for business logic.
          </p>
          <p class="text-xs"><b>Frameworks:</b> Nuxt, NestJS, Vue.js <br /><b>Databases:</b> MongoDB, MySQL</p>
        </div>
        <div>*VIDEO*</div>
      </div>
      <!-- fintech -->
      <div class="box col-span-2 flexb">
        <h3>FinTech solutions</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Analytics dashboards,</li>
          <li>MQL4/5 solutions,</li>
          <li>Integration of payment systems (PayU API).</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-10">
      <!-- design -->
      <div class="box col-span-2 flexb">
        <h3>DevOps</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>VPS / VDS configuration</li>
          <li>Domain setup & SSL encryption</li>
          <li>Git-based automated deployment</li>
          <li>Live project support</li>
        </ul>
      </div>
      <!-- devops -->
      <div class="grid grid-cols-3 col-span-3 box">
        <div class="flexb col-span-2">
          <h3>UI/UX & Motion Design</h3>
          <p class="max-w-[60%]">
            High-fidelity interactive prototypes, responsive digital interfaces, and cinematic UI animations up to 120
            FPS that elevate conversion rates.
          </p>
          <p class="text-xs"><b>Apps: </b> After Effects, Photoshop, Figma, Canva, Illustrator</p>
        </div>
        <div>*VIDEO*</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
@reference '@/assets/css/main.css';

.box {
  @apply bg-brownblock p-10 box-border;
}
.flexb {
  @apply flex flex-col gap-y-5;
}
.flexb p,
.flexb li {
  @apply text-gray;
}
</style>
