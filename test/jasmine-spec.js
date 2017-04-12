
describe("Given string counter function is called ", function () {

	describe("When no argument is passed", function () {
		it("Then the return value is 0", function () {
			expect(strCount()).toEqual(0)
		});
	});

	describe("When the argument is an object containing 1 string", function () {
		it("Then the return value is 1", function () {
			expect(strCount({first: "1"})).toEqual(1)
		});
	});

	describe("When the argument is an object containing 3 strings", function () {
		it("Then the return value is 3", function () {
			expect(strCount({first: "1",second: "2",third: false,fourth: ["anytime",2,3,4],fifth:  null})).toEqual(3)
		});
	});

	/* continue to write tests as required */
	
});
