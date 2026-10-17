import { createRouter, createWebHistory } from 'vue-router'


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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AProposView.vue')
    }
  ],
})

router.beforeEach((to, from) => {
  const isLogged = !!localStorage.getItem('token')
  if (to.meta.requiresAuth && !isLogged){
    return {name:'login'}
  }
})

export default router
