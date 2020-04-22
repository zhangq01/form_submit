import Vue from 'vue'
import Router from 'vue-router'
import formSubmit from '@/components/form_config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'formSubmit',
      component: formSubmit
    }
  ]
})
