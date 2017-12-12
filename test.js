// ########################################################################
//Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D
// #######################################################################

it("should make Fluffy happy when Mason pets her", function(){
  expect(fluffy.status).toBe('normal');
  mason.pet(fluffy);
  expect(fluffy.status).toBe('happy');
});

it("should make Fluffy brown", function(){
  expect(fluffy.color).toBe('brown');
});

it("should be make Butter hungry and Fluffy not hungry", function(){
  expect(butter.hungry).toBe(true);
  expect(Fluffy.hungry).toBe(false);
});

it("should make Butter no longer hungry when you feed him", function(){
  julia.feed(butter);
  expect(butter.hungry).toBe(false);
});

it("should not affect Atticus and Butter's owner properties when setting Mason as Fluffy's owner ", function(){
  sadie.owner = mason;
  expect(butter.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function(){
  fluffy.owner = mason;
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe(false);
});

// ########### DO NOT EDIT THESE FUNCTIONS ##########################

// a simple "it" function for naming groups of expectations
function it(description, contents){
  console.log('\n\n"It '+ description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}
