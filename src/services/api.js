import axios from 'axios'

export const apiCodeBurguer = axios.create({
  baseURL: 'http://localhost:3001'
})