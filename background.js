defaultFilters = [
  "*://*.clickadilla.com/*",
  "*://*.eskimi.com/*",
  "*://*.ezoic.com/*",
  "*://*.adsterra.com/*",
  "*://*.ogilvy.com/*",
  "*://*.exness.com/*",
  "*://*.medium.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    // It will simply block all the request
    return { cancel: true };
  },
  //   Filter object => specifically block this url
  { urls: defaultFilters },
  ["blocking"]
);
