import Vue from 'vue';

const vue_fb = {};

vue_fb.install = function install(Vue, options) {
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) {return}
        js = d.createElement(s)
        js.id = id
        js.src = "//connect.facebook.net/en_US/sdk.js"
        fjs.parentNode.insertBefore(js, fjs)
        console.log('setting fb sdk')
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function onSDKInit() {
        FB.init(options);
        FB.AppEvents.logPageView();

        window.dispatchEvent(new Event('fb-sdk-ready'));
    };
};

Vue.use(vue_fb, {
    appId: '256491001199895',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.9'
});
