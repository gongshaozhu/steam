// 请求前缀url
// const baseURL = process.env.NODE_ENV === 'development' ? 'http://game-rent-api.fat.springdance.cn/' : ''

/*
* path: 请求路径
* method: 请求方法 默认get
* data: 请求参数 默认为空
* */
export default function requests(path, method = "GET", data = {}) {
    // method = method.toUpperCase();
    // 默认请求头
    let requestHeader = {
        headers: {
            'content-type': 'application/json'
        },
        method
    };
    console.log(requestHeader, data)
    // 如果是get请求
    if (method === "GET") {
        // 转换拼接get参数
        // let esc = encodeURIComponent;
        // let queryParams = Object.keys(data)
        //     .map(k => `${esc(k)}=${esc(data[k])}`)
        //     .join('&');
        // if(queryParams) path += `?${queryParams}`;
    } else {
        // 其他请求 放入body里面
        // requestHeader.body = JSON.stringify(data)
    }
    // 可以在这封装一个回调函数，请求拦截
    // 发送请求并返回 promise 对象 注意 fetch不会拦截其他异常请求️
    // return fetch(`${baseURL}${path}`, requestHeader).then(
    //     // 可在这里封装 响应拦截函数
    //     response => response.json()
    // )
}
