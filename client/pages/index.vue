<template>
    <div style="position: relative">
        <div class="d-flex align-items-center" style="min-height: 100vh; padding-bottom: 65px;">

            <div class="container my-4">
                <b-row>
                    <b-col offset-md="3" md="6" offset-lg="4" lg="4">
                        <h2 class="text-center">
                            {{accessKey.toUpperCase()}} - {{currentTime-start}}
                        </h2>
                        <div id="loadingBar">

                        </div>

                    </b-col>
                </b-row>
            </div>

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
            }, 500);
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
        }
    }
</script>

<style lang="scss">
#loadingBar {
    background-color: darkred;
}
</style>
