<template>
  <div>
    <PageHero>
      <h1 class="hero-title">The trader who <span class="text-bronze-400">writes the code.</span></h1>
      <p class="hero-sub">
        I've been trading for about 5 years, and I build the technical side of it myself — systems that run on real
        money today.
      </p>
    </PageHero>

    <section class="section-pad">
      <p class="eyebrow mb-4">Story</p>
      <div class="flex max-w-[42em] flex-col gap-6 text-lg leading-[1.65] text-pretty text-gray">
        <p class="m-0">
          I didn't start as a developer who learned trading from a spec. I started as a trader who kept hitting the same
          walls: EAs that behaved in the tester and broke on live accounts, trades copied by hand, reports rebuilt in
          spreadsheets every week. So I started building the tools myself.
        </p>
        <p class="m-0">
          Today I lead the technical side of FX-ATS Group — the trading infrastructure, real-time account monitoring and
          web tools the team and clients use every day. Alongside that, I study Economics, so I think about the business
          behind the code, not just the code.
        </p>
      </div>
    </section>

    <section class="section-pad">
      <p class="eyebrow mb-4">How I think</p>
      <h2 class="section-title mb-12">Principles behind every build</h2>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
        <div v-for="(item, i) in principles" :key="item.title" class="card">
          <span class="font-mono text-[13px] text-bronze-400">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="m-0 text-xl leading-[1.4] font-semibold">{{ item.title }}</h3>
          <p class="m-0 text-[15px] leading-[1.55] text-gray">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <ToolkitSection />
    <p class="mt-8 mb-0 font-mono text-sm text-ink-400">Based in Poland · working with clients worldwide</p>

    <ContactSection to="/contact" />
  </div>
</template>

<script lang="ts" setup>
const principles = [
  { title: 'What happens when it fails?', text: 'Every system I build has an answer: reconnects, alerts, logs.' },
  { title: 'Numbers people actually read', text: 'Dashboards show what a trader needs to decide, first.' },
  { title: 'Real money, real security', text: 'Encrypted connections, least-access by default.' },
  { title: 'Clear, written communication', text: "You always know what's done, what's next and why." }
]
</script>
