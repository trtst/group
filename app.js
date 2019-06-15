App({
    onShow(options) {
        const self = this;
        const userInfo = wx.getStorageSync('userInfo') || {};
        const isLogin = wx.getStorageSync('isLogin') || false;
        const calcData = wx.getStorageSync('calcData') || {};

        self.globalData.userInfo = userInfo;
        self.globalData.isLogin = isLogin;
        self.globalData.calcData = calcData;

        if (JSON.stringify(self.globalData.calcData) == '{}') {
            self.calc();
        }

        if (!self.globalData.isLogin) {
            self.getLogin();
        }
    },
    getLogin() {
        console.log("登录状态")
    },
    calc() {
        const self = this,
            systemInfo = wx.getSystemInfoSync(),
            reg = /ios/i;

        let pt = 20,         //导航状态栏上内边距
            h = 44;          //导航状态栏高度

        if (reg.test(systemInfo.system)) {
            pt = systemInfo.statusBarHeight;
            h = 44;
        } else {
            pt = systemInfo.statusBarHeight;
            h = 48;
        }

        self.globalData.calcData = {
            mainH: systemInfo.windowHeight - h - pt,
            h: h,
            pt: pt
        }
        wx.setStorageSync('calcData', self.globalData.calcData);
    },
    globalData: {
        userInfo: {},
        isLogin: false,
        calcData: {}
    }
})