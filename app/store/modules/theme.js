const state = {
  themes: {
    pink: {
      DARK: '#C2185B',
      PRIMARY: '#E91E63',
      LIGHT: '#F8BBD0',
      ACCENT: '#FFC107',
      TEXT: '#FFFFFF',
      PRIMARY_TEXT: '#212121',
      SECONDARY_TEXT: '#757575',
      DIVIDER: '#BDBDBD',
      NAME: 'pink'
    },
    red: {
      DARK: '#D32F2F',
      PRIMARY: '#F44336',
      LIGHT: '#FFCDD2',
      ACCENT: '#FFC107',
      TEXT: '#FFFFFF',
      PRIMARY_TEXT: '#212121',
      SECONDARY_TEXT: '#757575',
      DIVIDER: '#BDBDBD',
      NAME: 'red'
    },
    teal: {
      DARK: '#00796B',
      PRIMARY: '#009688',
      LIGHT: '#B2DFDB',
      ACCENT: '#FFC107',
      TEXT: '#FFFFFF',
      PRIMARY_TEXT: '#212121',
      SECONDARY_TEXT: '#757575',
      DIVIDER: '#BDBDBD',
      NAME: 'teal'
    },
    purple: {
      DARK: '#512DA8',
      PRIMARY: '#673AB7',
      LIGHT: '#D1C4E9',
      ACCENT: '#FFC107',
      TEXT: '#FFFFFF',
      PRIMARY_TEXT: '#212121',
      SECONDARY_TEXT: '#757575',
      DIVIDER: '#BDBDBD',
      NAME: 'purple'
    },
    blue: {
      DARK: '#1976D2',
      PRIMARY: '#2196F3',
      LIGHT: '#BBDEFB',
      ACCENT: '#FFC107',
      TEXT: '#FFFFFF',
      PRIMARY_TEXT: '#212121',
      SECONDARY_TEXT: '#757575',
      DIVIDER: '#BDBDBD',
      NAME: 'blue'
    },
    grey: {
      DARK: '#455A64',
      PRIMARY: '#607D8B',
      LIGHT: '#CFD8DC',
      ACCENT: '#FFC107',
      TEXT: '#FFFFFF',
      PRIMARY_TEXT: '#212121',
      SECONDARY_TEXT: '#757575',
      DIVIDER: '#BDBDBD',
      NAME: 'grey'
    },
    orange: {
      DARK: '#E64A19',
      PRIMARY: '#FF5722',
      LIGHT: '#FFCCBC',
      ACCENT: '#FFC107',
      TEXT: '#FFFFFF',
      PRIMARY_TEXT: '#212121',
      SECONDARY_TEXT: '#757575',
      DIVIDER: '#BDBDBD',
      NAME: 'orange'
    }
  },
  active: {
    DARK: '#C2185B',
    PRIMARY: '#E91E63',
    LIGHT: '#F8BBD0',
    ACCENT: '#FFC107',
    TEXT: '#FFFFFF',
    PRIMARY_TEXT: '#212121',
    SECONDARY_TEXT: '#757575',
    DIVIDER: '#BDBDBD',
    NAME: 'pink'
  }
};

const mutations = {
  CHANGE_THEME(state, payload) {
    console.log(payload);

    state.active = state.themes[payload];
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
