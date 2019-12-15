<template>
  <div class="child">child2
    {{mess}}
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  data () {
    return {
      mess: ''
    }
  },
  mounted () {
    bus.$on('test', (test) => {
      console.log(test)
      this.mess = test
    })
  },
  methods:{

  }
}
</script>

<style>

</style>