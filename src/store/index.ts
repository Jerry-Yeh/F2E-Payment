import { createStore } from 'Vuex';

export default createStore({
  state: {
    nowStep: 1,
    finish: false
  },
  getters: {
    finish: (state) => {
      return state.finish;
    }
  },
  actions: {
    // changeStep({ commit }, nextStep) {
    //   commit('changeStep', nextStep);
    // },
  },
  mutations: {
    changeStep(state, nextStep) {
      state.nowStep = nextStep;
    },
    trigFinish(state, status) {
      state.finish = status;
    }
  },
});
