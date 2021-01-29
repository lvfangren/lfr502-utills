// 去掉字符串中所有的空格
// JS有字符串原型方法trim可以去掉字符串首尾的空格
// 传参：字符串
// 结果返回：去掉字符串中的所有空格后的字符串

// 刚刚开始的思路是split方法切割空格，然后join。但是对于tab（制表符）就无法处理，马上正则

const trimAll = (str) => str.replace(/\s+/g, "");
exports.module = {
	trimAll
};
