module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://a-marquez.github.io/portfolio/`,
    // Your Name
    name: 'Leonard Ugorji',
    // Main Site Title
    title: `Leonard Ugorji | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer`,
    // Optional: Twitter account handle
    // author: `@a-marquez`,
    // Optional: Github account URL
    github: `https://github.com/leoactionz`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/leoactionz/`,
    // Content of the About Me section
    email: `leonardugorji@gmail.com`,
    resume: `https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:edd99a3d-3506-4ecd-ac4e-55c1ca8d29cf`,

    about: `I'm a software engineer skilled in front-end and back-end development, passionate about clean, efficient code and impactful solutions in fintech. My interests include AI, automation, computer vision, machine learning, and microservices, alongside swimming, football, and survival games.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    work: [
      
      {
        name: 'ParetOS | Open Source',
        description:
          'Localization of a high-level operating system to maximize human potential.',
        link: 'https://github.com/Leoactionz/paretOS/commits/main/?author=Leoactionz',
      },
      {
        name: 'Cool Tour',
        description:
          'Super fantastic tour booking web app',
        link: 'https://cooltour.onrender.com/',
      },
      {
        name: 'Kryptoweb3 | Web 3.0',
        description:
          'Blockchain Application built Using Web 3.0 methodologies, Solidity and Metamask. ',
        link: 'https://kryptoweb3.netlify.app/',
      },
      {
        name: 'Budgetin App | Build Challenge',
        description:
          "A budgeting app that calculates a basic budget based on a list of income and expenses.",
        link: 'https://budgetin.netlify.app/',
      },
      {
        name: 'Omnifood',
        description: 'An awesome food landing page.',
        link: 'https://unifood.netlify.app/'
      },
      {
        name: 'Travel listing',
        description: 'React site designed for listing travel items, featuring an organized layout to showcase products such as luggage, travel accessories, and gear. Built with simple editing tools, enabling the client to easily update inventory.',
        link: 'https://travel-list-vert-chi.vercel.app/'
      }
    ],
    projects: [
      {
        name: 'Pokemon Go Automation Assistant',
        description: `Automates trading, and gift sending/receiving. Project uses Node and adb,
        rendering a React application in the terminal to provide status, control options, and launch functions.`,
        link: 'https://gitlab.com/star_lion/mobile-assistants/-/tree/main/packages/pogo'
      },
      {
        name: 'Puzzle and Dragon Bot',
        description: `Tool to automatically solve and execute solution for the mobile matching game Puzzle and Dragon.
        Project involves both server and client components, uing Node, adb, and fastify. Implements an api to expose
        functionality to client.`,
        link: 'https://gitlab.com/star_lion/pad-bot-2'
      },
      {
        name: 'Ink Components',
        description: 'A small library of UI components to use with Ink.js. for rendering terminal UIs.',
        link: 'https://gitlab.com/star_lion/mobile-assistants/-/tree/main/lib/ink-components'
      },
      {
        name: "Extended Map Icons | Don't Starve",
        description: "A game mod that adds extra map icons, project uses a Node script to generate appropriate game Lua files from image assets.",
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=703451582'
      },
      {
        name: "Obedient Companions | Don't Starve",
        description: 'Another mod that adds functionality, uses Lua scripting to add stay/recall functionality to companions.',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=701538210'
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Klasha',
        description: 'Software Engineer, January 2022 - Present',
        link: 'https://www.klasha.com/',
      },
      {
        name: 'SeerBit',
        description: 'Software Engineer, March 2019 - January 2022',
        link: 'https://www.SeerBit.com/',
      },
      {
        name: 'Raven',
        description: 'IT Adminisrator, January 2016 - March 2020',
        link: '',
      },
      {
        name: 'Kevank',
        description: 'Software Engineer, June 2013 - Dec 2016',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript/TypeScript, Node.js, React, Python',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Webflow, Framer, Amazon Web Services (AWS), GIT, CI / CD, Microservices, Figma, Functional Programming, WordPress',
      },
    ],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
