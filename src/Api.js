import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5001/api/'

const Auth = {
  register: (username, email, password) => {
    const res = axios.post('user/register', {
      username: username,
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