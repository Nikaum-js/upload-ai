import axios from "axios";

export const api = axios.create({
  baseURL: 'https://upload-ai-api-93m1.onrender.com'
})