import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    component:()=>import ('@/views/home/Home.vue')
  },{
    path:"/video",
    component:()=> import('@/views/video/VideoPlay.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
