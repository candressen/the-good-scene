export const SITE = {
  name: 'The Good Scene',
  tagline: 'The city, edited.',
  url: 'https://thegoodscene.com',
  email: 'hellothegoodscene@outlook.com',
  instagram: '@thegoodscene',
}

export const COLORS = {
  accent: '#A392DD',
  accentHover: '#8e7ccc',
  bg: '#f6f6f6',
  bgWarm: '#e3e2dd',
  dark: '#1c1c1c',
  darkWarm: '#1e1716',
  textGray: '#666666',
  white: '#ffffff',
}

export const TAGS = [
  'Woman Only',
  'Arts & Crafts',
  'No Drinking',
  'Reggaeton',
  'Classy',
  'Wine & Gossip',
  'Rooftop Views',
  'Pop-Up',
  'Singles',
  'Wellness',
  'Brunch',
  'Networking',
] as const

export type Tag = typeof TAGS[number]

export const NAV_LINKS = [
  { label: 'Upcoming Events', href: '/events' },
  { label: 'Our Mission', href: '/mission' },
  { label: 'Contact', href: '/contact' },
]
