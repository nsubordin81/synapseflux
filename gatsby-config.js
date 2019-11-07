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
    description: `A Blog To Connect Concepts And Celebrate Potential.`,
    social: [
      {
        name: ``,
        url: ``,
      }
    ],
  },
}
