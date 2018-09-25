const state = {
  status: false
};

const mutations = {
  LOGIN(state) {
    state.status = true;
  },
  EXIT(state) {
    state.status = false;
  }
};

const actions = {
  increment: ({ commit }) => commit('increment')
};

export default {
  state,
  mutations,
  actions
};
