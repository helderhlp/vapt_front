import { createRouter, createWebHistory } from 'vue-router'
const TheHome = () => import('@/views/TheHome.vue')
const TheExcursion = () => import('@/views/TheExcursion.vue')
const ExcursionBuy = () => import('@/views/ExcursionBuy.vue')
const ExcursionInfo = () => import('@/views/ExcursionInfo.vue')
const CityDetail = () => import('@/views/CityDetail.vue')
const TheContact = () => import('@/views/TheContact.vue')
const ExcursionistRegister = () => import('@/views/ExcursionistRegister.vue')
const Destinies = () => import('@/views/Destinies.vue')
const Login = () => import('@/views/Login.vue')
const MyAccount = () => import('@/views/MyAccount.vue')
const Profile = () => import('@/views/Profile.vue')
const PrivacyPolicy = () => import('@/views/PrivacyPolicy.vue')
const SecurityPoliciesStandards = () => import('@/views/SecurityPoliciesStandards.vue')
const TermsConditions = () => import('@/views/TermsConditions.vue')
const About = () => import('@/views/About.vue')
const AllExcursions = () => import('@/views/AllExcursions.vue')

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
      component: Destinies
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/minha-conta',
      name: 'my-account',
      component: MyAccount
    },
    {
      path: '/perfil',
      name: 'profile',
      component: Profile
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
      component: About
    },
    {
      path: '/todas-excursoes',
      name: 'all-excursions',
      component: AllExcursions
    }
  ]
})
export default router
