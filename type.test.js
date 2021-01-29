// const { expect } = require("chai");
const Type = require("./type");

describe("类型判断函数的测试", () => {
	it("1应该等于 number", () => {
		expect(Type(1)).to.be.equal("number");
	});
});
