import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { Home } from '../views/Home'
import { NotFound } from '../views/NotFound'

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/:pathMatch(.*)", component: NotFound },
]
const history = createWebHashHistory()

export const router = createRouter({ history, routes })