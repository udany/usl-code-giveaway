<template>
    <div style="position: relative">
        <div class="d-flex align-items-center" style="min-height: 100vh; padding-bottom: 65px;">

            <div class="container my-4">
                <b-row>
                    <b-col offset-md="3" md="6" offset-lg="4" lg="4">
                        <h2 class="text-center" v-if="accessKey">
                            <span v-for="char in accessKey">{{char.toUpperCase()}}</span>
                        </h2>
                        <div id="outLoadingBar">
                            <div id="inLoadingBar" :style="{width: progress+'%', backgroundColor: bckColor}"></div>
                        </div>
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
            currentTime: 0,
            loading: false,
            start: 0,
            accessKey: ''
        }),
        async mounted() {
            this.tick();

            setInterval(() => {
                this.tick();
            }, 100);
        },
        methods: {
            tick() {
                this.currentTime = Date.now();

                if (this.start + 15000 < this.currentTime && !this.loading) {
                    this.loadAccessKey();
                }
            },
            async loadAccessKey() {
                let { data } = await this.$api.get('/keys/current');

                this.start = data.start;
                this.accessKey = data.key;
            }
        },
        computed: {
            progress() {
                return 100 - ((this.currentTime-this.start) / 150)
            },
            bckColor() {
                if (this.progress > 50) {
                    return '#18ad24';
                }else if (this.progress>25){
                    return '#e5c019';
                }else{
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
    #outLoadingBar{
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
