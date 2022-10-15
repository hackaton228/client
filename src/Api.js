import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/api/'

const Auth = {
  register: (email, password) => {
    const res = axios.post('user/registration', {
      email: email,
      password: password
    })

    return res;
  },

  login: (email, password) => {
    const res = axios.post('user/login', {
      email: email,
      password: password,
    })

    return res;
  },

  check: () => {
    const res = axios.get('user/auth', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })

    return res
  }
}

export default {
  Auth
}