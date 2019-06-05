const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData
    },
    getAddress () {
        wx.chooseAddress({});
    }
})