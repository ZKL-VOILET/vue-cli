<template>
    <div>
        <router-view></router-view>
        <main-tabbar></main-tabbar>
    </div>
</template>

<script>
import MainTabbar from 'components/mainTabbar/MainTabbar.vue';
export default {
  name: 'App',
  components: {
    MainTabbar
  },
};
</script>