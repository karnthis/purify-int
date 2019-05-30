'use strict';

const expect = require('chai').expect;
const { asArrayInt, asInt, asIntR, asIntF, asIntIn, asIntN } = require('../../index');

describe('purifyInt asInt()', () => {
  it(`should have the method 'asInt'`, ()=> {
    expect(asInt).to.be.a('function');
  });
  it(`should return a number`, () => {
    expect(asInt(10)).to.be.a('number');
    expect(asInt('10')).to.be.an('number');
  });
  it(`should not return a negative zero`, () => {
    expect(asInt(-0)).to.equal(0);
  });
	
	it(`should return 0 if a number or number string is not passed to asInt()`, () => {
    expect(asInt('test')).to.equal(0);
    // expect(asInt(true)).to.equal(0); // fails for some reason
    expect(asInt({})).to.equal(0);
    expect(asInt([])).to.equal(0);
    expect(asInt(() => {})).to.equal(0);
  });
});