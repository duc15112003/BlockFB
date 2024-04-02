// background.js

chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  if (details.url.includes("facebook.com") || details.url.includes("https://www.facebook.com/") || details.url.includes("fb.com")) {
    chrome.tabs.update(details.tabId, {url: chrome.runtime.getURL("404.html")});
  }
}, {url: [{hostEquals: 'www.facebook.com'}, {hostEquals: 'facebook.com'},{hostEquals: 'fb.com'}]});
