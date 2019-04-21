import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import './permission' // permission control

//  引入总线
import Bus from './utils/bus';
// 引入iview
import './vendor/iview.js';
// 引入echarts
import echarts from 'echarts';
// 引入uuid生成器
import uuid from 'uuid-js';
// 引入自定义组件(插件)
import webAppPlugin from './views/appdesigner/components'

Vue.prototype.$uuid = uuid;
Vue.prototype.$echarts = echarts;
Vue.prototype.$bus = Bus;

Vue.use(webAppPlugin);
Vue.use(mavonEditor);
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
