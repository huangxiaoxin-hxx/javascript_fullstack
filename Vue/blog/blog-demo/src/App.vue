<template>
  <div id="app">
    <h1>hxx's blog</h1>
    <button @click="showHide">show/hide highlighted post</button>
    <BlogPost v-for="(blogPost, index) in visibileBlogPosts" :key="index" :post="blogPost"></BlogPost>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
  import BlogPost, { Post } from "./components/BlogPost.vue";
  import { Component,Vue } from "vue-property-decorator";

  @Component({
    components: {
      BlogPost
    }
  })

  export default class App extends Vue {
    private blogPosts: Post[] = [
      {
        title: 'My first BlogPost ever',
        body: 'Welcome to my BlogPost',
        author: 'hxx',
        datePosted: new Date(2020, 0, 7)
      },
      {
        title: 'My second BlogPost ever',
        body: 'Welcome to my BlogPost',
        author: 'hxx',
        datePosted: new Date(2020, 0, 8),
        highlighted: true
      },
      {
        title: 'My third BlogPost ever',
        body: 'Welcome to my BlogPost',
        author: 'hxx',
        datePosted: new Date(2020, 0, 9)
      }
    ]

    public showHidelighted: boolean = true

    get visibileBlogPosts () {
      return this.blogPosts.filter((post: Post) => post.highlighted === undefined || post.highlighted === this.showHidelighted)
    }

    public showHide () {
      this.showHidelighted = !this.showHidelighted
    }
  }
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
