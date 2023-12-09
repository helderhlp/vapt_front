import ApiClient from './ApiClientService'

const FetchService = {
  getBanners() {
    return ApiClient.get('/banners')
  },
  getSpecialOffers() {
    return ApiClient.get('/viagens', { params: { ofertas: '1' } })
  },
  getDestinations(category) {
    return ApiClient.get('/destinos', { params: { categoria: category } })
  },
  postNewsletter(body) {
    return ApiClient.post('/newsletter', body)
  },
  postContact(body) {
    return ApiClient.post('/contato', body)
  },
  registerExcursionist(body) {
    return ApiClient.post('/excursionistas', body)
  },
  login(body) {
    return ApiClient.post('/auth/token', body)
  },
  getDestinationsCategories() {
    return ApiClient.get('/destinos/categorias')
  },
}

export default FetchService
