<template>
  <div class="blogpost" :class="(post.highlighted ? 'highlighted' : '')">
    <h2>{{post.title}}</h2>
    <p v-if="post.highlighted">this post is highlighted</p>
    <p>{{post.body}}</p>
    <p class="meta">Written by{{post.author}} on {{date}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

export interface Post {
  title: string;
  body: string;
  author: string;
  datePosted: Date;
  highlighted?: boolean;
}

  @Component
  export default class BolgPost extends Vue {
    @Prop() post!: Post;  // ! 一定要存在 ，  ？ 判断是否有

    get date() {
      return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()+1}/${this.post.datePosted.getFullYear()}`;
    }
  }
</script>

<style lang="stylus" scoped>
.blogpost
  h2
    text-decoration underline
  .meta
    font-style italic
.highlighted
  border 1px solid #f4d942
  background #fff3b2
</style>