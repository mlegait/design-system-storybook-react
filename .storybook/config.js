import { addParameters, configure } from "@storybook/react";

addParameters({
  options: {
    storySort: (a, b) => {
      // Sort stories per position. If there is no position or if the position is the same,
      // sort stories alphabetically.
      const aPosition = a[1].parameters.position;
      const bPosition = b[1].parameters.position;
      if (aPosition && bPosition) {
        const comparision = aPosition - bPosition;
        if (comparision !== 0) {
          return comparision;
        }
      }
      return a[0].localeCompare(b[0]);
    }
  }
});

// automatically import all files ending in *.stories.js or *.stories.mdx or *.stories.ts or *.stories.tsx
configure(
  require.context("../src/stories", true, /\.stories\.(js|ts|tsx|mdx)$/),
  module
);
