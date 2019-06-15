// pages/mall/mall.js
const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData,
        title: '商城价格管理',
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