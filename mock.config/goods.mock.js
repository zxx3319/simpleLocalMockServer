// 商品模块的接口配置
module.exports = {
  // 商品列表接口
  "POST /api/goods/list": {
    handler: (req, res) => {
      const { minPrice = 0 } = req.body;
      const goodsList = [
        { id: 1, name: "商品1", price: 99.9 },
        { id: 2, name: "商品2", price: 199.9 },
        { id: 3, name: "商品3", price: 89.9 }
      ];
      const filteredGoods = goodsList.filter(item => item.price >= minPrice);
      
      return {
        code: 200,
        msg: "success",
        data: filteredGoods
      };
    }
  },
  // 商品详情接口（新增）
  "GET /api/goods/detail": {
    handler: (req, res) => {
      const { goodsId } = req.query;
      // 模拟根据商品ID返回详情
      const goodsMap = {
        "1": { id: 1, name: "商品1", price: 99.9, desc: "商品1详情描述" },
        "2": { id: 2, name: "商品2", price: 199.9, desc: "商品2详情描述" }
      };
      const goods = goodsMap[goodsId] || null;
      
      return {
        code: goods ? 200 : 404,
        msg: goods ? "success" : "商品不存在",
        data: goods
      };
    }
  }
};