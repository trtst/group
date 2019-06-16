const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData
    },
    onLoad () {

    },
    getAddress () {
        wx.chooseAddress({});
    }
})