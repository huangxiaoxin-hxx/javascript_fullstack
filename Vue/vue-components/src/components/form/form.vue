<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'iForm',
  provide: { 
    
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data () {
    return {
      fields: []
    }
  },
  created () {
    this.$on('on-form-item-add', (field) => {
      if (field) this.fields.push(field)
    })
    this.$on('on-form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(fields))
    })
  },
  
}
</script>

<style>

</style>