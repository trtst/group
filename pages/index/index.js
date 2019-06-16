const app = getApp();
const util = require('../../utils/util.js');

Page({
    data: {
        calcData: app.globalData.calcData,
        maxH: app.globalData.calcData.mainH,
        title: '私蜜',
        color: 'black',
        back: 'back',
        index: []
    },
    onLoad: function (options) {
        const self = this;
        const { jump } = options;

        self.setData({
            back: jump == 'index' ? 'back' : 'home'
        });


        // 获取焦点图
        const swiper = util.http({
            path: util.urls.swiper
        });

        // 获取商品列表
        const list = util.http({
            path: util.urls.goodsList
        });

        Promise.all([swiper, list])
            .then(result => {
                const d = [];

                result.map((item) => {
                    d.push(item.data.data);
                });

                console.log(d)
                self.setData({
                    index: d
                });
            })
            .catch(e => console.log(e));
    },
    goDetail () {
        
    }
})