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

const Store = {
  createType: (name) => {
    const res = axios.post('type/')

    return res
  },

  getAllTypes: () => {
    const res = axios.get('type/')

    return res
  },

  createBrand: (name) => {
    const res = axios.post('brand/', {
      name: name
    })

    return res
  },

  getAllBrands: () => {
    const res = axios.get('brand/')

    return res
  },

  getAllCategory: () => {
    const res = axios.get('category/')

    return res
  },

  getOneCategory: (id) => {
    const res = axios.get(`category/${id}`)

    return res
  },

  createProduct: (name, price, brandId, typeId, info, img) => {
    const res = axios.post('product/', {
      name: name,
      info: info,
      img: img,
      brandId: brandId,
      typeId: typeId,
      price: price
    })

    return res
  },

  getAllProducts: () => {
    const res = axios.get(`product/`)

    return res
  },

  getOneProducts: (id) => {
    const res = axios.get(`product/${id}`)

    return res
  },

  getAllSubCategory: () => {
    const res = axios.get('sub-cat/')

    return res
  },

  getOneSubCategory: (id) => {
    const res = axios.get(`sub-cat/${id}`)

    return res
  }
}

export default {
  Auth,
  Store
}