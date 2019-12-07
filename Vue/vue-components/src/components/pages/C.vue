<template>
  <div class="c-test">C{{app.age}}
    <button @click="changeApp">修改</button>
  </div>
</template>

<script>
export default {
  inject: ['app'],
  methods: {
    changeApp() {
      app.age = 16
    }
  }
}
</script>

<style>

</style>