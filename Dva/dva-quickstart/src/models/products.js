export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id); // 把 item.id 不等于 id 的都返回出来  filter() 不会改变原始数组。filter() 不会对空数组进行检测。
    },
  },
};