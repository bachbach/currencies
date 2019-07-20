import axios from 'axios'

class APIInterceptor {
  constructor (baseURL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}`) {
    this.baseURL = baseURL

    const settings = {
      baseURL: this.baseURL
    }

    this.api = axios.create(settings)
  }


  get (url) {
    return this.api.get(url)
  }
}

export { APIInterceptor }
export default new APIInterceptor()
