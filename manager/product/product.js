// pages/mall/mall.js
const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData,
        title: '产品库管理',
        color: 'black',
        back: 'back'
    },
    onLoad: function (options) {
        const self = this;
        const { jump } = options;

        self.setData({
            back: jump == 'index' ? 'back' : 'home'
        });

        app.calc(wx.getSystemInfoSync());
    },
})