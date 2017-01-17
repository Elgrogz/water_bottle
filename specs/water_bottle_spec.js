var bottle = require("../water_bottle");
var assert = require("assert");

describe("Water Bottle", function(){
  it("should be empty at the start", function(){
    assert.equal(0,bottle.volume);
  });

  it("should be full after filling", function(){
    bottle.fill();
    assert.equal(100,bottle.volume);
  });

  it("should go down by 10 when drunk", function(){
    bottle.fill();
    bottle.drink();
    assert.equal(90,bottle.volume);
  });

  it("should go to zero when emptied", function(){
    bottle.fill();
    bottle.empty();
    assert.equal(0,bottle.volume);
  });

  it("should not go below zero", function(){
    bottle.drink();
    assert.equal(0,bottle.volume);
  });

});