<template>
    <div>
        <form @submit.prevent>
            <div class="form-group row">
                <label for="title" class="col-4 col-form-label">Title</label>
                <input type="text" required="required" class="form-control here" v-model="post.title">
            </div>
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">Text</label>
                <input type="text" required="required" class="form-control here" v-model="post.text">
            </div>
            <button @click="addPost" class="btn btn-primary">Add</button>
        </form>
    </div>    
</template>

<script>
import { posts } from '../services/Posts'
export default {
    data() {
        return {
            post: {
                title: '',
                text: ''
            }
        }
    },

    methods: {
        // onSubmit() {
        //     posts.add(this.post)
        // }
        addPost() {
            posts.add(this.post)
            .then(response => {
                this.$router.push('/posts')
            })
        }
    }
}
</script>
