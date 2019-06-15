// pages/mall/mall.js
const app = getApp();

Page({
    data: {
        mainH: app.globalData.calcData.mainH - 100 / 2,
        title: '商城订单列表',
        color: 'black',
        back: 'back',
    },
    onLoad: function (options) {
        const self = this;
        const { jump } = options;

        self.setData({
            back: jump == 'index' ? 'back' : 'home'
        });
    },
})