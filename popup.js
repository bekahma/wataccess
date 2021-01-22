function toggleTheme()
{
    if (document.getElementById('check').checked){
        chrome.storage.sync.set({theme: 'dark'}, function() {
          console.log('Theme set to dark');
        });
        document.body.style.setProperty('--main-bg-color',"#555")
        document.body.style.setProperty('--button-color',"whitesmoke")
        document.body.style.setProperty('--desc-color',"whitesmoke")
    } else {
        chrome.storage.sync.set({theme: 'light'}, function() {
          console.log('Theme set to light');
        });
        document.body.style.setProperty('--main-bg-color',"whitesmoke")
        document.body.style.setProperty('--button-color',"black")
        document.body.style.setProperty('--desc-color',"black")
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('check');
    link.addEventListener('click', toggleTheme);
});

window.onload = () => {
    chrome.storage.sync.get(['theme'], r => {
        console.log(r)
        if(r['theme'] === 'dark'){
            document.body.style.setProperty('--main-bg-color',"#555")
            document.body.style.setProperty('--button-color',"whitesmoke")
            document.body.style.setProperty('--desc-color',"whitesmoke")
            document.getElementById('check').checked = true
        }
    });
}