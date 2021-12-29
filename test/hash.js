const assert = require("assert");
const { tEnvoy, tEnvoyPGPKey, tEnvoyNaClKey, tEnvoyNaClSigningKey } = require("../node/tenvoy.js");
const envoy = new tEnvoy();

describe("Hash Tests", function() {
	let i = 0;

	i++;
	it(`${i}: hash - exists`, function() {
		assert.notEqual(envoy.hash, null);
	});

	i++;
	it(`${i}: hash - properly hashes`, async function() {
		let expected1 = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08";
		let actual1 = await envoy.hash("test", "sha256");
		assert.deepEqual(expected1, actual1);

		let expected2 = "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3";
		let actual2 = await envoy.hash("test", "sha1");
		assert.deepEqual(expected2, actual2);

		let expected3 = "90a3ed9e32b2aaf4c61c410eb925426119e1a9dc53d4286ade99a809";
		let actual3 = await envoy.hash("test", "sha224");
		assert.deepEqual(expected3, actual3);

		let expected4 = "768412320f7b0aa5812fce428dc4706b3cae50e02a64caa16a782249bfe8efc4b7ef1ccb126255d196047dfedf17a0a9";
		let actual4 = await envoy.hash("test", "sha384");
		assert.deepEqual(expected4, actual4);

		let expected5 = "ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff";
		let actual5 = await envoy.hash("test", "sha512");
		assert.deepEqual(expected5, actual5);

		let expected6 = "098f6bcd4621d373cade4e832627b4f6";
		let actual6 = await envoy.hash("test", "md5");
		assert.deepEqual(expected6, actual6);

		let expected7 = "5e52fee47e6b070565f74372468cdc699de89107";
		let actual7 = await envoy.hash("test", "ripemd160");
		assert.deepEqual(expected7, actual7);
	});

	i++;
	it(`${i}: hash.sha256 - exists`, function() {
		assert.notEqual(envoy.hash.sha256, null);
	});

	i++;
	it(`${i}: hash.sha256 - properly hashes`, async function() {
		let expected = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
		let actual = await envoy.hash.sha256("test");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: hash.sha1 - exists`, function() {
		assert.notEqual(envoy.hash.sha1, null);
	});

	i++;
	it(`${i}: hash.sha1 - properly hashes`, async function() {
		let expected = "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
		let actual = await envoy.hash.sha1("test");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: hash.sha224 - exists`, function() {
		assert.notEqual(envoy.hash.sha224, null);
	});

	i++;
	it(`${i}: hash.sha224 - properly hashes`, async function() {
		let expected = "90a3ed9e32b2aaf4c61c410eb925426119e1a9dc53d4286ade99a809"
		let actual = await envoy.hash.sha224("test");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: hash.sha384 - exists`, function() {
		assert.notEqual(envoy.hash.sha384, null);
	});

	i++;
	it(`${i}: hash.sha384 - properly hashes`, async function() {
		let expected = "768412320f7b0aa5812fce428dc4706b3cae50e02a64caa16a782249bfe8efc4b7ef1ccb126255d196047dfedf17a0a9"
		let actual = await envoy.hash.sha384("test");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: hash.sha512 - exists`, function() {
		assert.notEqual(envoy.hash.sha512, null);
	});

	i++;
	it(`${i}: hash.sha512 - properly hashes`, async function() {
		let expected = "ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff"
		let actual = await envoy.hash.sha512("test");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: hash.md5 - exists`, function() {
		assert.notEqual(envoy.hash.md5, null);
	});

	i++;
	it(`${i}: hash.md5 - properly hashes`, async function() {
		let expected = "098f6bcd4621d373cade4e832627b4f6"
		let actual = await envoy.hash.md5("test");
		assert.deepEqual(expected, actual);
	});

	i++;
	it(`${i}: hash.ripemd160 - exists`, function() {
		assert.notEqual(envoy.hash.ripemd160, null);
	});

	i++;
	it(`${i}: hash.ripemd160 - properly hashes`, async function() {
		let expected = "5e52fee47e6b070565f74372468cdc699de89107"
		let actual = await envoy.hash.ripemd160("test");
		assert.deepEqual(expected, actual);
	});
})
