<template>
    <div>
        <ul class="list-group list-group-flush" v-for="(comment, key) in comments" :key="key">
            <li class="list-group-item">
                Text: {{ comment.text }}
                <p>Created at: {{ comment.createdAt | formatDate }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { posts } from '../services/Posts'
import { mixin1 } from '../mixins/DateMixin.js'

export default {
    props: ['comments'],
    mixins: ['mixin1']
}
</script>