import ApiClient from './ApiClientService'

const FetchService = {
  getBanners() {
    return ApiClient.get('/banners')
  },
  getSpecialOffers() {
    return ApiClient.get('/viagens', { params: { ofertas: '1' } })
  },
  getTravel(id) {
    return ApiClient.get(`/viagens/${id}`)
  },
  getTravels(id) {
    return ApiClient.get('/viagens', { params: { destino: id } })
  },
  getDestiny(id) {
    return ApiClient.get(`/destinos/${id}`)
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
  postRating(body) {
    return ApiClient.post('/comentarios', body)
  },
  postSuggestion(body) {
    return ApiClient.post('/destinos/sugestoes', body)
  }
}

export default FetchService
