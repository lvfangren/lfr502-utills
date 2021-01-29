// 变量的下划线转驼峰命名法
// 参数：字符串
// 函数返回值：字符串
const toCamelCaseVar = (str) => {
	str.replace(/_+[a-zA-Z]/, (m, i) => {
		if (i) {
			return m.match(/[a-zA-Z]/)[0].toUpperCase();
		}
		return m;
	});
};
