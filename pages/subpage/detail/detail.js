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

        app.calc(wx.getSystemInfoSync());
        console.log(wx.getSystemInfoSync(), app.globalData)
        self.setData({
            maxH: app.globalData.calcData.mainH + app.globalData.calcData.pt + app.globalData.calcData.h - 100 / 2
        });
        wx.hideTabBar();
    },
})