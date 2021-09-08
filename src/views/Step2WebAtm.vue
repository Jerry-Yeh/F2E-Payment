<template>
  <Title class="mb-2" :title="title" />
  <div class="flex justify-center text-xs tracking-widest mb-10">
    WWeb ATM
  </div>
  <form @submit.prevent="checkForm">
    <h6 class="text-sm tracking-wider mb-2">
      付款銀行 :
    </h6>
    <input
      list="bankList"
      placeholder="選擇"
      class="form-control form-control-sm w-50 mb-7"
      required
    >
    <datalist id="bankList">
      <option
        v-for="b in bankArr"
        :key="b"
        :value="b"
      />
    </datalist>
    <div class="flex text-sm tracking-widest mb-2">
      <p>1.&nbsp;</p>
      <p>
        請準備晶片經融卡 + 晶片讀卡機，我們將引導您至指定金融機構 \u2028
        之網路ATM進行交易手續。
      </p>
    </div>
    <div class="flex text-sm tracking-widest mb-8">
      <p>1.&nbsp;</p>
      <p>
        2. 持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發 \u2028
        行之金融卡，可自由選擇其一金融機構進行後續交易流程
      </p>
    </div>

    <h6 class="text-sm tracking-wider mb-2">
      填寫付款人信箱 :
    </h6>
    <input
      type="email"
      class="form-control form-control-sm w-50 mb-7"
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
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Title from '@/components/Title.vue';

const router = useRouter();

const title = ref('STEP2. 填寫付款資訊');
const bankArr = reactive(['中國信託', '永豐銀行', '台灣銀行']);

const checkForm = () => {
  // Step2 -> Step3
  router.push('/finish');
};
</script>

<style lang="scss"></style>
