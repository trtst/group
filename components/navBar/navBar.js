const util = require('../../utils/util.js');

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
    height: 44,//导航栏高度,
    paddingTop: 20,//导航栏上内边距对应状态栏高度
    show: true,//是否显示导航栏
    staticFile: util.staticFile
  },
  attached: function (option) {
    //导航栏自适应
    let systemInfo = wx.getSystemInfoSync();
    let reg = /ios/i;
    let pt = 20;//导航状态栏上内边距
    let h = 44;//导航状态栏高度
    if (reg.test(systemInfo.system)) {
      pt = systemInfo.statusBarHeight;
      h = 44;
    } else {
      pt = systemInfo.statusBarHeight;
      h = 48;
    }
    this.setData({
      height: h,
      paddingTop: pt
    })
  },
  methods: {
    navigateBack() {
      const self = this;
      const { back } = self.data;
      const authorId = wx.getStorageSync('authorId') || '';

      switch (back) {
        case 'home':
          wx.reLaunch({ url: `/pages/index/index?uid=${authorId}` })
          break;

        case 'list':
        case 'backList':
          wx.switchTab({ url: '/pages/list/list' })
          break;
        default:
          wx.navigateBack({ delta: 1 });
      }
    }
  }
})