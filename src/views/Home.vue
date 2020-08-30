<template>
  <div class="home">
    <!-- 模块：背景 -->
    <div class="position-fixed bg-modules" ref="bgModules">
      <div
        class="position-absolute bg-line"
        v-for="(item, index) in bgLineQuantityObj.x"
        :key="'bgLineQuantityObj.x' + index"
        :style="{top: (index + 1) * 20 + 'px'}"
      ></div>
      <div
        class="position-absolute bg-line yAxis"
        v-for="(item, index) in bgLineQuantityObj.y"
        :key="'bgLineQuantityObj.y' + index"
        :style="{left: (index + 1) * 20 + 'px'}"
      ></div>
    </div>

    <!-- 容器：功能区 -->
    <div class="position-fixed z100 main-container">
      <div class="d-flex flex-column h-100">
        <!-- 模块：顶部的标题栏 -->
        <div class="header-modules">
          <div class="d-flex">
            <div class="cursor-pointer top-btn">您好，欢迎登录！</div>
            <div class="col mx-auto">
              <div class="header-content">
                <div class="position-relative img-box">
                  <imgWithLoading
                    class="position-absolute"
                    :src="require('@/assets/img/home-top-bgModules.png')"
                  ></imgWithLoading>
                  <div class="position-absolute title">武警磐石系统</div>
                </div>
              </div>
            </div>
            <div class="cursor-pointer top-btn">退出登录</div>
          </div>
        </div>

        <!-- 模块：功能入口模块 -->
        <div class="col function-entry-modules">
          <div class="d-flex h-100" style="margin-right: -2vw">
            <div class="col-4" v-for="(item, index) in 3" :key="index">
              <div class="position-relative h-100 entry-item-list">
                <!-- 主背景 -->
                <div class="position-absolute bg"></div>
                <!-- 背景四周的icon -->
                <div class="position-absolute corner-icon top"></div>
                <div class="position-absolute corner-icon bottom"></div>

                <!-- 按钮 -->
                <div class="d-flex flex-column h-100 btn-list">
                  <div
                    class="position-relative cursor-pointer btn-item"
                    v-for="(item, index) in 4"
                    :key="index"
                    @click="$router.push({name: 'map'})"
                  >
                    <!-- 主背景 -->
                    <div class="position-absolute bg"></div>
                    <!-- 背景四周的icon -->
                    <div class="position-absolute corner-icon top"></div>
                    <div class="position-absolute corner-icon bottom"></div>
                    <div class="position-absolute text-over-one btn-text">可视化执勤系统</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bgLineQuantityObj: {
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.renderBgModules();
    },
    renderBgModules() {
      const bgClientRect = this.$refs.bgModules.getBoundingClientRect();
      const xAxisLineQutiy = Math.floor(bgClientRect.height / 20);
      const yAxisLineQutiy = Math.floor(bgClientRect.width / 20);

      this.bgLineQuantityObj.x = xAxisLineQutiy;
      this.bgLineQuantityObj.y = yAxisLineQutiy;

      console.info("bgClientRect", bgClientRect);
    },
  },
};
</script>


<style lang="scss" scoped>
// 模块：背景
.bg-modules {
  z-index: -1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #08171f;

  .bg-line {
    top: 20px;
    left: 0;
    right: 0;
    height: 1px;
    // background-color: blue;
    background-color: #122129;

    &.yAxis {
      top: 0;
      bottom: 0;
      height: initial;
      width: 1px;
    }
  }
}

// 容器：功能区
.main-container {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  // 模块：顶部的标题栏
  .header-modules {
    padding-left: 4.11vw;
    padding-right: 4.11vw;

    .top-btn {
      margin-top: 1.88vh;
      font-size: 0.83vw;
      color: #ffffff;
    }

    .header-content {
      width: 72.81vw;

      .img-box {
        padding-bottom: 33.33%;
      }

      .title {
        left: 50%;
        top: 6%;
        transform: translate3d(-50%, 0, 0);
        font-size: 2.19vw;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }

  // 模块：功能入口模块
  .function-entry-modules {
    margin: -24vh 0 6.35vh;
    padding: 0 3.33vw;

    .entry-item-list {
      margin-right: 2vw;

      // 背景
      .bg {
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(11, 106, 6, 0.31);
        border: solid 0.05vw rgba(42, 255, 0, 0.25);
        opacity: 0.2;
      }

      //四周的icon
      .corner-icon {
        z-index: 100;

        &.top {
          top: 0;
          left: 0;
          right: 0;

          &::before,
          &::after {
            position: absolute;
            content: "";
            display: block;
            width: 0.73vw;
            height: 0.68vw;
            border-top: 2px solid #1daa23;
          }

          &::before {
            left: 0;
            top: 0;
            border-left: 2px solid #1daa23;
          }

          &::after {
            right: 0;
            top: 0;
            border-right: 2px solid #1daa23;
          }
        }

        &.bottom {
          bottom: 0;
          left: 0;
          right: 0;

          &::before,
          &::after {
            position: absolute;
            transform: translate3d(0, -100%, 0);
            content: "";
            display: block;
            width: 0.73vw;
            height: 0.68vw;
            border-bottom: 2px solid #1daa23;
          }

          &::before {
            left: 0;
            top: 0;
            border-left: 2px solid #1daa23;
          }

          &::after {
            right: 0;
            top: 0;
            border-right: 2px solid #1daa23;
          }
        }
      }

      .btn-list {
        padding: 5.7vw 3.5vw;

        .btn-item {
          margin-bottom: 2vw;
          height: 3vw;
          border: solid 0.05vw #138025;
          transition: all 0.2s;

          &:hover {
            transform: scale(1.05);
            background-color: #138025;
          }

          .bg {
            background-color: #283513;
            opacity: 0.8;
          }

          .btn-text {
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0);
            line-height: 1;
            font-size: 1.15vw;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>

