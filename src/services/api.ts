import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://todo-list-n3cb-allji7t4d-luizgustavodarossi.vercel.app/'
})