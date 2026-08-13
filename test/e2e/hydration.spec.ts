import { test, expect } from '@playwright/test'

test.use({
  webServer: {
    command: 'node .output/server/index.mjs',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe'
  }
})

test('should load page without Vue hydration errors', async ({ page }) => {
  const hydrationErrors: string[] = []

  page.on('console', (msg) => {
    const text = msg.text()
    if (msg.type() === 'warning' && (text.includes('hydration') || text.includes('mismatch'))) {
      hydrationErrors.push(`[Console Warning] ${text}`)
    }
    if (msg.type() === 'error' && text.includes('hydration')) {
      hydrationErrors.push(`[Console Error] ${text}`)
    }
  })

  await page.goto('http://localhost:3000')
  await page.waitForTimeout(1000)
  expect(hydrationErrors).toEqual([])
})
