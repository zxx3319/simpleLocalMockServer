// 订单模块的接口配置（纯静态数据）
module.exports = {
  // 订单列表接口
  "GET /api/order/list": {
    data: {
      code: 200,
      msg: "success",
      data: [
        { orderId: "OD1001", amount: 299.8, status: "已支付", createTime: "2026-01-01" },
        { orderId: "OD1002", amount: 199.9, status: "待发货", createTime: "2026-01-02" }
      ]
    }
  },
  // 购物车接口
  "GET /api/cart/list": {
    data: {
      code: 200,
      msg: "success",
      data: [
        { goodsId: 1, count: 2, checked: true, price: 99.9 },
        { goodsId: 2, count: 1, checked: false, price: 199.9 }
      ]
    }
  }
};