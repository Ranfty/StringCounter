
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
			expect(strCount({first: "1",second: "2",third: false,fourth: ["anytime",2,3,4],fifth: null})).toEqual(3)
		});
	});

    describe("When the argument is not an object", function () {
        it("Then the return value is 0", function () {
            expect(strCount("obj")).toEqual(0)
        });
    });

    describe("When the argument is a string and not on the first iteration", function () {
        it("Then the return value is 1", function () {
            expect(strCount("1", false)).toEqual(1)
        });
    });

	describe("When the argument is a deeply nested object", function () {
        it("Then the return value is 6", function () {
            const obj = {
                first: "1",
                second: "2",
                third: false,
                fourth: [
                    "anytime",
                    2,
                    3,
                    4
                ],
                fifth: null,
                sixth: {
                    first: null,
                    second: "true",
                    third: false,
                    fourth: "4",
                    fifth: {
                        first: '2'
                    }
                }
            };

            expect(strCount(obj)).toEqual(6)
        });
    });

	/* continue to write tests as required */
	
});
