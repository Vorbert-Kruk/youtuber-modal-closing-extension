chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  tab.url &&
    tab.url.includes('youtube') &&
    chrome.tabs.executeScript(tabId, {
      file: './hidingFunctionality.js',
    });
});
