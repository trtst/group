const domain = 'https://easy-mock.com/mock/5d06493de9774b3002faa898';
const urls = {
    'swiper': '/swiper',
    'goodsList': '/goodsList'
}
const http = (op = {}) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: domain + op.path,
            ...op,
            method: op.method || 'GET',
            success: function (res) {
                resolve(res)
            },
            fail: function (res) {
                reject(res)
            }
        })
    });
}

module.exports = {
  http: http,
  urls: urls,
}
