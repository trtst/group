const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData,
        maxH: app.globalData.calcData.mainH - 80 / 2 - 90 / 2
    },
})