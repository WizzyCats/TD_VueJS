import { createRouter, createWebHistory } from 'vue-router'

// Mes petites routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: () => import('../views/AccueilView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/todos',
      name: 'todo',
      meta: { requiresAuth: true },
      component: () => import('../views/TodosView.vue')
    },
    {
      path: '/todos/:id',
      name: 'detail',
      props: true,
      meta: { requiresAuth: true },
      component: () => import('../views/TodoDetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AProposView.vue')
    }
  ],
})

// Permet de vérifier si un token est nécessaire pour afficher une page
router.beforeEach((to, from) => {
  const isLogged = !!localStorage.getItem('token')
  if (to.meta.requiresAuth && !isLogged){
    return {name:'login'}
  }
})

export default router
