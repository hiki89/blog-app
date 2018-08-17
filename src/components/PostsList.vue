<template>
    <div>
        <ul class="list-group list-group-flush" v-for="(post, key) in posts" :key="key">
            <li class="list-group-item">Title: {{ post.title }}</li>
            <li class="list-group-item">Text: {{ post.text }}</li>
            <li class="list-group-item">Created at: {{ post.createdAt }}</li>
            <router-link :to="{name:'singlePost', params: {id: post.id}}" class="btn btn-dark">View Post</router-link>
            <router-link :to="{name:'edit', params: {id: post.id}}" class="btn btn-dark">Edit</router-link>
            <button @click="deletePost(post.id)">Delete</button>
        </ul>
    </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    props: ['posts'],

    methods: {
        deletePost(id) {
            posts.remove(id)
            let index = this.posts.findIndex(p => p.id === id)
            this.posts.splice(index, 1)
        }
    }
}
</script>

<style>
.list-group {
    display: inline-block;   
    text-align: center;            
    width: 400px;
}                                          
</style>

