const util = require('../../utils/util.js');
const app = getApp();

Component({
    properties: { // 定义属性，属性值可以在组件使用时指定
        back: {//是否显示返回
            type: String,
            value: '',//默认
            observer: function (newVal, oldVal, changedPath) {
                if (!newVal) {
                let obj = {};
                obj[changedPath[0]] = oldVal;
                this.setData(obj);
            }
        }
    },
    placeholderBg: {//导航栏占位栏背景色
        type: String,
        value: 'transparent',//默认
        observer: function (newVal, oldVal, changedPath) {
            if (!newVal) {
            let obj = {};
            obj[changedPath[0]] = oldVal;
            this.setData(obj);
            }
        }
    },
    color: {//导航栏字体色
        type: String,
        value: '',//默认
        observer: function (newVal, oldVal, changedPath) {
            if (!newVal) {
            let obj = {};
            obj[changedPath[0]] = oldVal;
            this.setData(obj);
            }
        }
    },
    title: {//导航栏标题
        type: String,
        value: '', //默认
        observer: function (newVal, oldVal, changedPath) {
            if (!newVal) {
            let obj = {};
            obj[changedPath[0]] = oldVal;
            this.setData(obj);
            }
        }
    },
    fixed: {//导航栏是否fixed定位
        type: Boolean,
        value: true, //默认
        observer: function (newVal, oldVal, changedPath) {
            if (newVal !== false && newVal !== true) {
            let obj = {};
            obj[changedPath[0]] = oldVal;
            this.setData(obj);
            }
        }
        },
    },
    data: { // 组件内部数据
        height: app.globalData.calcData.h,//导航栏高度,
        paddingTop: app.globalData.calcData.pt,//导航栏上内边距对应状态栏高度
        show: true,//是否显示导航栏
    },
    methods: {
        navigateBack() {
        const self = this;
        const { back } = self.data;

        switch (back) {
            case 'home':  // 返回管理用户中心
                wx.reLaunch({ url: `/pages/sponsor/sponsor` })
                break;

            default:
                wx.navigateBack({ delta: 1 });
        }
        }
    }
})