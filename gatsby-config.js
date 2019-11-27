module.exports = {
  siteMetadata: {
    title: `Simbotix Private Limited`,
    description: `Simbotix is an independent product development agency. We are in the business of developing next-generation solutions to help enterprises to attract and serve more customers. We help customers build out their system from scratch and bring it to market quickly with the help of IaaS(AWS, GCP, Azure) or Saas(Zoho, Zapier) platforms  and frameworks available on the market.`,
    author: `@simbotix`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `simbotix`,
        short_name: `sx`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#ff6666`,
        display: `minimal-ui`,
        icon: `./src/images/logo_red.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
