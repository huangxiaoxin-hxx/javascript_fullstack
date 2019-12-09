<script>
// jsx
export default {
  render(h) {
    const tag = this.tag
    // 第一个参数 组件名
    // 第一个参数 标签上的属性
    // 第三个参数 子节点
    return h(tag, {
      class: 'my-el-row'
    }, this.$slots.default)
  },
  props: {
    tag:{
      type: String,
      default: 'div'
    }
  }
}
</script>

<style scoped>
  .my-el-row {
    width: 100%;
  }
</style>