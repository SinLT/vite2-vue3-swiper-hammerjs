<script setup>
import { useStore } from 'vuex'
defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const store = useStore()
const count = $ref(0)
const test = $computed(() => store.state.home.test)
let fontColor = $ref('red')
const onTest = () => {
  store.dispatch('getTest')
  fontColor = 'blue'
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <el-button @click="count++">count is: {{ count }}</el-button>
  <el-button @click="onTest">test is: {{ test }}</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<style lang="scss" scoped>
a {
  color: v-bind('fontColor');
}
p {
  @include font_color($theme-default);
}
</style>
