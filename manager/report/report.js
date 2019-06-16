const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData,
        maxH: app.globalData.calcData.mainH,
        title: '我的报表',
        color: 'black',
        back: 'back',
        startX: 0,
    },
    onLoad: function (options) {
        const self = this;

        app.calc(wx.getSystemInfoSync());
    },
})