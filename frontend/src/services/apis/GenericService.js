import axios from 'axios'

class GenericService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  get(url) {
    return this.api.get(url)
  }

  post(url, data) {
    return this.api.post(url, data)
  }

  put(url, data) {
    return this.api.put(url, data)
  }

  delete(url) {
    return this.api.delete(url)
  }
}

export default new GenericService()
