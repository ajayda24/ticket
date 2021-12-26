import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.29.130:4000/api',
  headers: {
    'Content-type': 'application/json',
  },
})

export default instance
