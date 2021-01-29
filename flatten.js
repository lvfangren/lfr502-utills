// 处理数组函数，将嵌套的数组转化成正常的一维数组。

// 函数返回一个一维的数组
const flatten = (arr) => {
	const tmp = arr.join().split(",");
	const result = [];
	for (let i = 0; i < tmp.length; i++) {
		if (tmp[i] >= "0" && tmp[i] <= "9") {
			result.push(+tmp[i]);
		}
	}
};
