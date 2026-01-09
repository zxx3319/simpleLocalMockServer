const express = require('express');
const cors = require('cors');
const path = require('path');
const { loadAllMockConfigs } = require('./mock-utils');

const app = express();
const PORT = 7589;

// 基础中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===================== 统一路由注册方法 =====================
function registerMockRoutes(config) {
  Object.entries(config).forEach(([key, value]) => {
    const [method, path] = key.split(' ');
    if (!method || !path) {
      console.warn(`配置格式错误：${key}，请遵循「方法 路径」格式`);
      return;
    }

    app[method.toLowerCase()](path, (req, res) => {
      try {
        let result;
        if (typeof value.handler === 'function') {
          result = value.handler(req, res);
        } else if (value.data) {
          result = value.data;
        } else {
          result = { code: 404, msg: "接口未配置数据", data: null };
        }

        if (!res.headersSent) {
          res.json(result);
        }
      } catch (error) {
        console.error(`接口 ${key} 执行出错：`, error);
        res.status(500).json({
          code: 500,
          msg: "Mock 服务内部错误",
          data: null
        });
      }
    });
  });
}

// ===================== 启动服务 =====================
// 加载所有业务配置（指定配置目录）
const MOCK_CONFIG_DIR = path.join(__dirname, 'mock.config');
const mergedMockConfig = loadAllMockConfigs(MOCK_CONFIG_DIR);

// 注册所有接口
registerMockRoutes(mergedMockConfig);

// 启动服务
app.listen(PORT, () => {
  console.log(`\nMock 服务已启动：http://localhost:${PORT}`);
  console.log('已注册的接口：');
  Object.keys(mergedMockConfig).forEach((key, index) => {
    console.log(`${index + 1}. ${key}`);
  });
});