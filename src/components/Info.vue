<template>
  <div class="relative">
    <div
      class="
        relative
        p-6
        text-left
        tracking-widest
        bg-gray-100
        rounded-l-lg
        mb-6
      "
      :class="{ 'info--finish': finish }"
    >
      <h5 class="text-lg font-semibold mb-3">
        訂單資訊
      </h5>
      <h6 class="text-gray-400">
        商品名稱 :
      </h6>
      <p class="mb-4">
        Iphone XR手機殼 x1
      </p>
      <h6 class="text-gray-400">
        訂單編號 :
      </h6>
      <p class="mb-4">
        17485739
      </p>
      <h6 class="text-gray-400">
        訂單金額 :
      </h6>
      <p class="mb-4">
        NT$ 600
      </p>
    </div>
    <button v-if="!finish" class="btn bg-gray-700 text-white text-sm">
      返回商店
    </button>
    <div v-if="finish" class="text-xl finish absolute tracking-widest">
      Finish
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

let finish = computed(() => store.getters.finish);

watchEffect(() => {
  switch (router.currentRoute.value.path) {
  case '/finish':
  case '/shopFinish':
    store.commit('trigFinish', true);
    break;
  }
});
</script>

<style lang="scss">
.info {
  transition: 0.5s;
  &--finish {
    left: 210px;
    z-index: -1;
  }
}
.finish {
  top: 100px;
  right: 60px;
  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 55px;
    width: 15px;
    border-bottom: 2px solid black;
  }
  &::before {
    top: -16px;
    transform: rotate(45deg);
  }
  &::after {
    bottom: -30px;
    transform: rotate(-45deg);
  }
}
</style>
