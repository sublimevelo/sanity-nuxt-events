export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-studio-rz4znhr2',
                  apiId: 'be8469cf-1a17-41a5-9b9a-e33e192f66a7'
                },
                {
                  buildHookId: '601ee0e5095b321a3c9e35ba',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-web-bjuwjovp',
                  apiId: 'b228ed0b-490c-4d24-bcd6-7d35b6785b77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sublimevelo/sanity-nuxt-events',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-nuxt-events-web-bjuwjovp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recently created session content',
        order: '_createdAt desc',
        types: ['seriesSession', 'peron']
      },
      layout: { width: 'medium' }
    },
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    }
  ]
}
