const assert = require("assert");
const { tEnvoy, tEnvoyPGPKey, tEnvoyNaClKey, tEnvoyNaClSigningKey } = require("../node/tenvoy.js");
const envoy = new tEnvoy();

describe("Core Tests", function() {
	let i = 0;

	i++;
	it(`${i}: core.openpgp - exists`, function() {
		assert.notEqual(envoy.core.openpgp, null);
	});

	i++;
	it(`${i}: core.nacl - exists`, function() {
		assert.notEqual(envoy.core.nacl, null);
	});

	i++;
	it(`${i}: core.sha256 - exists`, function() {
		assert.notEqual(envoy.core.sha256, null);
	});
})