import React from 'react';

export const externalLinkIcon = (
  <svg
    className="resourceCard__external"
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
    aria-label="Open resource"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 32 32"
    role="img"
  >
    <path d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9v2H6v20h20v-9h2v9a2 2 0 0 1-2 2z"></path>
    <path d="M21 2v2h5.59L18 12.59 19.41 14 28 5.41V11h2V2h-9z"></path>
  </svg>
);

export const gitHubIcon = (
  <svg
    className="resourceCard__icon resourceCard__icon--github"
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    aria-hidden="true"
    class="MdxIcon-module--mdx-icon--3p_4x"
  >
    <path
      fill-rule="evenodd"
      d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45 3 3 0 0 0 4.08 1.16 2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76 5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7 5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z"
    ></path>
  </svg>
);

export const sketchIcon = (
  <img
    class="MdxIcon-module--mdx-icon--3p_4x"
    alt="sketch icon"
    style={{ maxHeight: '32px', maxWidth: '32px' }}
    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkRCMzAwIiBkPSJNOC4xLDQuMUwxNiwzLjNsNy45LDAuOGw2LjEsOC4yTDE2LDI4LjdMMiwxMi40TDguMSw0LjF6Ii8+Cgk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OS4wMDAwMDAsIDIxMS44ODEwODQpIj4KCQk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0VBNkMwMCIgcG9pbnRzPSItNTEuMywtMTk5LjkgLTQzLC0xODMuNiAtNTcsLTE5OS45IAkJIi8+CgkJPHBvbHlnb24gZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNFQTZDMDAiIHBvaW50cz0iLTM0LjcsLTE5OS45IC00MywtMTgzLjYgLTI5LC0xOTkuOSAJCSIvPgoJCTxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkRBRDAwIiBwb2ludHM9Ii01MS4zLC0xOTkuOSAtMzQuNywtMTk5LjkgLTQzLC0xODMuNiAJCSIvPgoJPC9nPgoJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkuMDAwMDAwLCA4NS4wMDAwMDApIj4KCQk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZERDIzMSIgcG9pbnRzPSItNDMsLTgxLjcgLTUwLjksLTgwLjkgLTUxLjMsLTcyLjYgCQkiLz4KCQk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZERDIzMSIgcG9pbnRzPSItNDMsLTgxLjcgLTM1LjEsLTgwLjkgLTM0LjcsLTcyLjYgCQkiLz4KCQk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZEQUQwMCIgcG9pbnRzPSItMjksLTczIC0zNS4xLC04MS4yIC0zNC43LC03MyAJCSIvPgoJCTxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkRBRDAwIiBwb2ludHM9Ii01NywtNzMgLTUwLjksLTgxLjIgLTUxLjMsLTczIAkJIi8+CgkJPHBvbHlnb24gZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGRUVFQjciIHBvaW50cz0iLTQzLC04MiAtNTEuMywtNzMgLTM0LjcsLTczIAkJIi8+Cgk8L2c+CjwvZz4KPHJlY3QgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIvPgo8L3N2Zz4K"
  ></img>
);
