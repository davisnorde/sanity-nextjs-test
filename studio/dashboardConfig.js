export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f9077e9505e6300a0aed809',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-test-studio-cvcincw8',
                  apiId: '2940a68c-f2e2-41cc-ae70-f300435ffe4b'
                },
                {
                  buildHookId: '5f9077e981206800a94c4cc7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-test-web-vfo8wvcr',
                  apiId: '7e891493-64a7-45ec-a1d0-d99c58642786'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davisnorde/sanity-nextjs-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-test-web-vfo8wvcr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
