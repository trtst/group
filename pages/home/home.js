// pages/home/home.js
const app = getApp();

Page({
    data: {
        calcData: app.globalData.calcData,
        maxH: app.globalData.calcData.mainH - 60 / 2 - 90 / 2,
        x: 0,
        currentX: 0
    },
    handleMovableChange(e) {
        this.currentX = e.detail.x;
    },
    handleTouchend(e) {
        if (this.currentX < -46) {
            this.x = -92;
            this.setData({
                x: this.x
            });
        } else {
            this.x = 0;
            this.setData({
                x: this.x
            });
        }
    },
    handleTouchestart(e) { }
})