import { addParameters, configure } from "@storybook/react";

addParameters({
  options: {
    storySort: (a, b) => a[1].id.localeCompare(b[1].id)
  }
});

// automatically import all files ending in *.stories.js or *.stories.mdx or *.stories.ts or *.stories.tsx
configure(
  require.context("../src/stories", true, /\.stories\.(js|ts|tsx|mdx)$/),
  module
);
