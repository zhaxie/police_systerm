<template>
  <transition
    enter-active-class="animated faster fadeIn"
    leave-active-class="animated faster fadeOut"
  >
    <div class="center-loading" v-if="renderLoading">
      <div class="iconfont loading-loop"></div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      renderLoading: false
    };
  },
  methods: {
    showLoading(options) {
      this.renderLoading = true;
    },
    hideLoading(options) {
      this.renderLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.center-loading {
  position: fixed;
  left: 50%;
  bottom: 10vh;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1000;
}

@keyframes rotate360 {
  from {
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-loop {
  animation: rotate360 2s 0.2s linear infinite;
  color: #3079ec;
  font-size: 1.5rem;
}
</style>