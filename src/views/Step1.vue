<template>
  <Title class="mb-20" :title="title" />
  <div class="flex flex-wrap justify-center mb-11">
    <div
      v-for="(item, i) in itemsInfo"
      :key="item.text"
      class="item flex flex-col items-center pt-8 pb-6"
      :class="{
        'mb-5': i <= 2,
        'ml-4': (i + 1) % 3 !== 1,
        'bg-primary-dark': payment === item.type,
        'text-white': payment === item.type,
      }"
      @click="changePayment(item)"
    >
      <component
        :is="item.img"
        class="item__img mb-3"
        :class="{ 'item__img--active': payment === item.type }"
      />
      <span class="text-sm">{{ item.text }}</span>
    </div>
  </div>
  <div class="flex justify-end">
    <button class="btn text-sm bg-primary-dark text-white" @click="nextStep">
      下一步
    </button>
  </div>
</template>

<script setup>
import { ref, shallowRef, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Title from '@/components/Title.vue';
import CreditCard from '@/components/svg/CreditCard.vue';
import Unionpay from '@/components/svg/Unionpay.vue';
import Shop from '@/components/svg/Shop.vue';
import WebAtm from '@/components/svg/WebAtm.vue';
import Atm from '@/components/svg/Atm.vue';

const router = useRouter();
const store = useStore();

const title = ref('STEP1. 選擇付款方式');
const itemsInfo = shallowRef([
  {
    type: 'creditCard',
    img: CreditCard,
    text: '信用卡/金融卡',
    route: 'creditCard',
  },
  {
    type: 'unionpay',
    img: Unionpay,
    text: '銀聯卡',
    route: 'creditCard',
  },
  {
    type: 'shop',
    img: Shop,
    text: '超商付款',
    route: 'shop',
  },
  {
    type: 'webAtm',
    img: WebAtm,
    text: 'Web ATM',
    route: 'webAtm',
  },
  {
    type: 'atm',
    img: Atm,
    text: 'ATM 轉帳',
    route: 'webAtm',
  },
]);

let payment = ref('');
let nextRoute = ref('');

onMounted(() => {
  store.commit('changeStep', 1);
  store.commit('trigFinish', false);
});

const changePayment = (item) => {
  payment.value = item.type;
  nextRoute.value = item.route;
};

const nextStep = () => {
  // Step1 -> Step2
  router.push(`/${nextRoute.value}`);
};
</script>

<style lang="scss">
.main {
  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.08);
}

.item {
  flex: 0 0 30%;
  background: #f7f7f7;
  border-radius: 5px;
  transition: 0.3s;
  &__img {
    min-width: 60px;
    height: 60px;
    fill: #4b4b4b;
    transition: 0.3s;
    &--active {
      fill: white;
    }
  }
  &:hover {
    cursor: pointer;
    background: #36b996;
    color: white;
    svg {
      fill: white;
    }
  }
}
</style>
