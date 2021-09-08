import axios from 'axios' 
const httpServicePlugin = {
  install(Vue, options) {
    Vue.prototype.$axios = axios

    Vue.prototype.$setupAxios = function () {
      this.$axios.defaults.baseURL = `http://localhost:3000/`
      this.$axios.defaults.headers['Content-Type'] = 'application/json'
      // this.$axios.interceptors.request.use(req => {
      //   req.headers['Authorization'] = `Bearer `
      //   return req;
      // });
    }
  }
};

export default httpServicePlugin;