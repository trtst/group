const app = getApp();

Page({
    data: {
        maxH: 0,
        title: '购物车',
        color: 'black'
    },
    onLoad: function (options) {
        const self = this;

        app.calc(wx.getSystemInfoSync());

        self.setData({
            maxH: app.globalData.calcData.mainH - 100 / 2
        });
    },
})