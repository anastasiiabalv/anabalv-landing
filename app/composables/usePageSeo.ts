export const SITE_URL = 'https://dev.anastasiiabalv.com'

// title, description, canonical and social previews for one page
export function usePageSeo(opts: { title: string; description: string; path: string; fullTitle?: boolean }) {
  const url = SITE_URL + opts.path
  const shareTitle = opts.fullTitle ? opts.title : `${opts.title} · Ana Balieieva`

  useHead({
    title: opts.title,
    titleTemplate: opts.fullTitle ? '%s' : undefined,
    link: [{ rel: 'canonical', href: url }]
  })
  useSeoMeta({
    description: opts.description,
    ogTitle: shareTitle,
    ogDescription: opts.description,
    ogUrl: url,
    twitterTitle: shareTitle,
    twitterDescription: opts.description
  })
}
