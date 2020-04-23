module.exports = {
  siteMetadata: {
    title: `Ander Suarez | Software developer`,
    description: `Ander Suarez personal website`,
    author: `Ander Suarez <me@andersuarez.com>`,
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ander Suarez`,
        short_name: `Ander Suarez`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#323232`,
        display: `andersuarez`,
        // icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}