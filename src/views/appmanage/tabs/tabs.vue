<template>
    <div>
      <div class="tab border-1px">
        <div class="tab-item">
          <span @click="getComponentView('goods')">商品</span>
        </div>
        <div class="tab-item">
          <span @click="getComponentView('ratings')">评论</span>
        </div>
        <div class="tab-item">
          <span @click="getComponentView('seller')">商家</span>
        </div>
      </div>
      <component :is="componentView"></component>
    </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/views/appmanage/header/header'
  import goods from '@/views/appmanage/goods/goods'
  import seller from '@/views/appmanage/seller/seller'
  import ratings from '@/views/appmanage/ratings/ratings'
  export default {
    name: 'App',
    components: {
      'v-header': header,
      'goods': goods,
      'seller': seller,
      'ratings': ratings
    },
    data() {
      return {
        componentView: 'goods'
      }
    },
    methods: {
      getComponentView(name) {
        this.componentView = name
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include border-1px(rgba(7, 17, 27, 0.1));
    .tab-item {
      flex: 1;
      text-align: center;
      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
</style>
