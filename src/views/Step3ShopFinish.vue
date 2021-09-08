<template>
  <Title class="mb-16" :title="title" />
  <h6 class="text-sm track-wider mb-1">
    付款超商 :
  </h6>
  <p class="text-2xl tracking-widest mb-8">
    全家便利商店
  </p>
  <h6 class="text-sm track-wider mb-1">
    付款代碼 :
  </h6>
  <p class="text-2xl tracking-widest mb-8">
    HSD6DSK2349
  </p>
  <h6 class="text-sm track-wider mb-1">
    付款期限 :
  </h6>
  <p class="text-2xl tracking-widest mb-8">
    2019-08-08 23:59:59
  </p>
  <p class="text-sm tracking-wider mb-16">
    * 請至您選擇之超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。
  </p>
  <div class="flex justify-end">
    <button class="btn bg-primary-dark text-white" @click="router.push('/')">
      返回首頁
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Title from '@/components/Title.vue';

const store = useStore();
const router = useRouter();

const title = ref('您的訂單已成立 !');

onMounted(() => {
  store.commit('changeStep', 3);
});
</script>

<style lang="scss"></style>
