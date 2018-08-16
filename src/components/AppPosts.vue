<template>
    <div>
        <PostsList :posts="posts" />
    </div>
</template>

<script>
import PostsList from '../components/PostsList'
import { posts } from '../services/Posts'

export default {
    components: {
        PostsList
    },

    data() {
        return {
            posts: []
        }
    },

    beforeRouteEnter(to, from, next) {
        posts.getAll()
            .then((response) => {
                next((vm) => {
                    vm.posts = response.data
                })
            })
        
    } 
}
</script>

