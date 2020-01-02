import axios from 'axios'
import { request } from 'https'

const axiosIns = axios.createInsatnce({
  baseUrl: 'http://localhost:3000',
  response: (res) => {
    if (res.code === 200) {
      return res;
    } else {
      alert('出错了')
    }
  }
})

export default axiosIns
