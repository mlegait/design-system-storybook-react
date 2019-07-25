import { load } from "@storybook/react";

// automatically import all files ending in *.stories.js or *.stories.mdx
load(require.context("../src", true, /\.stories\.(js|mdx)$/), module);
