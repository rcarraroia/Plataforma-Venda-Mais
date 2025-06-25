<template lang="html">
    <div class="ps-post--detail ps-post--detail-with-hero">
        <div class="ps-post__header">
            <div class="ps-post__categories">
                <nuxt-link
                    to="/blog"
                    v-for="item in post.categories"
                    class="ps-post__category"
                    :key="item.id"
                >
                    {{ item.name }}
                </nuxt-link>
            </div>
            <h2>{{ post.title }}</h2>
            <div class="ps-post__meta">
                <span>
                    Author:
                    <a href"#"> {{ post.created_by.firstname }} {{ post.created_by.lastnam}e} </a>
                </span>
                <span>
                    Published in:
                    <a to="#"> June 10, 2019</a>
                </span>
            </div>
        </div>
        <div class="ps-post__content ps-document" v-html="postContent"></div>
        <div class="ps-post__footer">
            <!--            <p class="ps-post__tags">
                <nuxt-link to="/blog" v-for="item in post.categories" class="ps-post__category" :key="item.id">
                    {{ item.name }}
                </nuxt-link>
            </p>-->
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';

export default {
    name: 'ArticleDetail',
    props: {
        post: {
            type: Object,
            default: {}
        }
    },
    computed: {
        baseURL() {
            return baseUrl;
        },
        postContent() {
            if (this.post.content.match(/<img/)) {
                return this.post.content.replace(
                    /<img([^>]*)\ssrc=(['"])(?:[^\2\/]*\/)*([^\2]+)\2/gi,
                    `<img$1 src=$2${baseUrl}/uploads/$3$2`
                );
            } else {
                return this.post.content;
            }
        }
    },
    created() {
        console.log(this.post);
    }
};
</script>
