import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/HomePage'//首页
import myVenue from '../components/Venue'//场馆预约
import myReservation from '../components/Reservation/MyReservation'//预约跳转我的预约
import rule from '../components/Reservation/Rule'//预约跳转预约规则
import basketball from '../components/Reservation/basketball'//篮球跳转篮球预约
import YuYue from '../components/Reservation/YuYue'//篮球跳转篮球预约
import ChangGuan from '../components/Reservation/ChangGuan'//篮球跳转篮球预约
import users from '../components/Reservation/User'//篮球跳转篮球预约
import login from '../components/login/login'//篮球跳转篮球预约
Vue.use(Router)
Vue.use(myVenue)
Vue.use(myReservation)
Vue.use(rule)
Vue.use(basketball)
Vue.use(YuYue)
Vue.use(ChangGuan)
Vue.use(users)
Vue.use(login)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
    },
    {
      /*场馆预约当前页面跳转*/
      path: '/myVenue',
      component: myVenue,
      children: [
        {path: '/', component: ChangGuan},
        {path: '/GuiZe', component: rule},
        {path: '/My', component: myReservation},
        {path: '/YuYue', component: ChangGuan},
      ]
    },
    {
      path: "/ShouYe",
      name: "homepage",
      component: homepage
    }, {
      path: "/Determine",
      component: YuYue
    },
    {
      path: "/FanHui",
      component: myVenue
    }, {
      path: "/FanHui2",
      component: basketball
    },
    {
      /*跳转预约篮球场地*/
      path: '/basketball',
      name: 'basketball',
      component: basketball
    },
    {
      /*跳转预约篮球场地*/
      path: '/yycg',
      name: 'basketball',
      component: basketball
    },
    {
      /*跳转用户*/
      path: '/user',
      name: 'user',
      component: users
    },
    {
      /*跳转登录*/
      path: '/login',
      component: login
    },
    {
      /*跳转登录*/
      path: '/ok',
      component: users
    },
  ]
})
