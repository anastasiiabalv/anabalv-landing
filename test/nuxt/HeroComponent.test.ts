import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MyHeroComponent from '@/components/HeroSection.vue'

describe('Hero Component', () => {
  it('renders the headline and intro text', async () => {
    const component = await mountSuspended(MyHeroComponent)

    expect(component.find('h1').text()).toContain('Built by a trader.')
    expect(component.find('h1').text()).toContain('Tested on real money.')
    expect(component.text()).toContain('FinTech dashboards, MetaTrader systems and trade copiers')
  })

  it('renders the hero image', async () => {
    const component = await mountSuspended(MyHeroComponent)

    const mainImg = component.find('img[src*="hero/hero_img.webp"]')
    expect(mainImg.exists()).toBe(true)
    expect(mainImg.attributes('alt')).toBe('Ana Balieieva')
  })

  it('links to the work section and opens the contact form', async () => {
    const component = await mountSuspended(MyHeroComponent)

    const workLink = component.find('a')
    expect(workLink.attributes('href')).toBe('/#work')
    expect(workLink.text()).toBe('See my work')

    const showcontact = useState<boolean>('showcontact')
    showcontact.value = false
    await component.find('button').trigger('click')
    expect(showcontact.value).toBe(true)
  })
})
