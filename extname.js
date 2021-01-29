// 获取文件扩展名
// 参数：字符串（文件名）
// 返回：字符串（文件扩展名）
// 注：对隐藏文件名无用

const extname = (filename) => {
	const tmp = filename.split(".");
	const tmplen = tmp.length;
	if (tmplen === 1 || filename.indexOf(".") === 0) return "";
	return tmp[tmplen - 1] ? (`.${tmp[tmplen - 1]}`) : "";
};
