<template>
  <div>
    <keep-alive>
      <div id="mount-point-index">
        <!--动态内容-->
      </div>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'
import { get } from '@/api/appPage'

export default {
  data() {
    return {
      apppage: {
        id: null,
        name: '',
        code: '',
        content: '',
        contentParse: '',
        config: '',
        sort: 100,
        enabled: true,
        remark: '',
        creator: 'admin'
      }
    }
  },
  mounted: function() {
    // 从后台读取预览区域内容
    this.apppage = {
      id: 1,
      page: 0,
      size: 9999
    }
    get(this.apppage).then(res => {
      console.log('=============返回预览内容==============')
      this._getDynamicContent(res.content[0].contentParse)
    }).catch(err => {
      console.log(err.response.date.message)
    })
  },
  methods: {
    // 组装动态内容区域内容
    _getDynamicContent(pageContent) {
      // 利用模板方法组装成动态编辑内容
      const htmlContent = `<div>${pageContent}</div>`
      // 动态加载页面到手机区域
      var PageComponent = Vue.extend({
        template: htmlContent
      })
      new PageComponent().$mount('#mount-point-index')
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>

</style>
