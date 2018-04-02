module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `WarrenSite`,
        accessToken: `MC5Xc0c4V1NjQUFNdUY4SEd5.77-9b2kgYkzvv71l77-977-9ERjvv70Y77-977-977-9N--_ve-_vWnvv73vv71H77-9KO-_vX3vv70c77-977-9`,
      },
    },
  ],
};
