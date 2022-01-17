import { createStore } from 'vuex'
import modules from './modules'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['home']
})

export default createStore({
  modules,
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== 'production'
})
