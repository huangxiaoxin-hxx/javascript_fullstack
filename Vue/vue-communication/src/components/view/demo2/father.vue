<template>
  <div class="container">
    <!-- <div>
      <ul class="red">
        <li v-for="item of myObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div> -->
    <child :send-msg="myMsg" :send-num="myNum" :send-obj="myObj"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      myMsg: '我是父组件的信息',
      myNum: 123,
      myObj: [
        {
          id: 1,
          name: '小a'
        },
        {
          id: 2,
          name: '小b'
        }
      ]
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>