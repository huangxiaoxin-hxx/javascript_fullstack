import { mapActions, mapGetters } from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    onQueryChange (query) {
      this.query = query.trim()
    },
    saveSearch (song) {
      console.log(song)
      // this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
      this.selectPlaySong(song)
      //为了看效果
      this.addPlayList(song)
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
      'deleteAllSearchHistory',
      'selectPlaySong',
      'addPlayList'
    ])
  }
}

export const playerMixin = {
  computed: {
    ...mapGetters([
      'currentSong',
      'playList'
    ])
  },
  methods: {

  }
}