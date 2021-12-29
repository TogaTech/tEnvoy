const assert = require("assert");
const { tEnvoy, tEnvoyPGPKey, tEnvoyNaClKey, tEnvoyNaClSigningKey } = require("../node/tenvoy.js");
const envoy = new tEnvoy();

describe("Random Tests", function() {
	let i = 0;

	i++;
	it(`${i}: random - exists`, function() {
		assert.notEqual(envoy.random, null);
	});

	i++;
	it(`${i}: random.bytes - exists`, function() {
		assert.notEqual(envoy.random.bytes, null);
	});

	i++;
	it(`${i}: random.bytes - properly generates`, async function() {
		let random1 = await envoy.random.bytes(256);
		let random2 = await envoy.random.bytes(256);
		assert.deepEqual(random1.length, 256);
		assert.deepEqual(random2.length, 256);
		assert.notEqual(random1, random2);
	});

	i++;
	it(`${i}: random.number - exists`, function() {
		assert.notEqual(envoy.random.number, null);
	});

	i++;
	it(`${i}: random.number - properly generates`, async function() {
		let random1 = await envoy.random.number(0, 4096);
		let random2 = await envoy.random.number(0, 4096);
		let random3 = await envoy.random.number(0, 1);
		assert.deepEqual(random1 < 4096, true);
		assert.deepEqual(random1 >= 0, true);
		assert.deepEqual(random2 < 4096, true);
		assert.deepEqual(random2 >= 0, true);
		assert.deepEqual(random3 < 1, true);
		assert.deepEqual(random3 >= 0, true);
		assert.notEqual(random1, random2);
	});

	i++;
	it(`${i}: random.string - exists`, function() {
		assert.notEqual(envoy.random.string, null);
	});

	i++;
	it(`${i}: random.string - properly generates`, async function() {
		let random1 = await envoy.random.string(256);
		let random2 = await envoy.random.string(256);
		assert.deepEqual(random1.length, 256);
		assert.deepEqual(random2.length, 256);
		assert.notEqual(random1, random2);
	});

	i++;
	it(`${i}: random.words - exists`, function() {
		assert.notEqual(envoy.random.words, null);
	});

	i++;
	it(`${i}: random.words - properly generates`, async function() {
		let random1 = await envoy.random.words(256);
		let random2 = await envoy.random.words(256);
		assert.deepEqual(random1.split(" ").length, 256);
		assert.deepEqual(random2.split(" ").length, 256);
		assert.notEqual(random1, random2);
	});
})