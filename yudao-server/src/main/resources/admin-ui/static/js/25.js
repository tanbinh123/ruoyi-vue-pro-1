(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./src/api/bpm/form.js":
/*!*****************************!*\
  !*** ./src/api/bpm/form.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault.js */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\").default;\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createForm = createForm;\nexports.deleteForm = deleteForm;\nexports.getForm = getForm;\nexports.getFormPage = getFormPage;\nexports.getSimpleForms = getSimpleForms;\nexports.updateForm = updateForm;\n\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\"));\n\n// 创建工作流的表单定义\nfunction createForm(data) {\n  return (0, _request.default)({\n    url: '/bpm/form/create',\n    method: 'post',\n    data: data\n  });\n} // 更新工作流的表单定义\n\n\nfunction updateForm(data) {\n  return (0, _request.default)({\n    url: '/bpm/form/update',\n    method: 'put',\n    data: data\n  });\n} // 删除工作流的表单定义\n\n\nfunction deleteForm(id) {\n  return (0, _request.default)({\n    url: '/bpm/form/delete?id=' + id,\n    method: 'delete'\n  });\n} // 获得工作流的表单定义\n\n\nfunction getForm(id) {\n  return (0, _request.default)({\n    url: '/bpm/form/get?id=' + id,\n    method: 'get'\n  });\n} // 获得工作流的表单定义分页\n\n\nfunction getFormPage(query) {\n  return (0, _request.default)({\n    url: '/bpm/form/page',\n    method: 'get',\n    params: query\n  });\n} // 获得动态表单的精简列表\n\n\nfunction getSimpleForms() {\n  return (0, _request.default)({\n    url: '/bpm/form/list-all-simple',\n    method: 'get'\n  });\n}\n\n//# sourceURL=webpack:///./src/api/bpm/form.js?");

/***/ }),

/***/ "./src/api/system/user.js":
/*!********************************!*\
  !*** ./src/api/system/user.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault.js */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\").default;\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addUser = addUser;\nexports.changeUserStatus = changeUserStatus;\nexports.delUser = delUser;\nexports.exportUser = exportUser;\nexports.getUser = getUser;\nexports.getUserProfile = getUserProfile;\nexports.importTemplate = importTemplate;\nexports.listSimpleUsers = listSimpleUsers;\nexports.listUser = listUser;\nexports.resetUserPwd = resetUserPwd;\nexports.updateUser = updateUser;\nexports.updateUserProfile = updateUserProfile;\nexports.updateUserPwd = updateUserPwd;\nexports.uploadAvatar = uploadAvatar;\n\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\"));\n\nvar _ruoyi = __webpack_require__(/*! @/utils/ruoyi */ \"./src/utils/ruoyi.js\");\n\n// 查询用户列表\nfunction listUser(query) {\n  return (0, _request.default)({\n    url: '/system/user/page',\n    method: 'get',\n    params: query\n  });\n} // 获取用户精简信息列表\n\n\nfunction listSimpleUsers() {\n  return (0, _request.default)({\n    url: '/system/user/list-all-simple',\n    method: 'get'\n  });\n} // 查询用户详细\n\n\nfunction getUser(userId) {\n  return (0, _request.default)({\n    url: '/system/user/get?id=' + (0, _ruoyi.praseStrEmpty)(userId),\n    method: 'get'\n  });\n} // 新增用户\n\n\nfunction addUser(data) {\n  return (0, _request.default)({\n    url: '/system/user/create',\n    method: 'post',\n    data: data\n  });\n} // 修改用户\n\n\nfunction updateUser(data) {\n  return (0, _request.default)({\n    url: '/system/user/update',\n    method: 'put',\n    data: data\n  });\n} // 删除用户\n\n\nfunction delUser(userId) {\n  return (0, _request.default)({\n    url: '/system/user/delete?id=' + userId,\n    method: 'delete'\n  });\n} // 导出用户\n\n\nfunction exportUser(query) {\n  return (0, _request.default)({\n    url: '/system/user/export',\n    method: 'get',\n    params: query,\n    responseType: 'blob'\n  });\n} // 用户密码重置\n\n\nfunction resetUserPwd(id, password) {\n  var data = {\n    id: id,\n    password: password\n  };\n  return (0, _request.default)({\n    url: '/system/user/update-password',\n    method: 'put',\n    data: data\n  });\n} // 用户状态修改\n\n\nfunction changeUserStatus(id, status) {\n  var data = {\n    id: id,\n    status: status\n  };\n  return (0, _request.default)({\n    url: '/system/user/update-status',\n    method: 'put',\n    data: data\n  });\n} // 查询用户个人信息\n\n\nfunction getUserProfile() {\n  return (0, _request.default)({\n    url: '/system/user/profile/get',\n    method: 'get'\n  });\n} // 修改用户个人信息\n\n\nfunction updateUserProfile(data) {\n  return (0, _request.default)({\n    url: '/system/user/profile/update',\n    method: 'put',\n    data: data\n  });\n} // 用户密码重置\n\n\nfunction updateUserPwd(oldPassword, newPassword) {\n  var data = {\n    oldPassword: oldPassword,\n    newPassword: newPassword\n  };\n  return (0, _request.default)({\n    url: '/system/user/profile/update-password',\n    method: 'put',\n    data: data\n  });\n} // 用户头像上传\n\n\nfunction uploadAvatar(data) {\n  return (0, _request.default)({\n    url: '/system/user/profile/update-avatar',\n    method: 'put',\n    data: data\n  });\n} // 下载用户导入模板\n\n\nfunction importTemplate() {\n  return (0, _request.default)({\n    url: '/system/user/get-import-template',\n    method: 'get',\n    responseType: 'blob'\n  });\n}\n\n//# sourceURL=webpack:///./src/api/system/user.js?");

/***/ })

}]);