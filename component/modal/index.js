Component({
  properties: {},
  data: {
    showModal: false,
    maskAnimate: false,
    title: '',
    content: '',
    tip: '',
    prompt: false, //是否有输入框
    confirmType: '',
    showCancel: true,
    cancelText: '取消',
    confirmText: '确定',
    shadeClose: false,
    confirm() {},
    cancel() {},
    detail: {
      inputVal: '',
    },
  },
  methods: {
    // 外部方法调用
    showModal(params) {
      this.setData(
        {
          showModal: true,
          title: params.title || '', //title
          content: params.content || '', //中间内容
          tip: params.tip || '', //灰色提示
          prompt: params.prompt || false, //是否有输入框
          confirmType: params.confirmType || '', //是否有底下按钮
          showCancel: params.showCancel == undefined ? true : params.showCancel, //是否显示取消
          cancelText: params.cancelText || '取消', //左侧按钮文字
          confirmText: params.confirmText || '确定', //右侧按钮文字
          shadeClose: params.shadeClose || false, //是否允许点击遮罩关闭弹窗
          /* 回调函数 */
          confirm: params.confirm || function () {}, //点击确认
          cancel: params.cancel || function () {}, //点击取消
        },
        () => {
          this.setData({
            maskAnimate: true,
          });
        }
      );
    },
    // 外部隐藏调用
    hideModal() {
      this.setData(
        {
          maskAnimate: false,
        },
        () => {
          setTimeout(() => {
            this.setData({
              showModal: false,
            });
          }, 400);
        }
      );
    },
    // 点击确定
    _confirm() {
      this.setData(
        {
          maskAnimate: false,
        },
        () => {
          setTimeout(() => {
            this.setData(
              {
                showModal: false,
              },
              () => {
                this.data.confirm();
              }
            );
          }, 400);
        }
      );
    },
    // 点击取消
    _cancel() {
      this.setData(
        {
          maskAnimate: false,
        },
        () => {
          this.data.cancel();
          setTimeout(() => {
            this.setData({
              showModal: false,
            });
          }, 400);
        }
      );
    },
    //点击遮罩
    _clickMask() {
      if (this.data.shadeClose) {
        this.hideModal();
      }
    },
  },
});
