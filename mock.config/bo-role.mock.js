const privileges = require("./shareData/privileges.js");
// 权限模块
module.exports = {
  // 获取权限列表
  "GET /api/v2/bo/role/list": {
    handler: (req, res) => {
      return {
        code: "0",
        status: "ok",
        data: {
          boRoles: [
            {
              createdAt: "2025-09-12T01:46:07.925877797Z",
              updatedAt: "2026-01-04T03:24:35.019441466Z",
              boRoleId: "015827f7-de5d-4bc3-92cd-6273cf3450f2",
              name: "Jefftest1想確認更長的名稱會發生啥事情",
              summary: "５４５６１５",
              status: "active",
            },
            {
              createdAt: "2025-11-06T09:02:24.122728092Z",
              updatedAt: "2025-11-06T09:03:37.238411824Z",
              boRoleId: "08e3e64f-a943-41e9-8ac6-5c74ebdb6065",
              name: "ym-test",
              status: "active",
            },
            {
              createdAt: "2025-11-25T04:35:50.573734978Z",
              updatedAt: "2025-11-25T04:35:50.573734978Z",
              boRoleId: "0bb76db6-e93b-4b8e-93c3-d7e1bb78cf28",
              name: "lf-test",
              summary: "李飞测试",
              status: "active",
            },
            {
              createdAt: "2026-01-05T05:47:10.055743103Z",
              updatedAt: "2026-01-05T05:47:10.055743103Z",
              boRoleId: "0bd661df-5d09-4fbf-b445-d05cc82315b1",
              name: "zxx-test",
              summary: "这是一个测试账号",
              status: "active",
            },
            {
              createdAt: "2025-09-04T07:15:22.361817130Z",
              updatedAt: "2025-09-04T07:15:22.361817130Z",
              boRoleId: "145465d5-80e3-4257-a14b-4154d1d5cba1",
              name: "會員資料管理權限",
              status: "active",
            },
            {
              createdAt: "2025-09-11T02:53:26.133512227Z",
              updatedAt: "2025-09-11T02:53:26.133512227Z",
              boRoleId: "20ce0f2d-6c6e-42fd-bd73-4053f3dfbfe6",
              name: "test-黑白名單",
              status: "active",
            },
            {
              createdAt: "2025-08-01T03:13:18.798476000Z",
              updatedAt: "2025-08-01T03:13:18.798476000Z",
              boRoleId: "30cdf603-346e-4637-b998-d0e107d9641f",
              name: "測試用",
              status: "active",
            },
            {
              createdAt: "2025-11-03T11:17:10.592685123Z",
              updatedAt: "2025-11-03T11:17:10.592685123Z",
              boRoleId: "34ceb1a3-1b50-4a1d-bac4-c4402c287991",
              name: "CY专用",
              status: "active",
            },
            {
              createdAt: "2025-05-16T02:44:21.099955000Z",
              updatedAt: "2025-11-05T11:51:26.476648450Z",
              boRoleId: "3a9edc98-25c0-4247-b7a8-7c371726a0f6",
              name: "root",
              status: "active",
            },
            {
              createdAt: "2025-12-22T03:10:46.430922913Z",
              updatedAt: "2025-12-22T03:10:46.430922913Z",
              boRoleId: "3adaf656-9412-4438-987c-2181ea6e7f2b",
              name: "aaa",
              status: "active",
            },
            {
              createdAt: "2025-11-06T03:48:09.650771693Z",
              updatedAt: "2025-12-03T09:44:16.065806497Z",
              boRoleId: "588f2813-3710-41ed-a022-ec913f9adf44",
              name: "QA-璟瑜",
              status: "inactive",
            },
            {
              createdAt: "2025-08-21T06:56:49.686013193Z",
              updatedAt: "2025-08-21T06:56:49.686013193Z",
              boRoleId: "5ab74e5a-66a9-40c7-b6a9-a51abc39de47",
              name: "SKtest  最低权限仅可读",
              summary: "小测试说是",
              status: "active",
            },
            {
              createdAt: "2025-09-19T07:45:27.470128490Z",
              updatedAt: "2025-09-19T07:45:27.470128490Z",
              boRoleId: "5b6619da-c6d9-4175-8857-765a691f4591",
              name: "CS組長-QC",
              summary: "QA測試-查詢、設定",
              status: "active",
            },
            {
              createdAt: "2025-08-21T02:58:36.159939610Z",
              updatedAt: "2025-08-21T02:58:36.159939610Z",
              boRoleId: "5df57aa3-7a31-4b0b-8823-19eb158408d2",
              name: "全部功能",
              status: "active",
            },
            {
              createdAt: "2025-11-07T01:30:28.054131561Z",
              updatedAt: "2025-11-07T01:30:28.054131561Z",
              boRoleId: "662ca9d5-9955-4dab-8892-57a5efc0c48b",
              name: "標籤+活動",
              status: "active",
            },
            {
              createdAt: "2025-11-13T06:18:47.662617574Z",
              updatedAt: "2025-11-13T06:18:47.662617574Z",
              boRoleId: "68e6e0b1-8d31-4b9a-b24c-e887c1b41cbe",
              name: "chenyu-test",
              status: "active",
            },
            {
              createdAt: "2025-12-24T03:02:28.172655860Z",
              updatedAt: "2025-12-24T03:02:28.172655860Z",
              boRoleId: "6ed5ab96-81fd-4940-9a9a-77c18e1ea8b1",
              name: "test01",
              status: "active",
            },
            {
              createdAt: "2025-11-03T01:33:03.611791703Z",
              updatedAt: "2025-11-03T01:33:03.611791703Z",
              boRoleId: "6feaf693-42d5-4c1c-9a95-59852fcbccba",
              name: "ALICE測試",
              status: "active",
            },
            {
              createdAt: "2025-11-11T05:52:02.891780913Z",
              updatedAt: "2025-11-11T05:52:02.891780913Z",
              boRoleId: "7b295e5d-fae5-4eff-bab1-8bfbf1b3d0d9",
              name: "Spike權限驗證",
              status: "active",
            },
            {
              createdAt: "2025-08-21T06:49:47.903393902Z",
              updatedAt: "2025-08-21T06:49:47.903393902Z",
              boRoleId: "7e6b50d9-0801-4b5a-801d-aca41f75e853",
              name: "SKtest 权限最高级",
              summary: "小领导说是",
              status: "active",
            },
            {
              createdAt: "2025-10-31T08:20:25.145481001Z",
              updatedAt: "2025-10-31T08:20:25.145481001Z",
              boRoleId: "81060744-7468-450b-bcaf-520fe0427e1f",
              name: "hyy",
              status: "active",
            },
            {
              createdAt: "2025-12-25T06:15:03.129243224Z",
              updatedAt: "2025-12-25T06:15:33.401698830Z",
              boRoleId: "842f1314-20f7-4408-899c-1fad990a1610",
              name: "邵明伟",
              summary: "勿动勿动勿动",
              status: "active",
            },
            {
              createdAt: "2025-11-12T09:22:06.421988046Z",
              updatedAt: "2025-11-12T09:22:06.421988046Z",
              boRoleId: "9a9fa38e-2705-4d5e-8704-13e3e870e1b9",
              name: "jy1",
              status: "active",
            },
            {
              createdAt: "2025-12-25T03:42:33.184575000Z",
              updatedAt: "2025-12-25T03:42:33.184575000Z",
              boRoleId: "a3b2645f-a8de-49cb-a6b6-3edfb4fb3452",
              name: "Flower",
              summary: "花花测试",
              status: "active",
            },
            {
              createdAt: "2025-11-05T12:11:30.773157715Z",
              updatedAt: "2025-11-17T08:53:43.783433374Z",
              boRoleId: "ab106ff0-7f52-4114-94c1-d355a01f6b84",
              name: "新鵬",
              status: "inactive",
            },
            {
              createdAt: "2025-12-15T05:40:47.608282402Z",
              updatedAt: "2025-12-15T05:41:04.201085818Z",
              boRoleId: "b64c60a3-5c65-4cd4-aa9c-d4d16eb65387",
              name: "ron-test",
              status: "active",
            },
            {
              createdAt: "2025-11-05T03:25:29.823940138Z",
              updatedAt: "2025-11-05T03:25:29.823940138Z",
              boRoleId: "c15b3e7d-9f7f-44c1-9c73-5f471d3defe6",
              name: "后端实习",
              summary: "taco使用",
              status: "active",
            },
            {
              createdAt: "2025-09-19T07:51:28.352436694Z",
              updatedAt: "2025-09-19T09:02:53.948460366Z",
              boRoleId: "c548adf5-0f11-41b9-b582-b82baa56e97f",
              name: "CS-QC",
              summary: "QA測試-檢視",
              status: "active",
            },
            {
              createdAt: "2025-12-16T05:58:23.675179827Z",
              updatedAt: "2025-12-16T05:58:23.675179827Z",
              boRoleId: "e29ab89b-7152-4cbe-9fd1-10d8231329ff",
              name: "MinnieTEST",
              summary: "MinnieTEST\n",
              status: "active",
            },
            {
              createdAt: "2025-10-28T02:20:13.901078136Z",
              updatedAt: "2025-10-28T02:20:13.901078136Z",
              boRoleId: "f896237d-6dcb-4e0e-977f-0bef7785d07c",
              name: "營運_測",
              status: "active",
            },
            {
              createdAt: "2025-09-12T06:13:40.686170422Z",
              updatedAt: "2025-09-12T06:13:40.686170422Z",
              boRoleId: "f950e369-1085-4b75-9759-e5985ac7adac",
              name: "JohnsonTest",
              status: "active",
            },
            {
              createdAt: "2025-08-21T01:57:01.477758784Z",
              updatedAt: "2025-08-21T01:57:01.477758784Z",
              boRoleId: "fdcf33e2-e799-474a-af19-61f95fdbe3c2",
              name: "RD",
              status: "active",
            },
            {
              createdAt: "2025-08-19T19:49:47.819387000Z",
              updatedAt: "2025-08-19T19:49:47.819387000Z",
              boRoleId: "fe22280b-9ef6-4cd8-ae83-a061e23f36e8",
              name: "CS專員測試",
              status: "active",
            },
          ],
        },
      };
    },
  },
  //获取用户权限详情
  "GET /api/v2/bo/role/detail": {
    handler: (req, res) => {
      console.log("请求信息:", req.query);
      const { boRoleId } = req.query;
      if (boRoleId === "015827f7-de5d-4bc3-92cd-6273cf3450f2") {
        return {
          code: "0",
          status: "ok",
          data: {
            createdAt: "2025-09-12T01:46:07.925877797Z",
            updatedAt: "2026-01-04T03:24:35.019441466Z",
            boRoleId: "015827f7-de5d-4bc3-92cd-6273cf3450f2",
            name: "Jefftest1想確認更長的名稱會發生啥事情",
            summary: "５４５６１５",
            status: "active",
            privileges,
          },
        };
      } else {
        return {
          code: 401,
          message: "Unauthorized",
          status: "error",
        };
      }
    },
  },
  // 启用用户权限
  "POST /api/v2/bo/role/inactive": {
    handler: (req, res) => {
      console.log("请求信息:", req.body);
      if (!req.body.boRoleId) {
        return {
          code: "400",
          message: "boRoleId is required",
          status: "error",
        };
      }
      return {
        code: "0",
        status: "ok",
        data: {},
      };
    },
  },
  // 停用用户权限
  "POST /api/v2/bo/role/active": {
    handler: (req, res) => {
      console.log("请求信息:", req.body);
      if (!req.body.boRoleId) {
        return {
          code: "400",
          message: "boRoleId is required",
          status: "error",
        };
      }
      return {
        code: "0",
        status: "ok",
        data: {},
      };
    },
  },
};
