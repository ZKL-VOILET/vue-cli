<template>
  <div>
    <test-vuex></test-vuex>
    <button @click="sub">-</button>
    <button @click="$store.commit('increment')">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addPeople({name: 'www', age: 33})">添加人员</button>
    <button @click="$store.commit('updateInfo')">更新info</button>
    <button @click="aUpdate">异步更新</button>
    <button @click="$store.commit('updateName')">module的mutation提交</button>
    <h2>App内容</h2>
    <h3>{{$store.state.counter}}</h3>
    <h3>{{$store.getters.powerCounter}}</h3>
  </div>
</template>

<script>
import TestVuex from './components/TestVuex.vue'
export default {
  name: 'App',
  components: {
    TestVuex
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 参数count被称为mutation的载荷(payload)
      // this.$store.commit('incCount', count)
      this.$store.commit({
        type: 'incCount',
        count
      })
    },
    addPeople(obj) {
      this.$store.commit('addPeople', obj)
    },
    aUpdate() {
      this.$store.dispatch({
        type: 'asyncUpdate',
        message: '异步操作'
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
