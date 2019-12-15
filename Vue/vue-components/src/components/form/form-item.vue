<template>
  <label>
    <div>
      <slot></slot>
    </div>
  </label>
</template>

<script>
import Emitter from '../../mixins/emittter'
import AsyncValidator from 'async-validator'
export default {
  mixins:[Emitter],
  name: 'iFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      validateState: '', //  校验状态
      validateMessage: '' // 提示信息
    }
  },
  // 组件渲染时,将实例缓存到form中
  mounted () {
    if(this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)
      this.setRules()
    }
  },
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this)
  },
  methods: {
    setRules () {
      this.$on('on-form-blur', this.onFeildBlur)
      this.$on('on-form-blur', this.onFeildChange)
    },
    getRules () {
      let formRules = this.form.setRules
    }
  },
  computed: {
    fieldValue () {
      return this.form.model[this.prop]
    }
  }
}
</script>

<style>

</style>