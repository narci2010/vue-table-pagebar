#vue-code

## 插件名称:table-pagebar
## 插件说明:基于vue的table底部分页插件
## 插件使用说明:
``` bash
# 参数:
    // 初始页
    cur: 1,
    // 请求地址
    url: this.pageModel.url ? this.pageModel.url : "",
    // 请求参数
    param: this.pageModel.param ? this.pageModel.param : {},
    // 请求方法 默认为GET请求
    method: this.pageModel.method ? this.pageModel.method : 'GET',
    // 每页显示数量 默认每页显示10条
    limit: this.pageModel.menu ? this.pageModel.menu[0] : 10,
    // 底部分页基数 默认5
    perSize: this.pageModel.perSize ? this.pageModel.perSize : 5,
    // 每页显示数量 下拉选项
    menu: this.pageModel.menu ? this.pageModel.menu : [5, 10, 50],
    // 分页参数 自定义名称
    pageParamName: this.pageModel.pageParamName ? this.pageModel.pageParamName : ['page', 'limit'],
    // 当前列表显示记录起始数
    start: 0,
    // 当前列表显示记录结束数
    end: 0,
    // 总页数
    totalPage: 0,
    // 记录总数
    totalSize: 0,
    // 分页请求返回数据
    dataList: []

# 使用
    <template>
        <Pagebar :page-model="pageModel"></Pagebar>
    </template>

    <script>
        import Pagebar from '../components/table-pagebar.vue'

        export default {
                components: {
                    Pagebar
                },
                data () {
                    return {
                        dataList: [],
                        pageModel: {
                            url: 'https://cnodejs.org/api/v1/topics',
                            menu: [5, 10, 20]
                        },
                    }
                },
                events: {
                    refresh: function (e) {
                        this.dataList = e;
                    }
                }
            }
    </script>
```

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start
```
