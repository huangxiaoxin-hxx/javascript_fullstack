<template>
  <div>
    <h3>动态渲染.vue 文件的组件 -- display</h3>
    <i-display :code="code"></i-display>
  </div>
</template>

<script>
import iDisplay from '@/components/display/display.vue'
import defaultCode from './display/display.js'
export default {
  components: {
    iDisplay
  },
  data () {
    return {
      code: defaultCode
    }
  }
}
</script>

<style>

</style>