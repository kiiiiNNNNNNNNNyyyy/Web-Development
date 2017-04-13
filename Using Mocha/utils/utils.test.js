const utils = require('./utils');
const expect = require('expect'); 
it('should add two numbers', () => {        //it function provided by mocha
    var result = utils.add(33, 11);
    expect(result).toBe(44).toBeA('number');
});

it('should square the number', () => {
    var result = utils.square(3);
    expect(result).toBe(9).toBeA('number');
});

it('should expect some values', () => {
    expect(12).toNotBe(11);
    //expect({name: 'Arjun'}).toBe({name: 'Arjun'});  //doesn't compare objects
    //expect({name: 'Arjun'}).toNotEqual({name: 'Arjun'});
    //expect([2, 3, 4]).toInclude(2);
    expect({
        name: 'Arjun',
        age: 25,
        location: 'NJ'
    }).toInclude({
        age: 25
    });
});

it('testing async function, should async add', (done) => {  //mocha knows that its async becoz of arguement
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');   
        done();  
    });
});

it("testing async call, sshould square async", (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
    });
});

it('should verify that first and last names are set', () => {   
      var user =   {location:' NJ', age: 25};
      var res = utils.setName(user, 'Arjun Dass');

      expect(res).toInclude({
          firstName: 'Arjun',
          lastName: 'Dass'
      });
});