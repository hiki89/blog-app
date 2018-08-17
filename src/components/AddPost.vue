<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="form-group row">
                <label for="title" class="col-4 col-form-label">Title</label>
                <input type="text" required="required" class="form-control here" v-model="post.title">
            </div>
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">Text</label>
                <input type="text" required="required" class="form-control here" v-model="post.text">
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
            <button name="reset" type="reset" class="btn btn-secondary">Reset</button>
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
        onSubmit() {
            if(this.post.title.length < 2) {
                alert("Title must have at least two letters")
            } else if (this.post.text.length > 300) {
                alert("Text can't have more then 300 letters")
            } else {
                this.addPost()
            }
        },

        addPost() {
            posts.add(this.post)
            .then(response => {
                this.$router.push('/posts')
            })
        }
    }
}
</script>
