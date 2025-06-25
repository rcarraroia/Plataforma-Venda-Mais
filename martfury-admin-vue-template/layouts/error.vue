<template lang="html">
    <div class="ps-page--404">
        <div
            class="ps-page__left bg--cover"
            :style="{
                backgroundImage: `url(/img/404.jpg)`
            }"
        ></div>
        <div class="ps-page__right">
            <div class="ps-page__content">
                <figure v-if="error.statusCode === 404">
                    <h1>404</h1>
                    <h3>Opps! Page not found</h3>
                    <p>
                        The pageyou are looking for might have been removed, had it's name changes,
                        or is temporarily unavailable
                    </p>
                    <nuxt-link to="/" class="ps-btn ps-btn--black ps-btn--sm">
                        <i class="feather icon icon-arrow-left mr-2"></i>
                        <span>Go to homepage</span>
                    </nuxt-link>
                </figure>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'layout-error',
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    head() {
        const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
        return {
            title
        };
    },

    data() {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred'
        };
    }
};
</script>
<style lang="scss" scoped>
.ps-page--404 {
    display: flex;
    flex-flow: column nowrap;

    > * {
        flex-basis: 100%;
        max-width: 100%;
    }

    .ps-page__left {
        min-height: 300px;
    }

    .ps-page__right {
        padding: 50px 30px;
        min-height: calc(100vh - 300px);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        h1 {
            margin-bottom: 20px;
            font-weight: 700;
            font-size: 60px;
            color: #ccc;
        }

        h3 {
            font-weight: 600;
        }

        p {
            margin-bottom: 20px;
        }
    }

    @media screen and (min-width: 960px) {
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
        > * {
            flex-basis: 100%;
            max-width: 50%;
            height: 100vh;
        }
        .ps-page__right {
            padding: 100px 80px;
            h1 {
                font-size: 100px;
            }
        }
    }
}
</style>
