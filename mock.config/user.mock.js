const privileges = require('./shareData/privileges.js');

// 用户模块的接口配置
module.exports = {
  // 用户信息接口
  "GET /api/user/info": {
    handler: (req, res) => {
      console.log("请求地址：", req.originalUrl);
      const { userId } = req.query;

      if (userId === "1002") {
        return {
          code: 200,
          msg: "success",
          data: {
            userId: 1002,
            username: "another_user",
            age: 30,
            email: "another@example.com",
          },
        };
      }

      return {
        code: 200,
        msg: "success",
        data: {
          userId: 1001,
          username: "test_user",
          age: 25,
          email: "test@example.com",
        },
      };
    },
  },
  // 用户登录接口（新增）
  "POST /v2/public/bo/auth/login": {
    handler: (req, res) => {
      const { subject, password } = req.body;
      console.log("请求信息：", req.body);
      // 模拟登录逻辑
      if (subject === "zxx@qq.com" && password === "qwe123") {
        return {
          code: 0,
          status: "ok",
          data: {
            token:
              "994f81d42dddbe16f4171c4b85d9766445838302e6e7780a0467a59c83b4c24c2410d35517b1a4cd6e552c50e7ff371bd8ca723804c81de057ef02a2773ba7bec09a0e9ca5e784a72bc70f3840c960fc66971cf0618829d0bb1af41de74686733679ec72287aab823e8a74ed5828dc44718cfa2707e256e324f98989b24a21d57e678e48a0c3816ae9dfe66bd14e",
            boUser: {
              createdAt: "2025-12-22T09:32:17.912232781Z",
              updatedAt: "2026-01-05T07:43:02.144861005Z",
              boUserId: "cs809a4c25-c36c-4f69-8814-6e256644e4ba",
              name: "zxx",
              email: "zxx@qq.com",
              accountType: "common",
              boDepartmentId: "c6fc6c2f-6e7d-4623-bfd2-6cf32c572287",
              status: "active",
            },
            boRoles: null,
            privileges
          },
        };
      }
      return {
        code: 604,
        message: "account not exist",
        status: "InstanceNotFound",
      };
    },
  },
  // 错误示例接口
  "GET /api/error/demo": {
    handler: (req, res) => {
      res.status(500);
      return {
        code: 500,
        msg: "服务器内部错误",
        data: null,
      };
    },
  },
};
