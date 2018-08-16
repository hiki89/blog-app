<template>
    <div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> <b>{{post.title}}</b> </li>
            <li class="list-group-item"> {{post.text}} </li>
        </ul>
    </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    data() {
        return {
            post: {}
        }
    },

    created() {
      posts.singlePost(this.$route.params.id)
        .then(response => { this.post = response.data })
    } 
}
</script>

