<template>
    <div>
        <tab-bar id="tabbar">
            <tab-bar-item path="/home"
                activeColor="red">
                <template v-slot:item-icon>
                    <img src="@/assets/img/tabbar/home.svg"
                        alt="home">
                </template>
                <template v-slot:item-icon-active>
                    <img src="@/assets/img/tabbar/activehome.svg"
                        alt="home">
                </template>
                <template #item-text>
                    <div>首页</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/category"
                activeColor="orange">
                <template v-slot:item-icon>
                    <img src="@/assets/img/tabbar/fenlei.svg"
                        alt="fenlei">
                </template>
                <template v-slot:item-icon-active>
                    <img src="@/assets/img/tabbar/activefenlei.svg"
                        alt="fenlei">
                </template>
                <template #item-text>
                    <div>分类</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/cart"
                activeColor="blue">
                <template v-slot:item-icon>
                    <img src="@/assets/img/tabbar/gouwuche.svg"
                        alt="gouwuche">
                </template>
                <template v-slot:item-icon-active>
                    <img src="@/assets/img/tabbar/acgouwuche.svg"
                        alt="gouwuche">
                </template>
                <template #item-text>
                    <div>购物车</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/profile"
                activeColor="orange">
                <template v-slot:item-icon>
                    <img src="@/assets/img/tabbar/wode.svg"
                        alt="wode">
                </template>
                <template v-slot:item-icon-active>
                    <img src="@/assets/img/tabbar/activewode.svg"
                        alt="wode">
                </template>
                <template #item-text>
                    <div>我的</div>
                </template>
            </tab-bar-item>
        </tab-bar>
            
    </div>
</template>

<script>
import Tabbar from 'components/tabbar/TabBar.vue'
import TabBarItem from 'components/tabbar/TabBarItem.vue'
export default {
    name: 'MainTabbar',
    components: {
        Tabbar,
        TabBarItem
    }
}
</script>

<style scoped>
@import '~@/assets/css/base.css';
#tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.08);
}
img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>