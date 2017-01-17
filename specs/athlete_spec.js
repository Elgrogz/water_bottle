var athlete = require("../athlete");
var bottle = require("../water_bottle");
var assert = require("assert");

describe("Athlete", function(){
  it("fully hydrated at start", function(){
    assert.equal(100,athlete.hydration);
    });

  it("distance covered should start at 0", function(){
    assert.equal(0,athlete.distance);
    });

  // it("running causes hydration to decrease and distance to increase", function(){
  //   athlete.run();
  //   assert.equal(90,athlete.hydration);
  //   assert.equal(10,athlete.distance);
  //   });

  // it("can't run when dehydrated", function(){
  //   assert.equal(100,athlete.hydration);
  //   for (var i = 0; i < 10; i++) {
  //     athlete.run();
  //   }
  //   assert.equal(0,athlete.hydration);
  //   });

  it("drinking increases hydration", function(){
    assert.equal(100,athlete.hydration);
    bottle.fill();
    athlete.run();
    athlete.run();
    athlete.drink(bottle.drink());
    assert.equal(90, athlete.hydration);
    assert.equal(90, bottle.volume);
    bottle.empty();
    });

  });