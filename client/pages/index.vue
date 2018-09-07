<template>
    <div style="position: relative">
        <div class="d-flex align-items-center" style="min-height: 100vh; padding-bottom: 65px;">

            <div class="container my-4">
                <b-row>
                    <b-col class="text-center" md="12" lg="12">
                        <template v-if="!fbReady">
                            <h2>Carregando...</h2>
                        </template>

                        <template v-if="fbReady && !user">
                            <h2 class="text-center">
                                Entre com o Facebook
                            </h2>

                            <b-btn variant="info" @click="fbLogin">
                                Entrar
                            </b-btn>
                        </template>

                        <template v-if="user">
                            <h2>{{user.name}}</h2>
                        </template>
                    </b-col>
                </b-row>
            </div>

        </div>

        <div class="logos">
            <img src="/tri-logos-us.png" alt="">
            <img src="/tri-logos-unilol.png" alt="">
            <img src="/tri-logos-kraken.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        head: () => ({
            title: "Home"
        }),
        data: () => ({
            user: null,
            code: null,
            fbReady: false
        }),

        async mounted() {
            window.addEventListener('fb-sdk-ready', this.onFBReady)
        },
        beforeDestroy: function () {
            window.removeEventListener('fb-sdk-ready', this.onFBReady)
        },

        methods: {
            onFBReady() {
                FB.getLoginStatus(async (response) => {
                    if (response.status === "connected") {
                        await this.fbGetUser();
                    }

                    this.fbReady = true;
                });
            },
            fbLogin() {
                FB.login((response) => {
                    if (response.authResponse) {
                        this.fbGetUser();
                    }
                });
            },
            fbGetUser() {
                return new Promise((accept, reject) => {
                    FB.api('/me', (response) => {
                        this.user = response;
                        accept(response);
                    });
                });
            }
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    h2 {
        color: white;
        text-shadow: 0 0 20px rgba(#000, 1), 0 0 10px rgba(#000, 1);
    }

    .logos{
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        img {
            height: 140px;
        }
    }
</style>
