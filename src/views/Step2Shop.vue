<template>
  <Title class="mb-2" :title="title" />
  <div class="flex justify-center text-xs tracking-widest mb-10">
    超商付款
  </div>
  <form @submit.prevent="checkForm">
    <h6 class="text-sm tracking-wider mb-2">
      付款超商 :
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
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Title from '@/components/Title.vue';

const router = useRouter();

const title = ref('STEP2. 填寫付款資訊');
const bankArr = reactive(['全家便利商店', '7-11', '萊爾富']);

onMounted(() => {});

const checkForm = () => {
  // Step2 -> Step3
  router.push('/Shopfinish');
};
</script>

<style lang="scss"></style>
