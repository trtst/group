const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData,
        maxH: app.globalData.calcData.mainH - 100 / 2,
        title: '订单详情',
        color: 'black',
        back: 'back',
        startX: 0,
    },
    onLoad: function (options) {
        const self = this;
    },
})