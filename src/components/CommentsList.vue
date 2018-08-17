<template>
    <div>
        <ul class="list-group list-group-flush" v-for="(comment, key) in comments" :key="key">
            <li class="list-group-item">Text: {{ comment.text }}<p>Created at: {{ comment.createdAt }}</p></li>
        </ul>
    </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    props: ['comments']
}
</script>