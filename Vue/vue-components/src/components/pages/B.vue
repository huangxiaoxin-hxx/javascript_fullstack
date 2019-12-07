<template>
  <div class="b-test">B{{app.name}}
  <div>
    <testc></testc>
  </div>
  </div>
</template>

<script>
import C from './C'
export default {
  inject: ['app'],
  mounted () {
    console.log(app.name)
    app.name = '宋呆呆'
  },
  components: {
    'testc': C
  }
}
</script>

<style>

</style>