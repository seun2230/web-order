import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/admin/Admin.vue'
import DashBoard from '../views/admin/page/DashBoard.vue'
import foodManagement from '../views/admin/page/FoodManageMent.vue'
import User from '../views/user/User.vue'
import Sign from '../views/user/page/SignUpLSW.vue'
import Login from '../views/user/page/LoginFormLSW.vue'
import Menu from '../views/user/page/Menu.vue'
import PageList from '../components/PageList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageList
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    children: [
      {
        path: 'sign',
        name: 'sign',
        component: Sign
      },
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'menu',
        name: 'menu',
        component: Menu
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'dashBoard',
        name: "DashBoard",
        component: DashBoard,
      },
      {
        path: 'order',
        name: 'order',
        component: Login,
      },
      {
        path: 'foodManagement',
        name: 'foodManagement',
        component: foodManagement
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router