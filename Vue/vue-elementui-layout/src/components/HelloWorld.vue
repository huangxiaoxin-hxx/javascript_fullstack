<template>
  <div>
    <!-- <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row> -->
    <my-row tag="p">
      <my-col :span="12">12</my-col>
      <my-col :span="6">6</my-col>
      <my-col :span="6">6</my-col>
    </my-row>
  </div>
</template>

<script>
import myRow from './my-row'
import myCol from './my-col'
export default {
  components: {
    'my-row': myRow,
    'my-col': myCol
  }
};
</script>

<style>
.grid-content {
    height: 40px;
}
.bg-purple {
  background-color: purple;
}
.bg-purple-light {
  background: rgb(212, 44, 212);
}
</style>