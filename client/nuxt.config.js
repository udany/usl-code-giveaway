const path = require('path');

module.exports = {
    head: {
        title: 'client',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Client App'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    loading: {color: '#3B8070'},

    modules: [
        '@nuxtjs/font-awesome',
        ['bootstrap-vue/nuxt', { css: false }],
        [
            '@nuxtjs/toast',
            {
                closeBtn: false
            }
        ]
    ],

    toast: {
        position: 'bottom-left'
    },

    css: [
        './assets/css/main.scss'
    ],

    build: {
        vendor: ['axios'],

        extractCSS: true,

        extend(config, { isClient }) {
            if (!config.resolve.alias) config.resolve.alias = {};

            // Adds an alias to access shared resources
            config.resolve.alias.shared = path.resolve('../shared/');

            if (isClient) {
                config.devtool = 'eval-source-map'
            }
        }
    },

    plugins: [
        '../shared/base/extend/',
        '~/plugins/api'
    ]
};
