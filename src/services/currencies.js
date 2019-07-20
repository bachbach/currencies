import APIInterceptor from './APIInterceptor'

export default class CurrenciesService {
  constructor (api = APIInterceptor) {
    this.api = api
  }

  fetchCurrencies (query) {
    return this.api.get(`/currencies?${query}`)
  }
}
