// 获取参数的数据类型

// 函数返回参数的类型

const type=(obj)=>{
  return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
};

module.exports = type
