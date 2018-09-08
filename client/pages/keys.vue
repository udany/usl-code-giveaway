<template>
    <div style="position: relative">
        <div class="d-flex align-items-center" style="min-height: 100vh; padding-bottom: 65px;">

            <div class="container my-4">
                <b-row>
                    <b-col offset-md="1" md="10" offset-lg="3" lg="6">

                        <h2 class="text-center" v-if="accessKey">
                            <span v-for="char in accessKey">{{char.toUpperCase()}}</span>
                        </h2>

                        <div id="outLoadingBar">
                            <div id="inLoadingBar" :style="{width: progress+'%', backgroundColor: bckColor}"></div>
                        </div>

                        <h2 class="text-center">
                            cblol.udany.net
                        </h2>

                        <b-input type="password" v-model="password" v-if="!intervalId"></b-input>
                        <b-btn v-if="!intervalId" variant="info" block @click="startTick">Exibir</b-btn>
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
        name: 'keyShow',
        head: () => ({
            title: 'Home'
        }),
        data: () => ({
            currentTime: 0,
            loading: false,
            intervalId: null,
            start: 0,
            expiryTime: 1,
            accessKey: '',
            password: ''
        }),
        async mounted() {
        },
        methods: {
            startTick() {
                this.tick();

                this.intervalId = setInterval(() => {
                    this.tick();
                }, 100);
            },
            tick() {
                this.currentTime = Date.now();

                if (this.start + this.expiryTime * 1000 < this.currentTime && !this.loading) {
                    this.loadAccessKey();
                }
            },
            async loadAccessKey() {
                if (!this.password) return;

                let {data} = await this.$api.get('/keys/current?pass='+this.password);

                if (data.status) {
                    data = data.data;
                    this.start = Date.now() - data.elapsed;
                    this.accessKey = data.key;
                    this.expiryTime = data.expiry;
                }
            }
        },
        computed: {
            progress() {
                return 100 - ((this.currentTime - this.start) / (this.expiryTime * 10))
            },
            bckColor() {
                if (this.progress > 80) {
                    return '#4fdb4a';
                } else if (this.progress > 50) {
                    return '#18ad24';
                } else if (this.progress > 25) {
                    return '#e5c019';
                } else {
                    return '#b71212';
                }
            }
        }
    }
</script>

<style lang="scss">
    h2 {
        color: white;
        text-shadow: 0 0 20px rgba(#000, 1), 0 0 10px rgba(#000, 1);

        span {
            display: inline-block;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 2px 5px;
            text-align: center;
            border-radius: 5px;
        }
        span + span {
            margin-left: 6px;
        }
    }

    .logos {
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        img {
            height: 140px;
        }
    }

    #outLoadingBar {
        background-color: rgba(0, 0, 0, 0.5);
        height: 20px;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;

        text-shadow: 0 0 20px rgba(#000, 1), 0 0 10px rgba(#000, 1);
        padding: 5px;
    }

    #inLoadingBar {
        height: 10px;
        border-radius: 10px;
        opacity: .9;

        transition: all .1s, background-color 0.2s;
    }
</style>
