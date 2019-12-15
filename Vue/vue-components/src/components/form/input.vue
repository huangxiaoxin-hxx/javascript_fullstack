<template>
  <input type="text" @input="handleInput" @blur="handleBlur" :value="currentValue" />
</template>

<script>
import Emitter from '../../mixins/emittter'
export default {
  mixins: [Emitter],
  name:'iInput',
  props:{
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleInput(event) {
      // console.log(event)
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    handleBlur() {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  }
}
</script>

<style>

</style>