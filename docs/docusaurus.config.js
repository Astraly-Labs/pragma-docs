module.exports = {
  title: "Pragma",
  tagline: "Documentation and Guides",
  url: "https://docs.pragma.build/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",
  organizationName: "Astraly-Labs", // Usually your GitHub org/user name.
  projectName: "pragma-docs", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    image: "img/background.jpg",
    metadata: [{ name: "twitter:card", content: "summary" }],
    prism: {
      additionalLanguages: ["solidity", "rust", "python"],
    },
    algolia: {
      apiKey: "eca75468ae0780924db0b070f4f354a2",
      indexName: "pragma-docs",
      appId: "MN6QHW795Z",
    },
    navbar: {
      logo: {
        alt: "Pragma Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/introduction",
          label: "Protocol",
          position: "left",
          className: "persistent",
        },
        {
          label: "Give Feedback",
          to: "https://kprem87muy4.typeform.com/to/ahJVbIeI",
          position: "left",
          className: "persistent",
        },
        {
          href: "https://github.com/Astraly-Labs",
          label: "GitHub",
          position: "left",
          className: "persistent",
        },
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          petstore: {
            specPath: "./openapi.json",
            outputDir: "docs/Resources/PragmaApi",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};
