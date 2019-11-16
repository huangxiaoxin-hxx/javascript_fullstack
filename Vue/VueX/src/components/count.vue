<template>
  <div class="count">
    {{count}}
    <button @click="addAction(20)">+</button>
    <button @click="reduce">-</button>
    {{getcount}}
  </div>
</template>

<script>
import { mapState, mapMutations ,mapGetters ,mapActions} from 'vuex'
export default {
  data () {
    return {
      // myCount: null
    }
  },
  mounted () {
    // this.myCount = this.$store.state.count
  },
  // computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState(['count']),
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getcount'
    ])
  },
  methods: {
    ...mapMutations([
      'add',
      'reduce'
    ]),
    ...mapActions([
      'addAction',
      'reduceAction'
    ])
    // test () {
    //   this.myCount ++
    // }
  }
}
</script>

<style>

</style>