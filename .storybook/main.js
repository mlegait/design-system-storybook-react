module.exports = {
  stories: [
    '../src/DesignSystem/GetStarted/About.stories.mdx',
    '../src/DesignSystem/GetStarted/Design.stories.mdx',
    '../src/DesignSystem/GetStarted/Develop.stories.mdx',

    '../src/DesignSystem/Tutorial/React.stories.mdx',
    '../src/DesignSystem/Tutorial/Vue.stories.mdx',

    '../src/DesignSystem/Guidelines/Accessibility.stories.mdx',
    '../src/DesignSystem/Guidelines/Content.stories.mdx',

    '../src/DesignSystem/Components/**/*.stories.(js|mdx)',

    '../src/DesignSystem/Patterns/Overview.stories.mdx',

    '../src/DesignSystem/Experimental/Overview.stories.mdx',

    '../src/DesignSystem/Resources.stories.mdx',

    '../src/DesignSystem/Contributions/Overview.stories.mdx',

    '../src/DesignSystem/Updates/WhatsNew.stories.mdx',

    '../src/DesignSystem/Help/Support.stories.mdx',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    { name: '@storybook/addon-docs', configureJSX: true },
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ],
};
