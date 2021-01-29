// 参考 Dean Edwards 写的 base2 这个库中的 format 方法
// 功能类似bash脚本中引用（$0,$1，$2...）命令行带的参数
//

// 注：箭头函数不支持arguments（Firefox好像支持）
// const format=()=>{
//   console.log(arguments);
// }

function format(string) {
	const args = arguments;
	// console.log(string,args)
	// 不能用面向字面量的方式写正则了。
	const pattern = new RegExp(`%([1-${arguments.length}])`, "g");
	return String(string).replace(pattern, (match, index) => args[index]);
}

console.log(format("And the %1 want to know whose %2 you %4", "papers", "shirt", "wear"));
