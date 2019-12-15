<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="small" @on-click="btn1">
      <i slot="icon">*</i>
      按钮
      </i-button>
    <i-button size="large" @on-click="btn2">大按钮</i-button>
    <!-- <div @click="oSure">
      <i-button size="default" ref="sure">确认</i-button>
    </div> -->
    <i-button size="default" ref="sure" @click.native="showToast" @mess="getMess">确认</i-button>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    btn1() {
      console.log('1')
    },
    btn2() {
      console.log('2')
    },
    showToast() {
      this.$toast('网络异常')
    },
    getMess(data) {
      this.msg = data
      console.log(this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
