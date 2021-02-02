var assert = require('assert');
const Type = require("./type");
const { expect } = require('chai')

describe("类型判断函数的测试", () => {
	it("1应该等于 number", () => {
		expect(Type(1)).to.be.equal("number");
		// assert.equal(Type(1), 'number');

	});
});
