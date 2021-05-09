browser.contextMenus.create({
    id: "open-in-4webm",
    title: "Open in 4webm.",
    contexts: ["all"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== "open-in-4webm") {
        return;
    }
    console.log(info);
    let threadId = tab.url.split("/")[5];
    let fourwebmUrl = `https://www.4webm.org/gif/thread/${threadId}`;

    browser.tabs.create({
        url: fourwebmUrl
    });
});

