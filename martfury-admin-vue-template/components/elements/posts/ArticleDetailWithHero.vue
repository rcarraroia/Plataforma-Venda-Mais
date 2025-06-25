<template lang="html">
    <div class="ps-post--detail ps-post--detail-with-hero">
        <div
            class="ps-post__thumbnail"
            :style="{
                backgroundImage: `url(${baseURL}${post.wide_thumbnail.url})`
            }"
        />
        <div class="ps-post__wrapper">
            <div class="ps-post__header">
                <div class="ps-post__meta">
                    <span>June 10, 2019</span>
                </div>
                <h2>{{ post.title }}</h2>
            </div>
            <div class="ps-post__content">
                <div class="ps-document">
                    <div v-html="postContent"></div>
                    <!--                    <div class="ps-post__footer">
                        <ModuleArticleTags tags="{tagItems}" />
                        <ModuleArticleSocialSharing />
                    </div>-->
                </div>
                <div class="ps-post__comments">
                    <module-post-comment-listing />
                    <form-post-comment />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
import ModulePostCommentListing from '~/components/elements/posts/modules/ModulePostCommentListing';
import FormPostComment from '~/components/shared/forms/FormPostComment';

export default {
    name: 'ArticleDetailWithHero',
    components: { FormPostComment, ModulePostCommentListing },
    props: {
        post: {
            type: Object,
            default: () => {}
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
    }
};
</script>
