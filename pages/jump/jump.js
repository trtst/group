const app = getApp();

Page({
    data: {
        login: app.globalData.isLogin,
        type: 1    // 用户类别： 0 团长  1 用户
    },
    onLoad: function (options) {
        const self = this,
            { login, type } = self.data;

        if (!login) {
            switch (type) {
                case 0:

                    wx.navigateTo({
                        url: '/manager/sponsor/sponsor'
                    })
                    break;

                case 1:

                    wx.switchTab({
                        url: '/pages/index/index'
                    })
                    break;
            }

        } else {
            wx.navigateTo({
                url: '/pages/login/login'
            })
        }
    }
})