<template>
    <div>
        <h2>我是用户组件，我是一个动态路由</h2>
        <p>我是用户的相关信息</p>
        <!--$toute获取当前活跃路由-->
        <h2>{{$route.params.userId}}</h2>
    </div>
</template>

<script>
export default {
  // 可以用watch监控用户ID的变化
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    },
  },
};
</script>