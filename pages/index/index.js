const app = getApp();
const util = require('../../utils/util.js');

Page({
    data: {
        calcData: app.globalData.calcData,
        maxH: app.globalData.calcData.mainH,
        title: '私蜜',
        color: 'black',
        back: 'back',
        index: [],
        cartNum: 0
    },
    onLoad: function (options) {
        const self = this;
        const { jump } = options;

        self.setData({
            back: jump == 'index' ? 'back' : 'home'
        });

        app.calc(wx.getSystemInfoSync());
        self.setData({
            maxH: app.globalData.calcData.mainH - 80 / 2
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

                self.setData({
                    index: d
                });
            })
            .catch(e => console.log(e));
    },
    goDetail(event) {
        const { id } = event.currentTarget;

        wx.navigateTo({
            url: '/pages/subpage/detail/detail?id=1'
        })
    },
    addGoods(event) {
        const self = this;
        const { id } = event.currentTarget;
        let { cartNum } = self.data;

        cartNum++
        self.setData({
            cartNum: cartNum
        });
        wx.setTabBarBadge({
            index: 1,
            text: cartNum + ''
        })
        console.log(cartNum);
    }
})