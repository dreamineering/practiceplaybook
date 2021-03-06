// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gensolve',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png',
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com',
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [{ path: '/docs/', title: 'Docs' }],
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Playbook',
            items: ['/docs/', '/docs/journey/'],
          },
          {
            title: 'Growth',
            items: [
              '/docs/growth/',
              '/docs/growth/finances/',
              '/docs/growth/quality/',
              '/docs/growth/marketing/',
              '/docs/growth/productivity/',
            ],
          },
          {
            title: 'Features',
            items: ['/docs/features/'],
          },
          {
            title: 'Control',
            items: ['/docs/control/'],
          },
          {
            title: 'Roles',
            items: [
              '/docs/roles/',
              '/docs/roles/clinician/',
              // '/docs/roles/frontdesk-sales/',
              // '/docs/roles/operations-manager/',
              // '/docs/roles/accountant/',
              // '/docs/roles/marketing-manager/',
              // '/docs/roles/recruitment-checklist/',
            ],
          },
          // {
          //   title: 'Workflows',
          //   items: ['/docs/workflows/'],
          // },
          {
            title: 'Help',
            items: ['/docs/support/', '/docs/glossary/'],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: ['@gridsome/remark-prismjs'],
        },
      },
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9',
      },
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {},
    },
  ],
};
