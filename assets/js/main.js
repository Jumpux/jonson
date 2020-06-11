new Image().src = './assets/images/IphoneX-red.png';
new Image().src = './assets/images/IphoneX-blue.png';
new Image().src = './assets/images/IphoneX-green.png';

function siteColorCheck() {
    if (window.location.hash === '#site-green') {
        setTimeout(() => {
            document.getElementById('wrapper').className = 'site-green'
            document.getElementById('phone-arrow-right').setAttribute('href', '#site-red')
            document.getElementById('phone-arrow-left').setAttribute('href', '#site-blue')
            document.getElementById('phone-wallpaper').setAttribute('style', 'background-image: url("./assets/images/IphoneX-green.png")')
            document.getElementById('download-btn').setAttribute('href', './assets/images/1024х768-green.jpg')
        }, 1000)
    }

    if (window.location.hash === '#site-blue') {
        setTimeout(() => {
            document.getElementById('wrapper').className = 'site-blue'
            document.getElementById('phone-arrow-right').setAttribute('href', '#site-green')
            document.getElementById('phone-arrow-left').setAttribute('href', '#site-red')
            document.getElementById('phone-wallpaper').setAttribute('style', 'background-image: url("./assets/images/IphoneX-blue.png")')
            document.getElementById('download-btn').setAttribute('href', './assets/images/1024х768-blue.jpg')
        }, 1000)
    }

    if (window.location.hash === '#site-red') {
        setTimeout(() => {
            document.getElementById('wrapper').className = 'site-red'
            document.getElementById('phone-arrow-right').setAttribute('href', '#site-blue')
            document.getElementById('phone-arrow-left').setAttribute('href', '#site-green')
            document.getElementById('phone-wallpaper').setAttribute('style', 'background-image: url("./assets/images/IphoneX-red.png")')
            document.getElementById('download-btn').setAttribute('href', './assets/images/1024х768-red.jpg')
        }, 1000)
    }
}



setInterval(siteColorCheck, 100)