module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Simbotix Private Limited Marketing Pages", // Navigation and Site Title
  titleAlt: "Simbotix marketing", // Title for JSONLD
  description:
    "The Marketing Pages for Simbotix and Its related pages, products are seperated by subdomain and function independently",
  headline: "Writing and publishing content for Simbotix", // Headline for schema.org JSONLD
  url: "https://www.simbotix.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "src/images/simbotix_logo.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/images/logo_red.svg", // Used for manifest favicon generation
  shortName: "simbotix", // shortname for manifest. MUST be shorter than 12 characters
  author: "Rajesh Medampudi", // Author for schemaORGJSONLD
  themeColor: "#ff6666",
  backgroundColor: "#ebebeb",

  twitter: "@simbotix", // Twitter Username
  facebook: "simbotix", // Facebook Site Name
  googleTagManager: {
    id: "GTM-N2TGMRV",
    layer: "sxSite",
    auth: "OxBvLsVL1ZZgx1MAVkZHXQ",
    preview: "env-2",
  },

  //   skipNavId: "reach-skip-nav" // ID for the "Skip to content" a11y feature
}
