import Vue from 'vue'
import Router from 'vue-router'
import ThreeJS from '@/components/ThreeJS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'threejs',
      component: ThreeJS
    }

  ]
})
