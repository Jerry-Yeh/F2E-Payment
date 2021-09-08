<template>
  <Title class="mb-2" :title="title" />
  <div class="flex justify-center text-xs tracking-widest mb-6">
    信用卡/金融卡
  </div>
  <form @submit.prevent="checkForm">
    <div class="form-check form-check-inline mr-10">
      <input
        id="inlineRadio1"
        v-model="paymentOption"
        class="form-check-input"
        type="radio"
        name="paymentOption"
        value="payOff"
      >
      <label class="form-check-label" for="inlineRadio1">一次付款</label>
    </div>
    <div class="form-check form-check-inline mb-3">
      <input
        id="inlineRadio2"
        v-model="paymentOption"
        class="form-check-input"
        type="radio"
        name="paymentOption"
        value="installment"
      >
      <label class="form-check-label" for="inlineRadio2">分期付款</label>
    </div>
    <h6 class="text-sm tracking-wider mb-2">
      信用卡號 :
    </h6>
    <div class="flex items-center mb-4">
      <div
        v-for="(number, i) in cardNumber"
        :key="i"
        class="flex"
      >
        <input
          v-model="number.num"
          type="text"
          class="form-control form-control-sm credit__input"
          :class="{ 'mr-7': i !== cardNumber.length - 1 }"
          pattern="^[0-9]*$"
          minlength="4"
          maxlength="4"
          required
        >
        <div v-if="i !== cardNumber.length - 1" class="credit__dash" />
      </div>
      <div class="flex ml-auto">
        <img src="../assets/img/visa.svg" class="credit__img">
        <img src="../assets/img/mastercard.svg" class="credit__img">
        <img src="../assets/img/jcb.svg" class="credit__img">
      </div>
    </div>
    <h6 class="text-sm tracking-wider mb-2">
      有效年月 :
    </h6>
    <div class="flex items-center mb-4">
      <input
        id="month"
        class="form-control form-control-sm period__input"
        list="monthList"
        placeholder="選擇"
        required
      >
      <datalist id="monthList">
        <option
          v-for="m in monthArr"
          :key="m"
          :value="m"
        />
      </datalist>
      <div class="mx-2.5">
        /
      </div>
      <input
        id="year"
        class="form-control form-control-sm period__input"
        list="yearList"
        placeholder="選擇"
        required
      >
      <datalist id="yearList">
        <option
          v-for="y in yearArr"
          :key="y"
          :value="y"
        />
      </datalist>
      <div class="mx-2.5">
        年
      </div>
    </div>
    <h6 class="text-sm tracking-wider mb-2">
      背面末三碼
    </h6>
    <div class="flex mb-4">
      <input
        type="text"
        class="form-control form-control-sm endnumber__input mr-3"
        pattern="^[0-9]*$"
        minlength="3"
        maxlength="3"
        required
      >
      <img class="endnumber__img" src="../assets/img/back-three.svg">
    </div>
    <h6 class="text-sm tracking-wider mb-2">
      填寫付款人信箱 :
    </h6>
    <input
      type="email"
      class="form-control form-control-sm email__input mb-4"
      required
    >
    <div class="form-check text-sm tracking-widest mb-7">
      <input
        id="flexCheckDefault"
        class="form-check-input"
        type="checkbox"
        :value="check"
        required
      >
      <label class="form-check-label mb-1" for="flexCheckDefault">
        請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的
        E-mail 信箱
      </label>
      <p class="text-secondary">
        第三方支付金流平台服務條款
      </p>
    </div>
    <div class="flex justify-between">
      <button class="btn bg-primary-light" @click="router.push('/')">
        回上一步
      </button>
      <button type="submit" class="btn bg-primary-dark text-white">
        確認付款
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Title from '@/components/Title.vue';
// import Button from '@/components/Button.vue';
// import Visa from '@/components/svg/Visa.vue';
// import Mastercard from '@/components/svg/Mastercard.vue';
// import Jcb from '@/components/svg/Jcb.vue';

const store = useStore();
const router = useRouter();

const title = ref('STEP2. 填寫付款資訊');
const paymentOption = ref('payOff');
// const creditCards = reactive([Visa, Mastercard, Jcb]);
const cardNumber = reactive([
  { num: '' },
  { num: '' },
  { num: '' },
  { num: '' },
]);
const monthArr = reactive([]);
const yearArr = reactive([]);
const check = ref < Boolean > false;

onMounted(() => {
  store.commit('changeStep', 2);
  initMonthArr();
  initYearArr();
});

const initMonthArr = () => {
  for (let m = 1; m <= 12; m++) {
    monthArr.push(m < 10 ? `0${m}` : `${m}`);
  }
};

const initYearArr = () => {
  const nowYear = new Date().getFullYear() % 100;
  for (let y = nowYear; y < nowYear + 10; y++) {
    yearArr.push(`${y}`);
  }
};

const checkForm = () => {
  // Step2 -> Step3
  router.push('/finish');
};
</script>

<style lang="scss">
.credit {
  &__input {
    width: 60px;
  }
  &__dash {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      right: 9px;
      content: '';
      width: 10px;
      border-bottom: 1px solid black;
    }
  }
  &__img {
    width: 40px;
  }
}
.period {
  &__input {
    width: 90px;
  }
}
.endnumber {
  &__input {
    width: 90px;
  }
  &__img {
    width: 35px;
  }
}
.email {
  &__input {
    width: 235px;
  }
}
</style>
