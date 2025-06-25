<template lang="html">
    <div class="ps-block--comment">
        <div class="ps-block__thumbnail">
            <img :src="comment.image" alt="" />
        </div>
        <div class="ps-block__content">
            <h5>
                {{ comment.name }}
                <small>{{ comment.time }}</small>
            </h5>
            <p>{{ comment.content }}</p>
            <a class="ps-block__reply" href="#post-comment">
                Reply
            </a>
            <template v-if="comment.children">
                <comment-item v-for="item in comment.children" :comment="item" :key="item.id" />
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentItem',
    props: {
        comment: {
            type: Object,
            default: () => {}
        }
    }
};
</script>
