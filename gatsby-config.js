module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: "https://rdannog.github.io",
    title: "DAN NOGUEIRA",
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckwfrfs8d2ac701z2fo896vqr/master",
    },
  },
],
};
