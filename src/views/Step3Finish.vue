<template>
  <Title class="mb-20" :title="title" />
  <div class="flex justify-center img mb-16">
    <div class="img__bg" />
    <img class="img__logo" src="../assets/img/finish.svg">
  </div>
  <div class="flex flex-col items-center">
    <p class="text-center tracking-wider text-sm mb-7">
      稍後將寄送訂單詳細資訊至您的E-mail
    </p>
    <button class="btn bg-primary-dark text-white" @click="router.push('/')">
      返回首頁
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Title from '@/components/Title.vue';

const router = useRouter();
const store = useStore();

const title = ref('您的訂單已完成付款 !');

onMounted(() => {
  store.commit('changeStep', 3);
});
</script>

<style lang="scss">
.img {
  height: 146px;
  position: relative;
  &__bg {
    width: 146px;
    height: 146px;
    position: absolute;
    top: 0;
    background-color: #b5ffe4;
    z-index: 1;
    border-radius: 50%;
  }
  &__logo {
    z-index: 2;
  }
}
</style>
