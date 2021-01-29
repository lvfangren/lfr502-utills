// 求字符串中字典序最大的子串
// 传参：目标串
// 结果返回字典序最大的子串
const getMaxStr = (str) => {
	let arr = [];
	arr = str.split("");
	for (let i = arr.length - 1; i > 0; i--) {
		if (arr[i] > arr[i - 1]) {
			arr.splice(i - 1, 1);
		}
	}
	return arr.join("");
};
