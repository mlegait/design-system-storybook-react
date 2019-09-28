# design-system-storybook-react

This project is a **Proof Of Concept**. The goal is to see how **[Storybook](https://storybook.js.org/)** can be used to build a **Design System**.

## Talk

This project has been built to prepare the talk **[Storybook pour votre Design System, un conte de fées?](https://docs.google.com/presentation/d/1X_phVWFEfCEwRAjCGbTkf1ER25acFjV0logJyCdvIoM/edit?usp=sharing)**

## Carbon Design System

To go faster and because it's a great Design System, all the content is coming from [IBM's Carbon Design System](https://www.carbondesignsystem.com/). 

Here are the original repositories:
- **Carbon website** (guidelines): [https://github.com/carbon-design-system/carbon-website](https://github.com/carbon-design-system/carbon-website)
- **Carbon React components**: [https://github.com/carbon-design-system/carbon/tree/master/packages/react](https://github.com/carbon-design-system/carbon/tree/master/packages/react)

Only a subset has been used here. And some pieces of code have been adapted to use less babel plugins.

## Develop

- `npm install` – Install dependencies
- `npm run storybook` – Launch storybook

## Build

- `npm run build-storybook` – Export Storybook as a Static App in the `public` folder

## Remaining work

- Publish the demo to **[Netlify](https://www.netlify.com/)**
- Extract `componentsDesignSystemUtils` in a separate library
- Remove `create-react-app` which is not necessary for a components library
