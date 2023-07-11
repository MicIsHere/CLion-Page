export const themeData = {
  "logo": "/favicon.png",
  "sidebar": "auto",
  "navbar": [],
  "displayAllHeaders": true,
  "sidebarDepth": 2,
  "lastUpdated": "最后更新于",
  "smoothScroll": true,
  "repo": "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=fAqO4VPPuUI5NPHocB5Kbh3J0Qg6PMoi&authKey=KZP5LuoBToJ%2FIDvaKqpXw5qkoIgWAApR%2Bp1G6SGw7Bwibq0zrWrhKZBTpWYgvCdk&noverify=0&group_code=810797602",
  "repoLabel": "用户群聊",
  "docsRepo": "BakaXL-Support/BakaXL-QA-docs",
  "docsDir": "docs",
  "docsBranch": "main",
  "editLinks": true,
  "editLinkText": "帮助我们改善此页面！",
  "nextLinks": true,
  "prevLinks": true,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
