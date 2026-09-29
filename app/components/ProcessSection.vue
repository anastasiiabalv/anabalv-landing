<template>
  <section id="process" class="section-pad">
    <p class="eyebrow mb-4">How I work</p>
    <h2 class="section-title mb-14">Four steps, no surprises</h2>
    <ol class="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-8 gap-y-10 p-0">
      <li
        v-for="(step, i) in steps"
        :key="step.title"
        class="relative flex flex-col gap-3 border-t border-ink-600 pt-5">
        <span class="absolute -top-1 left-0 h-1.75 w-1.75 bg-bronze"></span>
        <span class="font-mono text-[13px] text-bronze-400">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3 class="m-0 text-xl leading-[1.4] font-semibold">{{ step.title }}</h3>
        <p class="m-0 text-[15px] leading-[1.55] text-gray">{{ step.text }}</p>
      </li>
    </ol>
  </section>
</template>

<script lang="ts" setup>
const steps = [
  {
    title: 'Message',
    text: 'Tell me about your strategy or project. I reply within a day with questions and a plan.'
  },
  { title: 'Spec and estimate', text: 'A written scope with milestones, timeline and a fixed price.' },
  {
    title: 'Build and test',
    text: 'Weekly builds you can check: EAs on demo accounts first, web apps on a test server first, then live after your OK.'
  },
  { title: 'Launch and support', text: 'Deployment, handover of code and docs, and support after release.' }
]
</script>
