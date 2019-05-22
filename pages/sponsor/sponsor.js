const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData
    },
    onLoad () {
        const { calcData } = this.data;

        console.log(calcData)
    }
})