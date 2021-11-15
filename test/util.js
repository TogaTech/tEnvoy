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
})