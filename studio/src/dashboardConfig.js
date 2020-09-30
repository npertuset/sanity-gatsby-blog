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
                  buildHookId: '5f7507b22f6779288d6baa1a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zwbno13o',
                  apiId: 'c767352b-a9b9-4183-95bf-3664c8fbf067'
                },
                {
                  buildHookId: '5f7507b227760c2621df02de',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ho4f373d',
                  apiId: '8d978a0f-903c-48db-9b17-b785f3017063'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/npertuset/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ho4f373d.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
