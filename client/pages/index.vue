<template>
    <div style="position: relative">
        <div class="d-flex align-items-center" style="min-height: 100vh; padding-bottom: 65px;">

            <div class="container my-4">
                <b-row>
                    <b-col>
                        <b-row>
                            <b-col offset-md="3" md="6" offset-lg="4" lg="4">
                                <b-btn to="/register" variant="love" block size="lg" class="mb-4">
                                    Cadastre-se!
                                </b-btn>

                                <b-btn variant="primary" block size="lg">
                                    Login
                                </b-btn>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </div>

        </div>
    </div>
</template>

<script>
    import config from '../config';
    import User from 'shared/entities/User';

    export default {
        layout: 'external',
        head: () => ({
            title: "Home"
        }),
        data: () => ({
            rotatingText: [
                "pessoas",
                "caminhos",
                "paixões",
                "destinos",
                "amores",
                "corações",
                "sorrisos",
                "casais",
                "amigos",
                "ficantes"
            ].shuffle(),
            currentTextIndex: 0,
            preShowText: false,
            hideText: false,

            users: [],
            config
        }),
        async asyncData({app}) {
            let {data: users} = await app.$api.get(`/user/`);

            return {users};
        },
        components: {},
        created() {
            this.users = this.users.map(d => new User(d));
        },
        mounted() {

        },
        methods: {
        }
    }
</script>

<style lang="scss">

</style>
