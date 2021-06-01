# tabbar

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 知识点回顾
1、动态渲染活跃路由的图标，通过计算属性来判断活跃路由；
2、动态绑定活跃路由的文字颜色，v-bind绑定style。通过props从父组件传回自定义颜色，允许他人修改每个item的字体颜色
