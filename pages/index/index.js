const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  demo1() {
    app.diyModal.show({
      title: '我是标题',
      content: '我是主要内容\n还支持反斜杠n手动换行',
    });
  },
  demo2() {
    app.diyModal.show({
      content: '我是主要内容\n还支持反斜杠n手动换行',
    });
  },
  demo3() {
    app.diyModal.show({
      content: '我是主要内容\n还支持反斜杠n手动换行',
      tip: '我是小提示语',
    });
  },
  demo4() {
    app.diyModal.show({
      content: '我是主要内容\n还支持反斜杠n手动换行',
      showCancel: false,
    });
  },
  demo5() {
    app.diyModal.show({
      content: '我是主要内容\n还支持反斜杠n手动换行',
      cancelText: '不再弹出',
      confirmText: '朕知道了',
    });
  },
  demo6() {
    app.diyModal.show({
      content: '点击唤醒小程序自带联系客服会话窗口',
      confirmType: 'contact',
      confirmText: '联系客服',
    });
  },
  demo7() {
    app.diyModal.show({
      title: '温馨提示',
      content: '我是主要内容\n还支持反斜杠n手动换行',
      tip: '我是小提示语',
      cancelText: '不再弹出',
      confirmText: '朕知道了',
    });
  },

  // 主动隐藏弹窗
  demo8() {
    app.diyModal.hide();
  },

  // 开启遮罩关闭
  demo9() {
    app.diyModal.show({
      content: '我是主要内容\n还支持反斜杠n手动换行',
      cancelText: '不再弹出',
      confirmText: '朕知道了',
      shadeClose: true,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
