/* global localStorage */ 

import axios from 'axios'

const API_URL = process.env.API_URL || '//194.44.152.158:8121/index.php/login_check'



export default axios.create({

  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})
