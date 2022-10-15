import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/api/'

const Auth = {
  register: (email, password) => {
    return axios.post('user/registration', {
      email: email,
      password: password
    });
  },

  login: (email, password) => {
    return axios.post('user/login', {
      email: email,
      password: password,
    });
  },

  check: () => {
    return axios.get('user/auth', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
  }
}

const Store = {
  createType: (name) => {
    return axios.post('type/')
  },

  getAllTypes: () => {
    return axios.get('type/')
  },

  createBrand: (name) => {
    return axios.post('brand/', {
      name: name
    })
  },

  getAllBrands: () => {
    return axios.get('brand/')
  },

  getAllCategory: () => {
    return axios.get('category/')
  },

  getOneCategory: (id) => {
    return axios.get(`category/${id}`)
  },

  createProduct: (name, price, brandId, typeId, info, img) => {
    return axios.post('product/', {
      name: name,
      info: info,
      img: img,
      brandId: brandId,
      typeId: typeId,
      price: price
    })
  },

  getAllProducts: () => {
    return axios.get(`product/`)
  },

  getOneProducts: (id) => {
    return axios.get(`product/${id}`)
  },

  getAllSubCategory: () => {
    return axios.get('sub-cat/')
  },

  getOneSubCategory: (id) => {
    return axios.get(`sub-cat/${id}`)
  }
}

export default {
  Auth,
  Store
}