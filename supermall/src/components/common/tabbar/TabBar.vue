<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import TabBarItem from './TabBarItem.vue';
export default {
  components: { TabBarItem },
  name: 'TabBar',
};
</script>

<style scoped>
</style>