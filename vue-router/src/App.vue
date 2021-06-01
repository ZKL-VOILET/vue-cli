<template>
    <div id="nav">
        <!--router的全局组件，最终渲染成<a>标签-->
        <!--tag\replace属性无效？？-->
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <button @click="aboutClick">About</button> |
        <router-link :to="'/user/' +  userId">User</router-link> |
        <!-- <router-link :to="{name: 'User', params: {userId}}">User</router-link> 可以使用name属性和params来使用动态路由-->
        <!--如果想用button来跳转，同样使用this.$router.push({path: '/profile', query: {name: 'zkl', age: 23, height: 173.5}})-->
        <router-link :to="{path: '/profile', query: {name: 'zkl', age: 23, height: 173.5}}">Profile</router-link>
        <div id="app">
            <!--router-view决定router映射的组件显示位置，这里就是home、about下方-->
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zkl',
    };
  },
  methods: {
    aboutClick() {
      // this.$router获取路由对象
      this.$router.push('/about');
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.active {
  color: #42b983;
}
</style>
