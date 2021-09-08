<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <div class="flex justify-center relative">
      <Info class="info mt-30" />
      <div class="step flex flex-col items-center bg-white">
        <Step :now-step="nowStep" />
        <div class="step__content shadow w-full pt-9 px-14">
          <router-view />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue';
import './assets/scss/all.scss';
import { computed } from 'vue';
import { useStore } from 'vuex';
import Step from './components/Step.vue';
import Info from './components/Info.vue';
import Footer from './components/Footer.vue';

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

const store = useStore();

const nowStep = computed(() => store.state.nowStep);
</script>

<style lang="scss">
@font-face {
  font-family: Noto-Sans;
  src: url('./assets/font/NotoSansCJKtc-DemiLight.otf');
}

#app {
  font-family: Noto-Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.info {
  width: 234px;
}

.step {
  width: 628px;
  &__content {
    height: calc(100vh - 120px);
  }
}
</style>
