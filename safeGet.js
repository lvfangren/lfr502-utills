// 功能：访问一个对象，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined

// 参数：对象（必传），要访问的属性（必传）
// 函数返回值：如果查找到返回对应对象的对应属性值，没有查到返回undefined

const safeGet = (obj, path) => {
	if (!path) {
		return undefined;
	}
	const tmp = path.split(".");
	let result = obj;
	for (const item of tmp) {
		if (result[item]) {
			result = result[item];
		} else {
			return undefined;
		}
	}
	return result;
};
