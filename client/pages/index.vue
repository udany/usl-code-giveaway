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

                            <h3 v-if="code">{{code}}</h3>

                            <template v-if="mustRequestCode">
                                <b-row>
                                    <b-col class="text-center" offset-md="3" md="6" >
                                        <b-input id="keyInput" v-model="enteredKey" placeholder="Chave" />
                                        <b-btn id="getCodeButton" block variant="info" @click="requestCode">
                                            Resgatar código
                                        </b-btn>
                                    </b-col>
                                </b-row>
                            </template>

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
            mustRequestCode: false,
            fbReady: false,
            enteredKey: ''
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

                        this.getCode();

                        accept(response);
                    });
                });
            },
            async getCode() {
                let { data } = await this.$api.get(`user/getCode/${this.user.id}`);
                if (data.status){
                    this.code = data.data.code;
                }else{
                    this.mustRequestCode = true;
                }

            },
            async requestCode() {
                if (this.enteredKey.length!==6){
                    alert('Chave inválida');
                }else{
                    let { data } = await this.$api.get(`user/requestCode/${this.enteredKey}/${this.user.id}`);

                    if (data.status){
                        this.code = data.data.code;
                        this.mustRequestCode = false;
                    }else{
                        alert('Chave inválida');
                    }
                }
            }
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    #getCodeButton{
        background-color: rgba(78, 9, 168, 0.91);
        border: none;
        border-radius: 5px;
        margin-top: 5px;
    }
    #keyInput{
        font-family: 'Press Start 2P', sans-serif;
        font-size: 2em;
        border: none;
        color: #fff;
        text-align: center;
        padding: 5px;
        height: auto;

        background-color: rgba(black, .8);
    }

    h2 {
        color: white;
        text-shadow: 0 0 20px rgba(#000, 1), 0 0 10px rgba(#000, 1);
    }

    h3 {
        background-color: rgba(black, .8);
        padding: 10px;
        color: white;
        border-radius: 10px;
        display: inline-block;

        word-break: break-all;
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

    @media (max-width: 768px) {

        .logos{
            img {
                height: 80px;
            }
        }
    }
</style>
