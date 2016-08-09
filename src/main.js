// 引入vue以及vue-router
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);
// 引入组件！直接使用es6的语法
import routes from './routes'
//开启debug模式
Vue.config.debug = true;
// 路由器需要一个根组件。
var App = Vue.extend({});
// 创建一个路由器实例
var router = new VueRouter({
    history: true,
    saveScrollPosition: true,
    suppressTransitionError: true
});

routes(router);
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*':"/index"//重定向任意未匹配路径到/index
});

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');