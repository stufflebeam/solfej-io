module.exports = {
  siteMetadata: {
    title: `Solfej - The Best New App To Learn Music Theory`,
    description: `With Solfej - a music theory and ear training app,The Best New Way To Learn Music Theory`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              // The property ID; the tracking code won't be generated without it
              trackingId: "UA-150995686-1",
              // Defines where to place the tracking script - `true` in the head and `false` in the body
              head: false,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,

              // Delays sending pageview hits on route update (in milliseconds)
              pageTransitionDelay: 0,

              // Any additional optional fields
              sampleRate: 5,
              siteSpeedSampleRate: 10,
          },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFB5B5`,
        theme_color: `#FFB5B5`,
        display: `minimal-ui`,
        icon: `src/images/logo-no-text.png`, // This path is relative to the root of the site.
      },
    },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}