import Sqlite from 'nativescript-sqlite';
const db_promise = new Sqlite('demodb');

const state = {
  list: [],
};

const mutations = {
  ALL_ITEMS: (state, payload) => {
    state.list = payload;
  },
};

const actions = {
  SAVE: ({ dispatch }, payload) => {
    const save = db_promise.then(
      db => {
        db.execSQL(
          'insert into Hello (word,dos) values (?,?)',
          [payload.value1, payload.value2],
          (err, id) => {
            dispatch('ALL_ITEMS');
          }
        );
      },
      err => {
        console.error('We failed to open database', err);
      }
    );
  },

  DELETE: ({ dispatch }) => {
    const response = db_promise.then(
      db => {
        db.execSQL('delete from Hello', (err, res) => {
          dispatch('ALL_ITEMS');
        });
      },
      err => {
        console.error('We failed to open database', err);
      }
    );
  },

  ALL_ITEMS: ({ commit }) => {
    const all = db_promise.then(
      db => {
        db.execSQL('create table Hello (word,dos)', (err, res) => {});
        db.all('select * from Hello', (err, row) => {
          commit('ALL_ITEMS', row);
        });
      },
      err => {
        console.error('We failed to open database', err);
      }
    );
  },
};

export default {
  state,
  mutations,
  actions,
};
