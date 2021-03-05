chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, currentTab => {
        console.log(currentTab)
    })
})

// chrome.tabs.executeScript(null, { file: './foreground.js'}, () => console.log('i injected'))