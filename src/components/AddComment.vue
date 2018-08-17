<template>
    <div>
        <form @submit.prevent="submitComment">
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">Your comment:</label>
                <textarea type="text" required="required" class="form-control here" placeholder="Write here" v-model="comment.text"></textarea>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    props: ['postId'],

    data() {
        return {
            comment: {
                text: '',
                postId: 0 
            }
        }
    },

    methods: {
        submitComment() {
            this.createComment()
        },

        createComment() {
            this.comment.postId = this.postId
            posts.addComment(this.comment, this.postId)
            .then(response => {
                this.$emit("commentCreated")
            })
            .catch(response => {
                console.log(response)
            })
        }
    }
}
</script>

