import axios from 'axios'
import { server, port } from './environment'
/* eslint-disable */
export default () => {
  return axios.create({
    baseURL: `${server}:${port}/api/`,
    headers: {
      'Authorization': 'Bearer ' + $cookies.get('token'),
    }
  })
}
