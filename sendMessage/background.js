function letsDoThis() {
    browser.notifications.create({
        type: "basic",
        title: "Ping",
        message: "A dummy notification"
    })
    

}

browser.runtime.onMessage.addListener(letsDoThis);