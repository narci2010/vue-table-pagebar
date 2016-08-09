import index from './view/app.vue';

export default function (router) {
    router.map({
        '/index':{//访问地址
            name:'index',//定义路由的名字。方便使用。
            component:index,//引用的组件名称，对应上面使用`import`导入的组件
        }
    })
}