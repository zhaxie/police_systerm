const selfGlobalComponents = {
    install: function (Vue) {
        Vue.component('imgWithLoading', require('@/components/common/imgWithLoading.vue').default);
    }
}

export default selfGlobalComponents;

