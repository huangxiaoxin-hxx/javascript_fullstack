export const dargMixin = {
  currentTarget: null,
  methods: {
    move(event) {
      const x = event.clientX;
      const y = event.clientY;
      console.log(x,y)
      this.currentTarget.style.transform = `translate(${x}px, ${y}px)`
    },
    leave() {
      document.removeEventListener('mousemove', this.move)
    },
    start(event) {
      this.currentTarget = event.currentTarget
      document.addEventListener('mousemove', this.move)
      document.addEventListener('mouseleave', this.leave)
    }
  }
}