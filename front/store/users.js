export const state = () => ({ //state 만 함수고 나머진 객체
  me: null,
});

export const mutations = { // 동기 작업
  setMe(state, payload) { //state는 위 state에 접근, payload는 state를 변경할때
    state.me = payload;
  }
};

export const actions = { // 비동기 작업
  // context = { commit, dispatch, state, rootState, getters, rootGetters }
  // commit - mutations, dispatch - actions
  signUp({ commit }, payload) {
    commit('setMe', payload)
  },
  logIn({ commit }, payload) {
    commit('setMe', payload)
  },
  logOut({ commit }, payload) {
    commit('setMe', null)
  },
}
