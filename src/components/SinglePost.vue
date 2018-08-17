<template>
    <div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> <b>{{post.title}}</b> </li>
            <li class="list-group-item"> {{post.text}} </li>
        </ul>
        <h4>Comments: </h4>
        <CommentsList :comments="post.comments"/>
        <AddComment :postId="post.id"
                    @commentCreated="onCommentCreated"/>
    </div>
</template>

<script>
import AddComment from '../components/AddComment'
import CommentsList from '../components/CommentsList'
import { posts } from '../services/Posts'

export default {
    components: {
        AddComment,
        CommentsList
    },

    data() {
        return {
            post: {}
        }
    },

    methods: {
        getPost() {
            posts.singlePost(this.$route.params.id)
                .then(response => { this.post = response.data })
        },

        onCommentCreated() {
            this.getPost()
        }
    },

    created() {
      this.getPost()
    } 
}
</script>

