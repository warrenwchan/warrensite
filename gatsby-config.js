module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  pathPrefix: `/design`,
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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "WarrenSite",
        linkResolver: ({ node, key, value }) => doc => {
          if (doc.type === 'Design_Page') return "/design/" + doc.uid;
          // Fallback for other types, in case new custom types get created
          return "/doc/" + doc.id;
        },
      }
    }
  ],
};
