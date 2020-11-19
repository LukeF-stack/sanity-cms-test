export default {
  widgets: [
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
                  buildHookId: '5fb604105a0bd96ac9d8d279',
                  title: 'Sanity Studio',
                  name: 'sanity-cms-test-studio-67wcr9ij',
                  apiId: '76adce86-1d3e-4d76-8da8-960c1fceda0d'
                },
                {
                  buildHookId: '5fb604110cbc746387f7c43f',
                  title: 'Blog Website',
                  name: 'sanity-cms-test-web-osgcvskx',
                  apiId: 'c518aeab-fe20-45dd-8e02-d8f01e9e614f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LukeF-stack/sanity-cms-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-cms-test-web-osgcvskx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
