<template lang="html">
    <div class="ps-post-comments">
        <div class="ps-section__header">
            <h3>{{ commentItems.length }} Comments</h3>
        </div>
        <div class="ps-section__content">
            <comment-item v-for="item in commentItems" :comment="item" :key="item.id" />
        </div>
    </div>
</template>

<script>
import CommentItem from '~/components/basic/CommentItem';
export default {
    name: 'ModulePostCommentListing',
    components: { CommentItem },
    data() {
        return {
            commentItems: [
                {
                    id: 1,
                    name: 'Elmer Schmidt',
                    image: '/img/user/1.jpg',
                    content:
                        ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
                    time: 'Jul 12, 2020 AT 8:30 PM'
                },
                {
                    id: 2,
                    name: 'Tianna Fuller',
                    image: '/img/user/2.jpg',
                    content:
                        ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
                    time: 'Jul 12, 2020 AT 10:00 PM',
                    children: [
                        {
                            id: 11,
                            name: 'Jaydin Jones',
                            image: '/img/user/3.jpeg',
                            content:
                                ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
                            time: 'Jul 12, 2020 AT 11:00 PM'
                        },
                        {
                            id: 12,
                            name: 'Jaydin Jones',
                            image: '/img/user/4.jpg',
                            content:
                                ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
                            time: 'Jul 12, 2020 AT 11:20 PM'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Kate Morrison',
                    image: '/img/user/4.jpg',
                    content:
                        ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
                    time: 'Jul 13, 2020 AT 10:10 AM'
                },
                {
                    id: 5,
                    name: 'Amilia Luna',
                    image: '/img/user/6.jpg',
                    content:
                        ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
                    time: 'Jul 13, 2020 AT 10:20 AM'
                }
            ]
        };
    }
};
</script>
