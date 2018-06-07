export const COOKIE_POLICIES = [
  {
    label: 'Necessary',
    description: 'Necessary cookies make a website usable by enabling basic functions like remotely stored content. The website requires these cookies to function properly.',
    value: 'necessary',
    isRequired: true,
    cookies: [
      {
        name: '*.helsinkifoodguide.com',
        purpose: 'Caches content for offline use and improved performance.',
        expiry: 'Persistent',
        type: 'Local',
      },
      {
        name: '*.contentful.com',
        purpose: 'Registers anonymous API IDs that are used to fetch content.',
        expiry: '2–20 years',
        type: 'HTTP',
      },
    ],
  },
  {
    label: 'Statistics',
    description: 'Helps us to improve usability by understanding how visitors interact with the website by collecting anonymous information.',
    value: 'statistics',
    cookies: [
      {
        name: '*.gstatic.com',
        purpose: 'Registers an anonymous session in Google Analytics for generating statistical data on how the visitor uses the website.',
        expiry: '2 years',
        type: 'HTTP',
      },
    ],
  },
]
