// swiper 额外组件配置
import SwiperCore, {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCards
} from 'swiper'

import 'swiper/css/bundle'

// swiper 必备组件
import { Swiper, SwiperSlide } from 'swiper/vue'

// 使用额外组件
SwiperCore.use([
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCards
])

// 全局注册 swiper 必备组件
const plugins = [Swiper, SwiperSlide]

const swiper = {
  install: function (app) {
    plugins.forEach((item) => {
      app.component(item.name, item)
    })
  }
}

export default swiper
