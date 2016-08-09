<template>
    <Navbar></Navbar>
    <div class="row">
        <table class="table">
            <thead>
            <tr>
                <th>标题</th>
                <th width="20%">发布时间</th>
                <th width="10%">作者</th>
                <th width="10%">回复数</th>
                <th width="10%">访问数</th>
            </tr>
            </thead>
            <tbody>
            <tr v-show="!tabelEmpty" v-for="item in dataList">
                <td>{{item.title}}</td>
                <td>{{item.create_at}}</td>
                <td>{{item.author.loginname}}</td>
                <td>{{item.reply_count}}</td>
                <td>{{item.visit_count}}</td>
            </tr>
            <tr v-show="tabelEmpty" class="empty">
                <td colspan="5">没有匹配的记录</td>
            </tr>
            </tbody>
        </table>
    </div>
    <Pagebar :page-model="pageModel"></Pagebar>
</template>
<script>
    import Navbar from '../components/navbar.vue'
    import Pagebar from '../components/table-pagebar.vue'

    export default {//这里是官方的写法，默认导出，ES6
        components: {
            Navbar,
            Pagebar
        },
        data () {
            return {
                allArticle: "",
                dataList: [],
                pageModel: {
                    url: 'https://cnodejs.org/api/v1/topics',
                    menu: [5, 10, 20]
                },
            }
        },
        computed: {
            tabelEmpty: function () {
                if (this.dataList) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        events: {
            refresh: function (e) {
                this.dataList = e;
            }
        }
    }
</script>
<style>
    body, table {
        font-size: 12px;
    }

    table {
        table-layout: fixed;
        empty-cells: show;
        border-collapse: collapse;
        width: 100%;
        margin: 10px 0;
    }

    td {
        height: 30px;
    }

    div.row {
        margin-left: 15px;
        margin-right: 15px;
    }

    h1, h2, h3 {
        font-size: 12px;
        margin: 0;
        padding: 0;
    }

    .table {
        border: 1px solid #ddd;
        background: #fff;
    }

    .table thead tr {
        background: #eee;
    }

    .table th {
        background-repeat: repeat-x;
        height: 30px;
        text-align: left;
        vertical-align: middle;
    }

    .table tr.empty {
        text-align: center;
    }

    .table td, .table th {
        border: 1px solid #ddd;
        padding: 0 1em 0;
    }

    .table tr:nth-child(odd) td {
        background-color: #f5f5f5;

    }
</style>
