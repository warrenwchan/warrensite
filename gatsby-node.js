const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /scroll-to-element/,
      loader: 'null-loader',
    });
  }
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const pages = await graphql(`
    {
      allPrismicDesignAlbum {
        edges {
          node {
            id
            uid
            slugs
          }
        }
      }
      allPrismicDesignSingle {
        edges{
          node {
            first_publication_date (formatString: "MMMM DD, YYYY")
            slugs
            data {
              album
            }
          }
        }
      }
      allPrismicPhotographyAlbum {
        edges {
          node {
            first_publication_date
            slugs
          }
        }
      }
    }
  `)

  console.log(pages)

  pages.data.allPrismicDesignAlbum.edges.forEach(album => {
    console.log(`create page for ${album.node.slugs[0]} worked!`)
    createPage({
      path: `/design/${album.node.slugs[0]}`,
      component: path.resolve('./src/templates/design-album.js'),
      context: {
        id: album.node.id,
        slug: album.node.slugs[0],
      }
    })
  });

  pages.data.allPrismicDesignAlbum.edges.forEach(album => {
    pages.data.allPrismicDesignSingle.edges.forEach(single => {
      if(album.node.slugs[0] === single.node.data.album) {
        console.log(`created page for ${single.node.slugs[0]}`)
        createPage({
          path: `/design/${album.node.slugs[0]}/${single.node.slugs}`,
          component: path.resolve('./src/templates/design-single.js'),
          context: {
            slug: single.node.slugs[0],
            album: single.node.data.album
          }
        })
      }
    })
  })

  pages.data.allPrismicPhotographyAlbum.edges.forEach(album => {
    console.log(`created album for ${album.node.slugs[0]}`)
    createPage({
      path: `/photography/${album.node.slugs[0]}`,
      component: path.resolve('./src/templates/photography-album.js'),
      context: {
        slug: album.node.slugs[0],
      }
    })
  })

}
