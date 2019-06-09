import Vue from 'vue';

export function login ({ commit }, user) {
  return Vue.prototype.$axios.post(`login`, user)
}

export function register ({ commit }, user) {
  return Vue.prototype.$axios.post(`register`, user)
}
