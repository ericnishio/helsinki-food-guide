export const COOKIE_POLICIES = [
  {
    label: 'Necessary',
    description: 'Necessary cookies make a website usable by enabling basic functions like remotely stored content. The website requires these cookies to function properly.',
    value: 'necessary',
    isRequired: true,
    cookies: [
      {
        name: '*',
        provider: 'contentful.com',
        purpose: 'Registers anonymous API IDs that are used to fetch content.',
        expiry: '2–20 years',
        type: 'HTTP',
      },
    ],
  },
  {
    label: 'Statistics',
    description: '',
    value: 'statistics',
    cookies: [
      {
        name: '*',
        provider: 'gstatic.com',
        purpose: 'Registers an anonymous ID for generating statistical data on how the visitor uses the website.',
        expiry: '2 years',
        type: 'HTTP',
      },
    ],
  },
]
