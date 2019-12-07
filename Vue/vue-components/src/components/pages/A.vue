<template>
  <div class="a-test">A{{app.name}}
    <testb></testb>
  </div>
</template>

<script>
import B from './B'
export default {
  provide: {
    name: '黄小心'
  },
  components: {
    'testb': B
  },
  inject: ['app'],
  data () {
    return {
      // name: '黄小心'
    }
  }
}
</script>

<style>

</style>