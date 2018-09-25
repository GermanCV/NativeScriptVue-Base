import axios from '../../plugins/axios';

const state = {
  count: 0
};

const mutations = {
  decrement(state) {
    state.count--;
  },
  increment(state) {
    state.count++;
  }
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  login: ({ commit }) => {
    axios
      .post('auth/login', {
        username: 'germancv',
        password: 'germancv'
      })
      .then(function(response) {
        //commit('LOGIN', response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default {
  state,
  mutations,
  actions
};
