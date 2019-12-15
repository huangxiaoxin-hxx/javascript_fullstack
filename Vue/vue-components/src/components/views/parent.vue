<template>
  <div class="parent">
    <child></child>
    parent
    <child2></child2>
  </div>
</template>

<script>
import child from './child'
import child2 from './child2'
export default {
  data() {
    return {
      mess: ''
    }
  },
  components: {
    child,
    child2
  },
  mounted() {
    this.$on('test', (text) => {
      console.log(text)
    })
  }
}
</script>

<style>

</style>