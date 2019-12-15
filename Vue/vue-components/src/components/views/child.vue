<template>
  <div class="child">child
    <button @click="send">发送</button>
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  data () {
    return {
      mess: '我是chlid中的数据'
    }
  },
  methods: {
    send () {
      // bus.$emit('test', this.mess)
      // this.$dispatch('test', this.mess)
    }
  }
}
</script>

<style>

</style>