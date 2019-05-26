/* eslint no-param-reassign: 0 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
    result: [],
    prize: 0,
    totalSteps: 5,
    isDialog: false,
  },
  getters: {
    isFinal: state => state.step === state.totalSteps,
    isDisabled: state => state.result[state.step] === undefined,
    progress: (state, getters) => {
      if (getters.isFinal) {
        return 98;
      }
      return Math.round(state.step * 100 / state.totalSteps);
    },
  },
  mutations: {
    toggleDialog: (state) => { state.isDialog = !state.isDialog; },
    nextStep: (state) => { state.step += 1; },
    prevStep: (state) => { state.step -= 1; },
    setPrize: (state, sum) => { state.prize = sum; },
    setResult: (state, res) => {
      state.result.splice(state.step, 1, res);
    },
  },
  actions: {
    next({ commit, getters }) {
      return new Promise((resolve, reject) => {
        if (!getters.isFinal) {
          commit('nextStep');
          resolve();
        }
        reject();
      });
    },
    prev({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.step > 0) {
          commit('prevStep');
          resolve();
        }
        reject();
      });
    },
    answer({ commit }, { variant, sum }) {
      return new Promise((resolve) => {
        commit('setResult', variant);
        commit('setPrize', sum);
        resolve();
      });
    },
  },
});
