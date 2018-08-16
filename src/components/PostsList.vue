<template>
    <div>
        <ul class="list-group list-group-flush" v-for="(post, key) in posts" :key="key">
            <li class="list-group-item">Title: {{ post.title }}</li>
            <li class="list-group-item">Text: {{ post.text }}</li>
            <li class="list-group-item">Created at: {{ post.createdAt }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['posts']
}
</script>

