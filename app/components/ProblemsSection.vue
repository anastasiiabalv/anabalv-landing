<template>
  <section class="section-pad">
    <p class="eyebrow mb-4">What I fix</p>
    <h2 class="section-title mb-12 max-w-[18em]">Problems I’ve had as a trader, solved as a developer.</h2>
    <div class="flex flex-col border-b border-ink-600">
      <div
        v-for="item in problems"
        :key="item.problem"
        class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-12 gap-y-3 border-t border-ink-600 py-8 text-lg leading-normal">
        <p class="m-0 text-gray">{{ item.problem }}</p>
        <p class="m-0 text-milk"><span class="font-mono text-bronze-400">→ </span>{{ item.solution }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const problems = [
  {
    problem: 'Your EA works in the tester and breaks on a live account.',
    solution: 'MQL4/5 code rebuilt for real execution: slippage, requotes, reconnects and broker quirks handled.'
  },
  {
    problem: 'Copying trades between accounts is manual, slow or unreliable.',
    solution: 'A trade copier with lot scaling, symbol mapping and a log of every order it sends.'
  },
  {
    problem: 'Investors ask for performance and you send spreadsheets.',
    solution: 'A web dashboard that pulls live account data and shows gain, drawdown and history.'
  }
]
</script>
