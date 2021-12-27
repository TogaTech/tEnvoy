const assert = require("assert");
const { tEnvoy, tEnvoyPGPKey, tEnvoyNaClKey, tEnvoyNaClSigningKey } = require("../node/tenvoy.js");
const envoy = new tEnvoy();

describe("Utility Tests", function() {
	let i = 0;

	i++;
	it(`${i}: util.utf8encode - exists`, function() {
		assert.notEqual(envoy.util.utf8encode, null);
	});

	i++;
	it(`${i}: util.utf8encode - properly encodes`, function() {
		let expected = new Uint8Array([116, 101, 115, 116]);
		let actual = envoy.util.utf8encode("test");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: util.utf8decode - exists`, function() {
		assert.notEqual(envoy.util.utf8decode, null);
	});

	i++;
	it(`${i}: util.utf8decode - properly decodes`, function() {
		let expected = "test";
		let actual = envoy.util.utf8decode(new Uint8Array([116, 101, 115, 116]));
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: util.stringToBytes - exists`, function() {
		assert.notEqual(envoy.util.stringToBytes, null);
	});

	i++;
	it(`${i}: util.stringToBytes - properly converts`, function() {
		let expected = new Uint8Array([116, 101, 115, 116]);
		let actual = envoy.util.stringToBytes("test");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: util.bytesToString - exists`, function() {
		assert.notEqual(envoy.util.bytesToString, null);
	});

	i++;
	it(`${i}: util.bytesToString - properly converts`, function() {
		let expected = "test";
		let actual = envoy.util.bytesToString(new Uint8Array([116, 101, 115, 116]));
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: util.stringToHex - exists`, function() {
		assert.notEqual(envoy.util.stringToHex, null);
	});

	i++;
	it(`${i}: util.stringToHex - properly converts`, function() {
		let expected = "74657374696e67";
		let actual = envoy.util.stringToHex("testing");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: util.hexToString - exists`, function() {
		assert.notEqual(envoy.util.hexToString, null);
	});

	i++;
	it(`${i}: util.hexToString - properly converts`, function() {
		let expected = "testing";
		let actual = envoy.util.hexToString("74657374696e67");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: util.bytesToHex - exists`, function() {
		assert.notEqual(envoy.util.bytesToHex, null);
	});

	i++;
	it(`${i}: util.bytesToHex - properly converts`, function() {
		let expected = "74657374696e67";
		let actual = envoy.util.bytesToHex(new Uint8Array([116, 101, 115, 116, 105, 110, 103]));
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: util.hexToBytes - exists`, function() {
		assert.notEqual(envoy.util.hexToBytes, null);
	});

	i++;
	it(`${i}: util.hexToBytes - properly converts`, function() {
		let expected = new Uint8Array([116, 101, 115, 116, 105, 110, 103]);
		let actual = envoy.util.hexToBytes("74657374696e67");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: util.arrayDeepCopy - exists`, function() {
		assert.notEqual(envoy.util.arrayDeepCopy, null);
	});

	i++;
	it(`${i}: util.arrayDeepCopy - properly copies`, function() {
		let expected = [1, [2, 3], new Uint8Array([4, 5]), 6];
		let actual = envoy.util.arrayDeepCopy([1, [2, 3], new Uint8Array([4, 5]), 6]);
		assert.deepEqual(expected, actual);
		assert.notEqual(expected, actual);
	});

	i++;
	it(`${i}: util.compareConstant - exists`, function() {
		assert.notEqual(envoy.util.compareConstant, null);
	});

	i++;
	it(`${i}: util.compareConstant - properly compares`, function() {
		let expected1 = true;
		let actual1 = envoy.util.compareConstant([1, 2], [1, 2]);
		assert.deepEqual(expected1, actual1);

		let expected2 = false;
		let actual2 = envoy.util.compareConstant([1, 2], [3, 2]);
		assert.deepEqual(expected2, actual2);

		let expected3 = true;
		let actual3 = envoy.util.compareConstant(new Uint8Array([1, 2]), [1, 2]);
		assert.deepEqual(expected3, actual3);

		let expected4 = true;
		let actual4 = envoy.util.compareConstant(new Uint16Array([1, 2]), new Uint8Array([1, 2]));
		assert.deepEqual(expected4, actual4);

		let expected5 = true;
		let actual5 = envoy.util.compareConstant("test", "test");
		assert.deepEqual(expected5, actual5);

		let expected6 = true;
		let actual6 = envoy.util.compareConstant("test", ["t", "e", "s", "t"]);
		assert.deepEqual(expected6, actual6);

		let expected7 = false;
		let actual7 = envoy.util.compareConstant("test", "testing");
		assert.deepEqual(expected7, actual7);
	});

	i++;
	it(`${i}: util.mixedToUint8Array - exists`, function() {
		assert.notEqual(envoy.util.mixedToUint8Array, null);
	});

	i++;
	it(`${i}: util.mixedToUint8Array - properly converts`, function() {
		let expected1 = null;
		let actual1 = envoy.util.mixedToUint8Array(null);
		assert.deepEqual(expected1, actual1);

		let expected2 = new Uint8Array([1, 2]);
		let actual2 = envoy.util.mixedToUint8Array(new Uint8Array([1, 2]));
		assert.deepEqual(expected2, actual2);

		let expected3 = new Uint8Array([1, 2]);
		let actual3 = envoy.util.mixedToUint8Array({0: 1, 1: 2});
		assert.deepEqual(expected3, actual3);

		let expected4 = new Uint8Array([1, 2]);
		let actual4 = envoy.util.mixedToUint8Array([1, 2]);
		assert.deepEqual(expected4, actual4);

		let expected5 = new Uint8Array([1]);
		let actual5 = envoy.util.mixedToUint8Array(1);
		assert.deepEqual(expected5, actual5);

		let expected6 = new Uint8Array([1, 0]);
		let actual6 = envoy.util.mixedToUint8Array(256);
		assert.deepEqual(expected6, actual6);

		let expected7 = new Uint8Array([0]);
		let actual7 = envoy.util.mixedToUint8Array(0);
		assert.deepEqual(expected7, actual7);

		let expected8 = new Uint8Array([1]);
		let actual8 = envoy.util.mixedToUint8Array(-1);
		assert.deepEqual(expected8, actual8);

		let expected9 = new Uint8Array([1, 0]);
		let actual9 = envoy.util.mixedToUint8Array(-256);
		assert.deepEqual(expected9, actual9);

		let expected10 = new Uint8Array([0]);
		let actual10 = envoy.util.mixedToUint8Array(NaN);
		assert.deepEqual(expected10, actual10);

		let expected11 = new Uint8Array([49, 46, 49]);
		let actual11 = envoy.util.mixedToUint8Array(1.1);
		assert.deepEqual(expected11, actual11);

		let expected12 = new Uint8Array([255]);
		let actual12 = envoy.util.mixedToUint8Array(Infinity);
		assert.deepEqual(expected12, actual12);

		let expected13 = new Uint8Array([91, 50, 53, 54, 44, 50, 53, 55, 93]);
		let actual13 = envoy.util.mixedToUint8Array([256, 257]);
		assert.deepEqual(expected13, actual13);

		let expected14 = new Uint8Array([91, 34, 116, 34, 44, 34, 101, 34, 44, 34, 115, 34, 44, 34, 116, 34, 93]);
		let actual14 = envoy.util.mixedToUint8Array(["t", "e", "s", "t"]);
		assert.deepEqual(expected14, actual14);

		let expected15 = new Uint8Array([123, 34, 116, 34, 58, 34, 101, 34, 44, 34, 115, 34, 58, 34, 116, 34, 125]);
		let actual15 = envoy.util.mixedToUint8Array({"t": "e", "s": "t"});
		assert.deepEqual(expected15, actual15);

		let expected16 = new Uint8Array([1]);
		let actual16 = envoy.util.mixedToUint8Array(true);
		assert.deepEqual(expected16, actual16);

		let expected17 = new Uint8Array([0]);
		let actual17 = envoy.util.mixedToUint8Array(false);
		assert.deepEqual(expected17, actual17);

		let expected18 = new Uint8Array([102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 101, 115, 116, 40, 41, 32, 123, 114, 101, 116, 117, 114, 110, 32, 34, 116, 101, 115, 116, 34, 125]);
		let actual18 = envoy.util.mixedToUint8Array(function test() {return "test"});
		assert.deepEqual(expected18, actual18);

		let expected19 = new Uint8Array([116, 101, 115, 116]);
		let actual19 = envoy.util.mixedToUint8Array("test");
		assert.deepEqual(expected19, actual19);

		let expected20 = new Uint8Array([254, 116, 101, 115, 116]);
		let actual20 = envoy.util.mixedToUint8Array("test", true);
		assert.deepEqual(expected20, actual20);

		let expected21 = new Uint8Array([255, 255, 255, 255, 255, 254, 116, 101, 115, 116]);
		let actual21 = envoy.util.mixedToUint8Array("test", true, 10);
		assert.deepEqual(expected21, actual21);
	});

	i++;
	it(`${i}: util.uint8ArrayToMixed - exists`, function() {
		assert.notEqual(envoy.util.uint8ArrayToMixed, null);
	});

	i++;
	it(`${i}: util.uint8ArrayToMixed - properly converts`, function() {
		let expected1 = [1, 2];
		let actual1 = envoy.util.uint8ArrayToMixed(new Uint8Array([1, 2]));
		assert.deepEqual(expected1, actual1);

		let expected2 = "test";
		let actual2 = envoy.util.uint8ArrayToMixed(new Uint8Array([255, 255, 255, 255, 255, 254, 116, 101, 115, 116]), true);
		assert.deepEqual(expected2, actual2);
	});

	i++;
	it(`${i}: util.pack - exists`, function() {
		assert.notEqual(envoy.util.pack, null);
	});

	i++;
	it(`${i}: util.pack - properly converts`, function() {
		let expected1 = null;
		let actual1 = envoy.util.pack(null);
		assert.deepEqual(expected1, actual1);

		let expected2 = new Uint8Array([0, 1, 2]);
		let actual2 = envoy.util.pack(new Uint8Array([1, 2]));
		assert.deepEqual(expected2, actual2);

		let expected3 = new Uint8Array([0, 1, 2]);
		let actual3 = envoy.util.pack({0: 1, 1: 2});
		assert.deepEqual(expected3, actual3);

		let expected4 = new Uint8Array([1, 1, 2]);
		let actual4 = envoy.util.pack([1, 2]);
		assert.deepEqual(expected4, actual4);

		let expected5 = new Uint8Array([2, 1]);
		let actual5 = envoy.util.pack(1);
		assert.deepEqual(expected5, actual5);

		let expected6 = new Uint8Array([2, 1, 0]);
		let actual6 = envoy.util.pack(256);
		assert.deepEqual(expected6, actual6);

		let expected7 = new Uint8Array([4, 0]);
		let actual7 = envoy.util.pack(0);
		assert.deepEqual(expected7, actual7);

		let expected8 = new Uint8Array([3, 1]);
		let actual8 = envoy.util.pack(-1);
		assert.deepEqual(expected8, actual8);

		let expected9 = new Uint8Array([3, 1, 0]);
		let actual9 = envoy.util.pack(-256);
		assert.deepEqual(expected9, actual9);

		let expected10 = new Uint8Array([7, 0]);
		let actual10 = envoy.util.pack(NaN);
		assert.deepEqual(expected10, actual10);

		let expected11 = new Uint8Array([8, 49, 46, 49]);
		let actual11 = envoy.util.pack(1.1);
		assert.deepEqual(expected11, actual11);

		let expected12 = new Uint8Array([9, 255]);
		let actual12 = envoy.util.pack(Infinity);
		assert.deepEqual(expected12, actual12);

		let expected13 = new Uint8Array([5, 91, 50, 53, 54, 44, 50, 53, 55, 93]);
		let actual13 = envoy.util.pack([256, 257]);
		assert.deepEqual(expected13, actual13);

		let expected14 = new Uint8Array([5, 91, 34, 116, 34, 44, 34, 101, 34, 44, 34, 115, 34, 44, 34, 116, 34, 93]);
		let actual14 = envoy.util.pack(["t", "e", "s", "t"]);
		assert.deepEqual(expected14, actual14);

		let expected15 = new Uint8Array([5, 123, 34, 116, 34, 58, 34, 101, 34, 44, 34, 115, 34, 58, 34, 116, 34, 125]);
		let actual15 = envoy.util.pack({"t": "e", "s": "t"});
		assert.deepEqual(expected15, actual15);

		let expected16 = new Uint8Array([6, 1]);
		let actual16 = envoy.util.pack(true);
		assert.deepEqual(expected16, actual16);

		let expected17 = new Uint8Array([6, 0]);
		let actual17 = envoy.util.pack(false);
		assert.deepEqual(expected17, actual17);

		let expected18 = new Uint8Array([10, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 101, 115, 116, 40, 41, 32, 123, 114, 101, 116, 117, 114, 110, 32, 34, 116, 101, 115, 116, 34, 125]);
		let actual18 = envoy.util.pack(function test() {return "test"});
		assert.deepEqual(expected18, actual18);

		let expected19 = new Uint8Array([254, 116, 101, 115, 116]);
		let actual19 = envoy.util.pack("test");
		assert.deepEqual(expected19, actual19);

		let expected20 = new Uint8Array([255, 255, 255, 255, 255, 254, 116, 101, 115, 116]);
		let actual20 = envoy.util.pack("test", 10);
		assert.deepEqual(expected20, actual20);
	});

	i++;
	it(`${i}: util.unpack - exists`, function() {
		assert.notEqual(envoy.util.unpack, null);
	});

	i++;
	it(`${i}: util.unpack - properly converts`, function() {
		let expected1 = null;
		let actual1 = envoy.util.unpack(null);
		assert.deepEqual(expected1, actual1);

		let expected2 = new Uint8Array([1, 2]);
		let actual2 = envoy.util.unpack(new Uint8Array([0, 1, 2]));
		assert.deepEqual(expected2, actual2);

		let expected3 = [1, 2];
		let actual3 = envoy.util.unpack(new Uint8Array([1, 1, 2]));
		assert.deepEqual(expected3, actual3);

		let expected4 = 1;
		let actual4 = envoy.util.unpack(new Uint8Array([2, 1]));
		assert.deepEqual(expected4, actual4);

		let expected5 = 256;
		let actual5 = envoy.util.unpack(new Uint8Array([2, 1, 0]));
		assert.deepEqual(expected5, actual5);

		let expected6 = 0;
		let actual6 = envoy.util.unpack(new Uint8Array([4, 0]));
		assert.deepEqual(expected6, actual6);

		let expected7 = -1;
		let actual7 = envoy.util.unpack(new Uint8Array([3, 1]));
		assert.deepEqual(expected7, actual7);

		let expected8 = -256;
		let actual8 = envoy.util.unpack(new Uint8Array([3, 1, 0]));
		assert.deepEqual(expected8, actual8);

		let expected9 = NaN;
		let actual9 = envoy.util.unpack(new Uint8Array([7, 0]));
		assert.deepEqual(expected9, actual9);

		let expected10 = 1.1;
		let actual10 = envoy.util.unpack(new Uint8Array([8, 49, 46, 49]));
		assert.deepEqual(expected10, actual10);

		let expected11 = Infinity;
		let actual11 = envoy.util.unpack(new Uint8Array([9, 255]));
		assert.deepEqual(expected11, actual11);

		let expected12 = [256, 257];
		let actual12 = envoy.util.unpack(new Uint8Array([5, 91, 50, 53, 54, 44, 50, 53, 55, 93]));
		assert.deepEqual(expected12, actual12);

		let expected13 = ["t", "e", "s", "t"];
		let actual13 = envoy.util.unpack(new Uint8Array([5, 91, 34, 116, 34, 44, 34, 101, 34, 44, 34, 115, 34, 44, 34, 116, 34, 93]));
		assert.deepEqual(expected13, actual13);

		let expected14 = {"t": "e", "s": "t"};
		let actual14 = envoy.util.unpack(new Uint8Array([5, 123, 34, 116, 34, 58, 34, 101, 34, 44, 34, 115, 34, 58, 34, 116, 34, 125]));
		assert.deepEqual(expected14, actual14);

		let expected15 = true;
		let actual15 = envoy.util.unpack(new Uint8Array([6, 1]));
		assert.deepEqual(expected15, actual15);

		let expected16 = false;
		let actual16 = envoy.util.unpack(new Uint8Array([6, 0]));
		assert.deepEqual(expected16, actual16);

		let expected17 = (function test() {return "test"}).toString();
		let actual17 = (envoy.util.unpack(new Uint8Array([10, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 101, 115, 116, 40, 41, 32, 123, 114, 101, 116, 117, 114, 110, 32, 34, 116, 101, 115, 116, 34, 125]))).toString();
		assert.deepEqual(expected17, actual17);

		let expected18 = "test";
		let actual18 = envoy.util.unpack(new Uint8Array([254, 116, 101, 115, 116]));
		assert.deepEqual(expected18, actual18);

		let expected19 = "test";
		let actual19 = envoy.util.unpack(new Uint8Array([255, 255, 255, 255, 255, 254, 116, 101, 115, 116]));
		assert.deepEqual(expected19, actual19);
	});

	i++;
	it(`${i}: util.objectEquals - exists`, function() {
		assert.notEqual(envoy.util.objectEquals, null);
	});

	i++;
	it(`${i}: util.objectEquals - properly compares`, function() {
		let expected1 = true;
		let actual1 = envoy.util.objectEquals({"t": "e", "s": "t"}, {"t": "e", "s": "t"});
		assert.deepEqual(expected1, actual1);

		let expected2 = true;
		let actual2 = envoy.util.objectEquals({"t": "e", "s": "t", "i": {"n": "g"}}, {"i": {"n": "g"}, "s": "t", "t": "e"});
		assert.deepEqual(expected2, actual2);

		let expected3 = false;
		let actual3 = envoy.util.objectEquals({"t": "e", "s": "t", "i": {"n": "g"}}, {"i": {"n": "g"}, "t": "e"});
		assert.deepEqual(expected3, actual3);

		let expected4 = false;
		let actual4 = envoy.util.objectEquals({"i": {"n": "g"}, "t": "e"}, {"t": "e", "s": "t", "i": {"n": "g"}});
		assert.deepEqual(expected4, actual4);

		let expected5 = false;
		let actual5 = envoy.util.objectEquals({"t": "e", "s": "t", "i": {"n": "g"}}, {"t": "e", "s": "t", "i": {"n": "o"}});
		assert.deepEqual(expected5, actual5);
	});

	i++;
	it(`${i}: util.fixArmor - exists`, function() {
		assert.notEqual(envoy.util.objectEquals, null);
	});

	i++;
	it(`${i}: util.fixArmor - properly fixes armor`, function() {
		let expected = "-----BEGIN PGP PUBLIC KEY BLOCK-----\r\nVersion: tEnvoy " + envoy.version + "\r\nComment: https://togatech.org/ (TogaTech tEnvoy)\r\n\r\nxsBNBGHKOQQBCADvMBIUgZKrTd4tCyZXqw806c7pQDfTaYwMs4Tjl8Wlxkrq\r\nrrQeIdu0rO925Z7WulN4lEnx96LDFyXnQmPWKpPl9GZitwLvp5XaZORfsMv/\r\nRFa+AHCQItxUcvvdj8dw1fZoO6+giebYyLHQvrKJn3MHl5Hi/8T5KZ+PA44d\r\n88klLRKd9rxYmrvI2Scj8bv3su5dUQzCWNkC/hjuqm8QjY9UPpHT6MIz/k+G\r\njGLHsW1LGX/K8WsUQQ3Fiazf7XtxerEiORai4sCpQKvJPwwe1gqSeesgMBr8\r\n7zIqOqgSeXXV4bh0cJbYe/Hfyd8B3zDCbXi/1F5xo5adO3CCJdKN19N5ABEB\r\nAAHNAMLAjQQQAQgAIAUCYco5BAYLCQcIAwIEFQgKAgQWAgEAAhkBAhsDAh4B\r\nACEJEGuGQSD/faxaFiEEnNYGAm2wHgogO8hka4ZBIP99rFo/MQf8D3Y3OfIQ\r\nrxjHrx6gQPcAmTsYMGzxHQkuKk3XhDVu0frj59DX3nUcIY6J2iNtnTPf/f94\r\nB+r2mDF3DjfT++c7TGK75QcqCKEkDLrBBCUDt822wcnyA2rQmIm058FCsPtE\r\nXI2kiYgAxE2qBefWKpZ9Zb0anfDCdzVPUfONZir8WJ7SM9qNFlxD2t/SC0dc\r\nE/shAZ34bnh5Apblnjf7ZzaNcJ1/jCMQjvny0my4j5oR8TpZ2xYpLUTXaM3e\r\nIpP1gppmzFMmJU57yJ6u+QXEYqNJcBB6FP+VN5V/Mjfu0/CEfrFD7zWW+RiW\r\nPBn0rtNkNUqjCMp89bPK07lYg08vlBW47s7ATQRhyjkEAQgAysuWH3CCdzr9\r\n15gjr+/Ki8bqLoQZfxOJpGwXK2HjJ5MD1Mr3GZ1nhFvV0no0coCeX15wTZOL\r\nxIvdCjZaJLhuRmAJtQHMcJfYcaNQp48c5fHGSyi62sR7kmD7DSoVx773gFsk\r\nYfZ8pdSXmGHUQDfjWtf8RmrcmuzeXLrdV8dpHmhGGgep8w6gVxVLUYPcG7aS\r\nWTVxMkpQXdwhVr/bd+NW/GwItzw1tBnVVk6A1TNh4UeMqtkSNDA15cvIVID+\r\n98Oi9SXs5g+jgX8C6Mz7bq6yYhVNUhEU2gJE45ppnqWw4CnhAGxFndT8IxQN\r\nJDr0ciUWS8/ui3Cwm16lpBpWXstEeQARAQABwsB2BBgBCAAJBQJhyjkEAhsM\r\nACEJEGuGQSD/faxaFiEEnNYGAm2wHgogO8hka4ZBIP99rFr6aggAwWMa99aj\r\nZ3I9EsGZqSO3tJF6+hH+6OpgIwwDM2t8QlRtV6Z5jk1TuMa7fPImEGPKtHb9\r\ny1df7eSQoFnV6f75kqjQbrNWkbaB4thgewdlNIpsZ8WfSyUzY9rXHujloH1W\r\nZ0PZPiHZ9rUUyi/RyvrGx9ejy6lHk4Y0xskFjTvqcr3Lqb+rEimgrFtCGG4g\r\ntvXJKvjxi0ZDXshcr58/tufEu3FfHWQLTzRGxg0BtePCAzF/ciNn1o+BuWqn\r\nzhNmGWw4bfusOcMTFitnhIxxXaPe7hYhkIkbydzvlt9uoV3ewbMD8t0YFXnO\r\n1hmvlMdbYV7yEjex2jYpAG0qtLcMsMXfTg==\r\n=XsZK\r\n-----END PGP PUBLIC KEY BLOCK-----\r\n";
		let actual = envoy.util.fixArmor("-----BEGIN PGP PUBLIC KEY BLOCK-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nxsBNBGHKOQQBCADvMBIUgZKrTd4tCyZXqw806c7pQDfTaYwMs4Tjl8Wlxkrq\r\nrrQeIdu0rO925Z7WulN4lEnx96LDFyXnQmPWKpPl9GZitwLvp5XaZORfsMv/\r\nRFa+AHCQItxUcvvdj8dw1fZoO6+giebYyLHQvrKJn3MHl5Hi/8T5KZ+PA44d\r\n88klLRKd9rxYmrvI2Scj8bv3su5dUQzCWNkC/hjuqm8QjY9UPpHT6MIz/k+G\r\njGLHsW1LGX/K8WsUQQ3Fiazf7XtxerEiORai4sCpQKvJPwwe1gqSeesgMBr8\r\n7zIqOqgSeXXV4bh0cJbYe/Hfyd8B3zDCbXi/1F5xo5adO3CCJdKN19N5ABEB\r\nAAHNAMLAjQQQAQgAIAUCYco5BAYLCQcIAwIEFQgKAgQWAgEAAhkBAhsDAh4B\r\nACEJEGuGQSD/faxaFiEEnNYGAm2wHgogO8hka4ZBIP99rFo/MQf8D3Y3OfIQ\r\nrxjHrx6gQPcAmTsYMGzxHQkuKk3XhDVu0frj59DX3nUcIY6J2iNtnTPf/f94\r\nB+r2mDF3DjfT++c7TGK75QcqCKEkDLrBBCUDt822wcnyA2rQmIm058FCsPtE\r\nXI2kiYgAxE2qBefWKpZ9Zb0anfDCdzVPUfONZir8WJ7SM9qNFlxD2t/SC0dc\r\nE/shAZ34bnh5Apblnjf7ZzaNcJ1/jCMQjvny0my4j5oR8TpZ2xYpLUTXaM3e\r\nIpP1gppmzFMmJU57yJ6u+QXEYqNJcBB6FP+VN5V/Mjfu0/CEfrFD7zWW+RiW\r\nPBn0rtNkNUqjCMp89bPK07lYg08vlBW47s7ATQRhyjkEAQgAysuWH3CCdzr9\r\n15gjr+/Ki8bqLoQZfxOJpGwXK2HjJ5MD1Mr3GZ1nhFvV0no0coCeX15wTZOL\r\nxIvdCjZaJLhuRmAJtQHMcJfYcaNQp48c5fHGSyi62sR7kmD7DSoVx773gFsk\r\nYfZ8pdSXmGHUQDfjWtf8RmrcmuzeXLrdV8dpHmhGGgep8w6gVxVLUYPcG7aS\r\nWTVxMkpQXdwhVr/bd+NW/GwItzw1tBnVVk6A1TNh4UeMqtkSNDA15cvIVID+\r\n98Oi9SXs5g+jgX8C6Mz7bq6yYhVNUhEU2gJE45ppnqWw4CnhAGxFndT8IxQN\r\nJDr0ciUWS8/ui3Cwm16lpBpWXstEeQARAQABwsB2BBgBCAAJBQJhyjkEAhsM\r\nACEJEGuGQSD/faxaFiEEnNYGAm2wHgogO8hka4ZBIP99rFr6aggAwWMa99aj\r\nZ3I9EsGZqSO3tJF6+hH+6OpgIwwDM2t8QlRtV6Z5jk1TuMa7fPImEGPKtHb9\r\ny1df7eSQoFnV6f75kqjQbrNWkbaB4thgewdlNIpsZ8WfSyUzY9rXHujloH1W\r\nZ0PZPiHZ9rUUyi/RyvrGx9ejy6lHk4Y0xskFjTvqcr3Lqb+rEimgrFtCGG4g\r\ntvXJKvjxi0ZDXshcr58/tufEu3FfHWQLTzRGxg0BtePCAzF/ciNn1o+BuWqn\r\nzhNmGWw4bfusOcMTFitnhIxxXaPe7hYhkIkbydzvlt9uoV3ewbMD8t0YFXnO\r\n1hmvlMdbYV7yEjex2jYpAG0qtLcMsMXfTg==\r\n=XsZK\r\n-----END PGP PUBLIC KEY BLOCK-----\r\n");
		assert.deepEqual(expected, actual);
	});
})