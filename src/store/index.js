import Vue from 'vue'
import Vuex from 'vuex'
import { VuexPersistence } from 'vuex-persist'
import localforage from 'localforage'

import auth from './Auth'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: localforage,
  key: 'pwa_news_app'
})

export default function () {
  const Store = new Vuex.Store({
    modules: {
      auth
    },

    plugins: [vuexLocal.plugin],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
