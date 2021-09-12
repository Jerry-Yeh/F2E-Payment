import { createRouter, createWebHashHistory } from 'vue-router';
import Step1 from '../views/Step1.vue';
import Step2CreditCard from '../views/Step2CreditCard.vue';
import Step2WebAtm from '../views/Step2WebAtm.vue';
import Step2Shop from '../views/Step2Shop.vue';
import Step3Finish from '../views/Step3Finish.vue';
import Step3ShopFinish from '../views/Step3ShopFinish.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Step1,
    },
    {
      path: '/creditCard',
      component: Step2CreditCard,
    },
    {
      path: '/webAtm',
      component: Step2WebAtm,
    },
    {
      path: '/shop',
      component: Step2Shop,
    },
    {
      path: '/finish',
      component: Step3Finish,
    },
    {
      path: '/shopFinish',
      component: Step3ShopFinish,
    },
  ],
});
