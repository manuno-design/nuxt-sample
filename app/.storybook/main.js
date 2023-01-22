module.exports = {
    stories: ['../components/stories/**/*.stories.mdx', '../components/stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
      '@storybook/addon-essentials',
      {
        name: '@storybook/addon-postcss',
        options: {
          cssLoaderOptions: {
            importLoaders: 1,
          },
          postcssLoaderOptions: {
            implementation: require('postcss'),
          },
        },
      }
    ],
    framework: '@storybook/vue3',
    core: {
      builder: '@storybook/builder-vite',
    },
  }