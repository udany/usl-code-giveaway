<template>
    <div>
        <div id="bckVideo">
            <video loop autoplay muted plays-inline>
                <source src="/bck.mp4" type="video/mp4">
                <source src="/bck.ogv" type="video/ogv">
            </video>
        </div>

        <div id="content">
            <nuxt/>
        </div>
    </div>
</template>

<script>
    export default {
        head: () => ({
            titleTemplate: "UNIRIO Summoners - %s"
        }),
        data: () => ({
        })
    };
</script>

<style lang="scss">
    #bckVideo {
        position: absolute;
        top: 0;
        bottom: 0;
        background: url('/bck.jpg') center center;
        background-size: cover;

        width: 100%;
        height: 100%;
        overflow: hidden;

        video {
            /* Make video to at least 100% wide and tall */
            min-width: 100%;
            min-height: 100%;

            /* Setting width & height to auto prevents the browser from stretching or squishing the video */
            width: auto;
            height: auto;

            /* Center the video */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }

        &:after {
            content: '';
            position: absolute;

            top: 0;
            bottom: 0;
            left: 0;
            width: 20%;

            background: linear-gradient(left, rgba(#000, 1), rgba(#1a0921, 0));
            z-index: 1;
        }

        &:before {
            content: '';
            position: absolute;

            top: 0;
            bottom: 0;
            right: 0;
            width: 20%;

            background: linear-gradient(right, rgba(#000, 1), rgba(#1a0921, 0));
            z-index: 1;
        }
    }

    #content {
        position: relative;
        z-index: 3;
    }
</style>
