const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData,
        maxH: app.globalData.calcData.mainH,
        title: '购物车',
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