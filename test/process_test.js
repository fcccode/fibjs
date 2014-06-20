var test = require("test");
test.setup();

var process = require('process');

var cmd;
var bs;
var s;

describe('fiber', function() {
	it("execPath", function() {
		cmd = process.execPath + ' exec_test.js';
	});

	it("exec", function() {
		bs = process.exec(cmd);
	});

	it("stdout", function() {
		assert.equal(bs.readLine(), "exec testing....");

		var t0 = new Date().getTime();

		bs.readLine();
		assert.equal(bs.readLine(), "console.print....");
		assert.closeTo(new Date().getTime() - t0, 1000, 500);

		bs.readLine();
		assert.equal(bs.readLine(), "console.print....");
		assert.closeTo(new Date().getTime() - t0, 2000, 500);
	});

	it("system", function() {
		assert.equal(process.system(cmd), 100);
	});

	it("memoryUsage", function() {
		console.dir(process.memoryUsage());
	});

	it("argv", function() {
		console.dir(process.argv);
	});
});

//test.run(console.DEBUG);