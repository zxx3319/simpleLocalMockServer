const fs = require('fs');
const path = require('path');

/**
 * 自动加载指定目录下的所有 Mock 配置文件
 * @param {string} configDir - 配置文件目录（绝对路径）
 * @returns {Object} 合并后的完整 Mock 配置
 */
function loadAllMockConfigs(configDir) {
  let mergedConfig = {};

  // 检查配置目录是否存在
  if (!fs.existsSync(configDir)) {
    console.warn(`配置目录 ${configDir} 不存在，未加载任何配置`);
    return mergedConfig;
  }

  // 读取目录下的所有文件
  const files = fs.readdirSync(configDir);
  files.forEach(file => {
    // const priorityFiles = ['user.mock.js', 'goods.mock.js', 'order.mock.js'];
    // priorityFiles.forEach(file => {
    // 只处理 .mock.js 后缀的文件
    if (path.extname(file) === '.js' && file.endsWith('.mock.js')) {
      const filePath = path.join(configDir, file);
      try {
        // 加载单个业务配置文件
        const businessConfig = require(filePath);
        // 合并配置（注意：重复的接口路径会被后加载的覆盖）
        mergedConfig = { ...mergedConfig, ...businessConfig };
        console.log(`✅ 成功加载配置文件：${file}`);
      } catch (error) {
        console.error(`❌ 加载配置文件 ${file} 失败：`, error.message);
      }
    }
  });

  return mergedConfig;
}

module.exports = { loadAllMockConfigs };