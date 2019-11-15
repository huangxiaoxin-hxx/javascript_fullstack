<template>
  <div>
    <h2>父组件</h2>
    <p>从子组件传给父组件的消息:
      <span>{{Msg}}</span>
    </p>
    <child @message="getMsg"></child>
  </div>
</template>

<script>
import child from "./child";
export default {
  data() {
    return {
      Msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    getMsg (e) {
      this.Msg = e
    }
  }
}
</script>

<style>
</style>