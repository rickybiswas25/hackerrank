document.getElementById("notifyMe").addEventListener('click', function(){
    browser.runtime.sendMessage({
        action: 'notify'
    })
});