// 暂存，未完成
/**
 * 指定获取第几次重复项
 * @param {*} targetData 目标数据
 * @param {*} repeatNum  1为第一次， -1为最后一次
 * @param {*} keyName 去重key
 */
// import Unique from './unique'
// import Type from './type'
const Unique = require("./unique");
const Type = require("./type");

const unique = (targetData, keyName, repeatNum = 1) => {
	const result = [];
	const tempObj = {};

	if (!Array.isArray(targetData)) {
		throw new Error("数据异常");
	}

	if (targetData.length <= 1) {
		return targetData;
	}

	// 这两个方法都有，可以看下
	if (Type(targetData[0]) !== "object") {
		return Unique(targetData);
	}

	// 数组对象类型去重
	for (let index = 0; index < targetData.length; index++) {
		const keyVal = targetData[index][keyName];

		if (!tempObj[keyVal]) {
			result.push(targetData[index]);
			tempObj[keyVal] = true;
		}
	}
	// console.log(result);
	return result;
};

// test demo
const testData = [
	{
		name: "lv1",
		age: 21,
	},
	{
		name: "lv2",
		age: 22,
	},
	{
		name: "lv1",
		age: 220,
	},

	{
		name: "lv43",
		age: 221,
	},
	{
		name: "lv4",
		age: 2,
	},
	{
		name: "lv2",
		age: 0,
	},

];
unique(testData, "name");

// 还可以添加数据mock方法
