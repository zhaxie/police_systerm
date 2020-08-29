<template>
  <!-- <img class="imgCover" :src="src" alt="头像" @load="handelImgLoadSucces" @error=""/> -->

  <div class="position-relative imgCover">
    <!-- 加载中 -->
    <div class="d-flex align-items-center justify-content-center loading-img" v-if="isLoadingImg">
      <div class="iconfont icon-loading"></div>
    </div>
    <!-- 加载失败 -->
    <div
      class="d-flex flex-column align-items-center justify-content-center loading-img"
      style="color: #333;"
      v-if="imgLoadError"
    >
      <div class="iconfont icon-load-fail"></div>
    </div>
    <!-- 加载成功 -->
    <img class="imgCover" :src="src" lazy-load="false" @error="onImgLoadError" @load="onImgLoadSuccess" />
    <!-- <image class="imgCover" src="{{'http://img1.imgtn.bdimg.com/it/u=360604041122,205763597211111&fm=26&gp=0.jpg'}}" mode="{{mode}}" lazy-load="false" binderror="onImgLoadError" bindload="onImgLoadSuccess" /> -->
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      isLoadingImg: true,
      imgLoadError: false
    };
  },
  methods: {
    onImgLoadSuccess(e) {
      console.info("onImgLoadSuccess", e);
      // console.info('onImgLoadSuccess', e);
      this.isLoadingImg = false
    },
    onImgLoadError(e) {
      console.info("onImgLoadError", e);
      this.isLoadingImg = false;
      this.imgLoadError = true;
    }
  }
};
</script>

<style lang="scss" scoped>
/* component/imgWithLoading/imgWithLoading.wxss */

@keyframes rotate360 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.icon-loading {
  animation: rotate360 2s 0.2s linear infinite;
}

.loading-img {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* background-color: ; */
}
</style>