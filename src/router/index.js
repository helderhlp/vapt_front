import { createRouter, createWebHistory } from 'vue-router'
const TheHome = () => import('@/views/TheHome.vue')
const TheExcursion = () => import('@/views/TheExcursion.vue')
const ExcursionBuy = () => import('@/views/ExcursionBuy.vue')
const ExcursionInfo = () => import('@/views/ExcursionInfo.vue')
const CityDetail = () => import('@/views/CityDetail.vue')
const TheContact = () => import('@/views/TheContact.vue')
const ExcursionistRegister = () => import('@/views/ExcursionistRegister.vue')
const TheDestinies = () => import('@/views/TheDestinies.vue')
const TheLogin = () => import('@/views/TheLogin.vue')
const MyAccount = () => import('@/views/MyAccount.vue')
const TheProfile = () => import('@/views/TheProfile.vue')
const PrivacyPolicy = () => import('@/views/PrivacyPolicy.vue')
const SecurityPoliciesStandards = () => import('@/views/SecurityPoliciesStandards.vue')
const TermsConditions = () => import('@/views/TermsConditions.vue')
const TheAbout = () => import('@/views/TheAbout.vue')
const AllExcursions = () => import('@/views/AllExcursions.vue')
const PageNotFound = () => import('@/views/PageNotFound.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/excursao/:id(\\d+)',
      props: true,
      name: 'excursion',
      component: TheExcursion
    },
    {
      path: '/excursao/:id(\\d+)/informacoes',
      props: true,
      name: 'excursion-info',
      component: ExcursionInfo
    },
    {
      path: '/excursao/:id(\\d+)/comprar',
      name: 'excursion-buy',
      component: ExcursionBuy
    },
    {
      path: '/:id(\\d+)',
      name: 'city-detail',
      props: true,
      component: CityDetail
    },
    {
      path: '/contato',
      name: 'contact',
      component: TheContact
    },
    {
      path: '/cadastro-excursionista',
      name: 'excursionist-register',
      component: ExcursionistRegister
    },
    {
      path: '/destinos',
      name: 'destinies',
      component: TheDestinies
    },
    {
      path: '/login',
      name: 'login',
      component: TheLogin
    },
    {
      path: '/minha-conta',
      name: 'my-account',
      component: MyAccount
    },
    {
      path: '/perfil',
      name: 'profile',
      component: TheProfile
    },
    {
      path: '/politica-privacidade',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/politicas-normas-seguranca',
      name: 'security-policies-standards',
      component: SecurityPoliciesStandards
    },
    {
      path: '/termos-condicoes',
      name: 'terms-conditions',
      component: TermsConditions
    },
    {
      path: '/sobre',
      name: 'about',
      component: TheAbout
    },
    {
      path: '/todas-excursoes',
      name: 'all-excursions',
      component: AllExcursions
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: PageNotFound
    }
  ]
})
export default router
