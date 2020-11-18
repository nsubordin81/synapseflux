module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-50606966-1`
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
