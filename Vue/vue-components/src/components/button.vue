<template>
    <button :class="'i-button-size'+size" @click="sureClick">
      <slot name="icon"></slot>
      <slot></slot>
    </button>
</template>

<script>
function oneOf(value, args) {
  for (let i = 0; i > args.length; i++) {
    if (value === args[i]) {
      return true;
    }
  }
  return false;
}
export default {
  data() {
    return {
      message: '子组件的内容'
    };
  },
  props: {
    size: {
      //type: String,
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default: "default"
    }
  },
  methods: {
    handleClick() {
      this.$emit('on-click')
      // console.log(123);
    },
    sureClick() {
      // console.log("确认");
      this.$emit('mess', this.message)
    }
  }
};
</script>

<style scoped>
.i-button-sizelarge {
  padding: 10px 16px;
}
.i-button-sizedefault {
  padding: 8px 14px;
}
.i-button-sizesmall {
  padding: 4px 10px;
}
button {
  border: 1px solid orange;
  background-color: yellow;
  color: #000;
}
</style>