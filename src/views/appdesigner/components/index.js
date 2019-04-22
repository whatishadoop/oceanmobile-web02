export default {
  install: function (Vue) {
    // 全局异步注册组件
    Vue.component('barchart',() => import('@/views/appdesigner/components/chart/barchart'));

    // 全局异步注册配置组件
    Vue.component('barchartconfig', () => import('@/views/appdesigner/components/chart/barchartconfig'));
    Vue.component('barchartconfig02', () => import('@/views/appdesigner/components/chart/barchartconfig02'));
  }
};
