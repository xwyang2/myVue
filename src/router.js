import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './components/home';
import beauty from './components/beauty';
import house from './components/house';
import sport from './components/sport';
import bus from './components/bus';
import electric from './components/electric';
import detail from './components/detail'
import error from './components/error';
import chart from './components/chart';
import shoppingcart from './components/shoppingcart';
import account from './components/account';
import login from './components/login';
import reg from './components/reg';



const routes=[

  {path:'/home',component:home},
  {path:'/beauty',component:beauty},
  {path:'/house',component:house},
  {path:'/sport',component:sport},
  {path:'/bus',component:bus},
  {path:'/electric',component:electric},
  {path:'/chart',component:chart},
  {path:'/shoppingcart',component:shoppingcart},
  {path:'/account',component:account},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/detail/:id',component:detail,name:'detail'},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}
];

export default new Router({
  routes
})
