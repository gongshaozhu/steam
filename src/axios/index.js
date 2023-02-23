import axios from './axios'
/*const files = require.context('.', true, /\.js/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') {
    return
  }
  modules[key.replace(/(^\.\/|\.js$)/g, '')] = files(key).default
})*/
export default {
  async getHome(params) {
    return await axios.get('/game/home', { params })
  },
  async getDetail(params) {
    return await axios.get('/game/detail', { params })
  },
  async filterItem(params) {
    return await axios.get('/game/filterItem', { params })
  },
  async filterList(data) {
    return await axios.post('/game/filter', data)
  },
}