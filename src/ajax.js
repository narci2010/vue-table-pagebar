import Vue from 'vue'

module.exports = (params) => {
    Vue.http.options.crossOrigin = true
    Vue.http.options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
    }
    // Vue.http.options.xhr = {
    //   withCredentials: true
    // }
    Vue.http.options.emulateJSON = true;

    if (params.method && params.method == 'GET') {
        if (params.data) {
            var param = '';
            var obj = eval(params.data);
            for (var item in obj) {
                param += item + '=' + obj[item] + '&';
            }
            if (param && param.length > 0) {
                param = param.substr(0, param.length - 1);
            }
            params.url = params.url + "?" + param;
        }
    }

    Vue.http({
        url: params.url,
        method: params.method,
        data: params.data || {}
    }).then((response) => {
        let data = response.data
        params.callback(data)
    }, (response) => {
        // error callback
    })
}
