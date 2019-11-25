import * as types from '../types'
import { findIndex } from '@/common/util'

const state = {
  playing: false,
  fullScreen: false,
  playList: [],
  currentIndex: -1,
  favoriteList: [],
  playHistory: []
}

const getters = {
  currentSong: state => {
    return state.playList[state.currentIndex] || {}
  },
  playList: state => state.playList
}

const actions = {
  //选择音乐播放
  selectPlaySong ({commit, state}, song) {
    let playList = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查找当前列表中是否有待插入的歌曲，并返回其索引
    let fpIndex = findIndex(playList, song)
    // 如果已经包含这首歌
    if (fpIndex > -1) {
      currentIndex = fpIndex
    } else {
      playList = [song, ...playList]
      currentIndex = 0
    }
    commit(types.SET_PLAYLIST, playList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
  },
  //加入音乐到palylist
  addPlayList ({commit, state}, song) {
    let playList = [song, ...state.playList.slice()]
    if (playList.length === 1) {
      let currentIndex = state.currentIndex
      currentIndex++
      commit(types.SET_CURRENT_INDEX, currentIndex)
    }
    commit(types.SET_PLAYLIST, playList)
    console.log(playList)
  }
}

const mutations = {
  [types.SET_PLAYLIST] (state, playList) {
    state.playList = playList
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}