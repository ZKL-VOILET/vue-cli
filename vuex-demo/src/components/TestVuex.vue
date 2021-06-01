<template>
    <div>
        <h2>组件内容</h2>
        <h2>{{$store.state.a.name}}</h2>
        <h2>{{$store.state.info}}</h2>
        <h3>{{$store.state.counter}}</h3>
        <h3>{{$store.getters.powerCounter}}</h3>
        <h3>{{$store.getters.over23peo}}</h3>
        <h3>{{$store.getters.over23peoLength}}</h3>
        <h3>{{$store.getters.overAgePeo(20)}}</h3>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>