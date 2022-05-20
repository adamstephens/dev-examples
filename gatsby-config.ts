import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'dev-examples',
    siteUrl: 'https://www.yourdomain.tld'
  },
  plugins: ['gatsby-plugin-sass', {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'placeholderId'
    }
  }, 'gatsby-plugin-image', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap', 'gatsby-plugin-mdx', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/'
    },
    __key: 'images'
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/'
    },
    __key: 'pages'
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: `${__dirname}/content/`
    }
  }]
}

export default config
