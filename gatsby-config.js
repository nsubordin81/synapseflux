module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `UA-50606966-1`
        ],
        pluginConfig: {
          head: true
        }
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Synapse Flux`,
    author: `Taylor Bird`,
    description: `Come watch while this totally unqualified person throws shallow thoughts at deep ideas.`,
    social: [
      {
        name: ``,
        url: ``,
      }
    ],
  },
}
