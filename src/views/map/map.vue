<template>
  <div
    class="position-fixed map-modules"
    @mousemove="contentEvt_mouseMove"
    @mouseup="contentEvt_mouseup"
  >
    <!-- 背景图 -->
    <div class="position-fixed map-bg">
      <imgWithLoading :src="require('@/assets/img/map-bg.png')"></imgWithLoading>

      <!-- 指示牌 -->
      <div
        class="position-absolute px-20 cursor-pointer indicator"
        v-for="(item, index) in indicatorList"
        :key="'indicatorList' + index"
        :style="{left: (index + 1) * 10 + '%', top: (index + 1) * 10 + '%'}"
        @click="handleRenderVideoBox"
      >{{item.title + (index + 1)}}</div>
    </div>

    <!-- 模块：头部logo -->
    <div class="d-flex align-items-center header-bar-modules">
      <div class="logo-icon">
        <imgWithLoading :src="require('@/assets/icon/com-logo.png')"></imgWithLoading>
      </div>
      <div class="title">三维可视化学执勤系统</div>
    </div>

    <!-- 模块：侧边的导航栏 -->
    <div class="side-nav-modules">
      <div class="nav-item" v-for="(item, index) in 8" :key="index">
        <imgWithLoading :src="require('@/assets/icon/map-icon-'+ (index + 1) +'.png')"></imgWithLoading>
      </div>
    </div>

    <!-- 模块：视频 -->
    <div
      class="position-fixed video-modules"
      ref="videoModules"
      v-if="videoObj.isRender === true"
      :style="{left: videoObj.position.left + 'px', top: videoObj.position.top + 'px'}"
      @mousedown="controlPositionMethods.onMouseDown"
    >
      <div class="position-relative video-box">
        <!-- 背景图 -->
        <imgWithLoading
          class="position-absolute"
          style="z-index: -1;"
          :src="require('@/assets/img/map-video-bg.png')"
        ></imgWithLoading>

        <!-- 标题栏 -->
        <div class="position-absolute d-flex align-items-center title-bar">
          <div class="col title">标题</div>
          <div
            class="d-flex align-items-center cursor-pointer close-box"
            @click="handleCloseVideoBox"
          >
            <div class="close-icon"></div>
            <div class="close-text">关闭</div>
          </div>
        </div>

        <!-- 视频区 -->
        <div class="position-absolute video-content">
          <div class="position-relative w-100 h-100">
            <!-- <div class="position-absolute play-btn">
              <imgWithLoading :src="require('@/assets/icon/map-icon-video.png')"></imgWithLoading>
            </div>-->
            <div class="position-absolute h-100 w-100">
              <video
                id="videoDom"
                class="w-100 h-100 video-js vjs-default-skin vjs-big-play-centered"
                controls
                autoplay="muted"
                preload="auto"
              >
                <source
                  src="http://citaq.com/public/uploads/20200415/dream_video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from "video.js";
import "video.js/dist/video-js.css";

export default {
  data() {
    return {
      videoObj: {
        isRender: false,
        position: {
          left: 0,
          top: 0,
        },
      },
      controlPositionMethods: null,
      indicatorList: [
        {
          title: "电子监控",
        },
        {
          title: "电子监控",
        },
        {
          title: "电子监控",
        },
        {
          title: "电子监控",
        },
        {
          title: "电子监控",
        },
        {
          title: "电子监控",
        },
      ],
    };
  },
  mounted() {
    this.$video = Video;

    this.controlPositionMethods = this.getControlVideoPositionMethods(); //控制视频定位的方法

    console.info("this.controlPositionMethods", this.controlPositionMethods);
  },
  methods: {
    initVideoPlayer() {
      //初始化视频方法
      return this.$video("#videoDom", {
        controls: true,
        autoplay: "muted",
        preload: "auto",
        width: "800px",
        height: "400px",
      });
    },

    //获取控制视频的方法
    getControlVideoPositionMethods() {
      let currentVideoRectObj;
      let mousePointerKeepVideoRectPositionObj; //鼠标指针和视频边界的距离

      let controlMethods = {
        onMouseDown: ($event) => {
          this.currentModel = "moveVideoPosition";

          this.$nextTick(() => {
            //获取视频模块的边界信息
            currentVideoRectObj = this.getVideoModulesBoundingRect();

            //记录鼠标点击的坐标跟视频播放器左上角右上角的距离
            mousePointerKeepVideoRectPositionObj = {
              left: $event.pageX - currentVideoRectObj.left,
              top: $event.pageY - currentVideoRectObj.top,
            };

            // 播放视频
            const myPlayer = this.myPlayer;

            if (myPlayer) {
              myPlayer.src([
                {
                  type: "application/x-mpegURL",
                  src:
                    "http://citaq.com/public/uploads/20200415/dream_video.mp4",
                },
              ]);
            } else {
              this.myPlayer = this.initVideoPlayer(); //初始化视频播放器
            }
          });
        },
        onMouseMove: ($event) => {
          this.videoObj.position = {
            left: $event.pageX - mousePointerKeepVideoRectPositionObj.left,
            top: $event.pageY - mousePointerKeepVideoRectPositionObj.top,
          };
        },
        onMouseUp: ($event) => {
          this.currentModel = null;
        },
      };

      return controlMethods;
    },

    //获取视频的dom位置信息
    getVideoModulesBoundingRect() {
      return this.$refs.videoModules.getBoundingClientRect();
    },

    //渲染视频
    handleRenderVideoBox() {
      this.videoObj.isRender = true;
    },

    //关闭视频
    handleCloseVideoBox() {
      this.videoObj.isRender = false;
    },

    //鼠标移动
    contentEvt_mouseMove($event) {
      const currentModel = this.currentModel;

      console.info("currentModel", currentModel);
      console.info("$event", $event);

      if (!currentModel) {
        return false;
      }

      this.controlPositionMethods.onMouseMove($event);
    },

    //鼠标抬起
    contentEvt_mouseup($event) {
      const currentModel = this.currentModel;

      console.info("$event", $event);

      if (!currentModel) {
        return false;
      }

      this.controlPositionMethods.onMouseUp($event);
    },
  },
};
</script>

<style lang="scss" scoped>
.map-modules {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  -webkit-user-select: none;

  //   background: url("~@/assets/img/map-bg.png");
  //   background-size: cover;
  //   background-position: 50% 50%;

  // 地图背景
  .map-bg {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    .indicator {
      left: 50%;
      top: 50%;
      line-height: 2.5vw;
      //   transform: rotate3d(1, 1, -1, 45deg);
      transform: rotate3d(1, 1, 1, -45deg);
      background: linear-gradient(90deg, #97f913 0%, #d2b02f 100%);
      font-weight: bold;
      font-size: 0.94vw;
      color: #1111c4;

      &::before {
        position: absolute;
        left: 0;
        top: 0;
        transform: translate3d(0, -50%, 0);
        content: "";
        display: block;
        height: 50%;
        width: 4px;
        background-color: #97f913;
      }

      &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate3d(0, 50%, 0);
        content: "";
        display: block;
        height: 50%;
        width: 4px;
        background-color: #d2b02f;
      }
    }
  }
}

//模块：头部logo
.header-bar-modules {
  margin-top: 0.84vw;
  margin-left: 1.25vw;

  .logo-icon {
    width: 3.23vw;
    height: 2.66vw;
  }

  .title {
    line-height: 2.66vw;
    font-size: 1.5vw;
    color: #ffffff;
  }
}

// 模块：侧边的导航栏
.side-nav-modules {
  margin-left: 1.4vw;
  margin-top: 1.5vw;

  .nav-item {
    margin-bottom: 1.15vw;
    width: 3.13vw;
    height: 3.13vw;
    background-color: #1e1813;
    border: solid 0.05vw #bbd2b5;
    border-radius: 50%;
  }
}

// 模块：视频
.video-modules {
  left: 50%;
  top: 50%;
  //   transform: translate3d(-50%, -50%, 0);
  width: 52.92vw;

  .video-box {
    padding-bottom: 54.7%;
    background-color: rgba(
      0,
      0,
      0,
      0
    ); //必须给个透明背景，用于防止点透导致拖拽的时候出现异常（背景图被拖拽，很丑）
  }

  // 标题栏
  .title-bar {
    left: 15.2vw;
    right: 10.53vw;
    height: 27%;

    .title {
      font-weight: bold;
      font-size: 1.25vw;
      color: #c0f7f1;
    }

    .close-box {
      .close-icon {
        width: 20px;
        height: 20px;
        transform: rotate(45deg);

        &::before,
        &::after {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          margin: auto;
          display: block;
          content: "";
          width: 50%;
          height: 1px;
          background-color: #ffffff;
        }
        &::after {
          transform: rotate(90deg);
        }
      }

      .close-text {
        font-size: 0.73vw;
        color: #ffffff;
      }
    }
  }

  //视频区
  .video-content {
    left: 13vw;
    top: 25%;
    right: 12vw;
    bottom: 15%;

    .play-btn {
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 3.96vw;
      height: 3.49vw;
    }

    .video-palyer {
    }
  }
}
</style>