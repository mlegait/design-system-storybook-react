import toReactComponent from 'svgr.macro';

export const allIcons = {
  plus: toReactComponent('./icons/plus.svg'),
};

export const allIconNames = Object.keys(allIcons);
