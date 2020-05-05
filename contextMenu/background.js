browser.contextMenus.create({
    id: "1",
    title: "Search on Duck duck go",
    contexts: ["selection"]
})


browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
    const url = "https://duckduckgo.com/?q="+info.selectionText;
    browser.tabs.create({url: url});
}