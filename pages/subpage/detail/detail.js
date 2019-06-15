const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData,
        maxH: app.globalData.calcData.mainH,
        title: '我的',
        color: 'black'
    },
    onLoad: function (options) {
        const self = this;
    },
})