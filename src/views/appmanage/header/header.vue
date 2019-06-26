<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64px" height="64px" src="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">虾米饭店</span>
        </div>
        <div class="description">
         蜂鸟专送
        </div>
        <div class="support">
          <span class="icon decrease"></span>
          <span class="text">在线满28减5，满50减10</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">公告</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .header {
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7, 17, 27, 0.5);
    .content-wrapper {
      position: relative;
      padding: 24px 12px 18px 24px;
      .avatar {
        display: inline-block;
        vertical-align: top;
        img {
          border-radius: 2px; /*角部区域水平和垂直半径都为2px*/
        }
      }
      .content {
        display: inline-block;
        margin-left: 16px;
        .title {
          margin: 2px 0 8px 0;
          .brand {
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            @include bg-image('brand'); /*背景图片设置必须是块元素*/
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .name {
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
        .description {
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support {
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              @include  bg-image('decrease_1');
            }
            &.discount {
              @include  bg-image('discount_1');
            }
            &.guarantee {
              @include bg-image('guarantee_1');
            }
            &.invoice {
              @include bg-image('invoice_1');
            }
            &.special {
              @include bg-image('special_1')
            }
          }
          .text {
            display: inline-block;
            line-height: 12px;
            font-size: 10px;
            vertical-align: top;
          }
        }
      }
    }
  }
</style>
