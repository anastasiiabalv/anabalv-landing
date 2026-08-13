import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MyHeroComponent from '@/components/HeroSection.vue'

describe('Hero Component', () => {
  it('renders personal intro and core headings correctly', async () => {
    const component = await mountSuspended(MyHeroComponent)

    // Assert that the text layout displays your headings
    expect(component.text()).toContain('Full-Stack')
    expect(component.text()).toContain('Web Development')

    // Assert that your intro text renders exactly as expected
    expect(component.text()).toContain("Hi, I'm Ana")
    expect(component.text()).toContain('Ukrainian Full-Stack developer')
  })

  it('renders all 6 looping technology icons', async () => {
    const component = await mountSuspended(MyHeroComponent)

    // NuxtImg translates to an <img> tag in the rendered output
    // Find all images inside the flex-justify-between container
    const icons = component.findAll('.flex.justify-between img')

    expect(icons.length).toBe(6)
    expect(icons[0].attributes('src')).toContain('hero/icon_1.svg')
    expect(icons[5].attributes('src')).toContain('hero/icon_6.svg')
  })

  it('renders the main interactive hero image and background decorative squares', async () => {
    const component = await mountSuspended(MyHeroComponent)

    // Find the primary hero image specifically
    const mainImg = component.find('img[src*="hero/hero_img.png"]')

    expect(mainImg.exists()).toBe(true)
    expect(mainImg.classes()).toContain('absolute')
  })

  it('contains the correct routing link to the about page', async () => {
    const component = await mountSuspended(MyHeroComponent)

    // NuxtLink translates to an <a> tag with an href attribute
    const link = component.find('a')

    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('/about')
    expect(link.text()).toBe('More about me')
  })
})
