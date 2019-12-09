<script>
export default {
  render(h) {
    const tag = this.tag
    const span = this.span
    return h(tag,{
      class: `my-el-col-${span}`
    }, this.$slots.default)
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: '24'
    }
  }
}
</script>

<style lang="scss" scoped>
  @for $i from 0 through 24 {
    .my-el-col-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }
  }
</style>