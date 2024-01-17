const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Sys React Stories',
    description:
      'This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Sys React Stories',
        description:
          'This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample',
          templates:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\.docz',
          cache:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\.docz\\.cache',
          app: 'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\.docz\\app',
          appPackageJson:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\package.json',
          appTsConfig:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\.docz\\app\\index.html',
          db:
            'C:\\Users\\ABHIRAJ\\Desktop\\sys-test\\sys-sample\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
