<template>
    <div>
      <transition enter-active-class="fadeInRight" leave-active-class="fadeOutRight">
        <div v-show="detailShow" class="detail animated">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="name">粥品香坊(大运村)</h1>
              <div class="star-wrapper">
                <star :size="48" :score="2"></star>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul class="supports">
                <li v-for="(value,index) in [1,2,3,4,5]" :key="index" class="support-item">
                  <span class="icon decrease"></span>
                  <span class="text">在线满28减{{5 + index}}, 满50减10</span>
                </li>
              </ul>
              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="bulletin">
                <p class="content">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
              </div>
            </div>
          </div>
          <div class="detail-close" @click="hideDetail">
            <svg-icon icon-class="user1" />
          </div>
        </div>
      </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          detailShow: true
        }
      },
      mounted() {
        this.$bus.$on('on-showDetail', (isdetailShow) => {
          this.detailShow = isdetailShow
        })
      },
      methods: {
        hideDetail() {
          this.detailShow = false
        }
      }
    }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 100;
    color: #fff;
    transition: all 0.5s;
    background: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px);
    .detail-wrapper {
      width: 100%;
      min-height: 100%;
      .detail-main {
        margin-top: 64px;
        padding-bottom: 64px;
        .name {
          line-height: 16px;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
        }
        .star-wrapper {
          margin-top: 18px;
          padding: 2px 0;
          text-align: center;
        }
        .title {
          display: flex;
          width: 80%;
          margin: 28px auto 24px auto;
          .line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
          .text {
            padding: 0 12px;
            font-weight: 700;
            font-size: 14px;
          }
        }
        .supports {
          width: 80%;
          margin: 0 auto;
          .support-item {
            padding: 0 12px;
            margin-bottom: 12px;
            font-size: 0;
            &:last-child {
              margin-bottom: 0;
            }
            .icon {
              display: inline-block;
              width: 16px;
              height: 16px;
              vertical-align: top;
              margin-right: 6px;
              background-size: 16px 16px;
              background-repeat: no-repeat;
              &.decrease {
                @include  bg-image('decrease_2')
              }
            }
            .text {
              line-height: 16px;
              color: #fff;
              font-size: 12px;
            }
          }
        }
        .bulletin {
          width: 80%;
          margin: 0 auto;
          .content {
            padding: 0 12px;
            line-height: 24px;
            font-size: 12px;
          }
        }
      }
    }
    .detail-close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
    }
  }
  .detail::-webkit-scrollbar { width: 0 !important }
</style>
