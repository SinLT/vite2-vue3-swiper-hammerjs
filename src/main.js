import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import { useElementPlus } from '@/config/elementPlus'
import { VueHammer } from '@/utils/vue3-hammer'
import store from '@/store'
import swiper from '@/utils/swiper'
import App from '@/App.vue'

const vm = createApp(App)
vm.use(store)
vm.use(swiper)
vm.use(VueHammer, {
  threshold: 0
})
useElementPlus(vm)

vm.mount('#app')
