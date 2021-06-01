<template>
    <div>
        <h2>我是profile档案</h2>
        <p>用于参数传递,利用query查询属性
            url构成：scheme://host:port path?query#fragment
        </p>
        <p>{{$route.query}}</p>
    </div>
</template>