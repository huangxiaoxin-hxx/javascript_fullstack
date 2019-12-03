<template>
  <div>
    <span @mousedown="start" style="position:absolute; left:0; top:0;">这是一个可拖动元素</span>
    <el-button @click="open">open</el-button>
    <el-dialog title="tips" :visible="visible">
      <span @click="close">这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
import { dargMixin } from './drag.js';
export default {
  mixins: [dargMixin],
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style>

</style>