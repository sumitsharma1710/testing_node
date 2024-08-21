var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

// ============================== Assert =============================================================

describe('============= Assert checking test cases ============', function(){
    let foo = 'bar'
    let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

    it('check for string', function(){
        assert.typeOf(foo, 'string');
    });
    it('check for equal', function(){
        assert.equal(foo, 'bar', 'foo equal `bar`');
    });
    it('check for length', function(){
        assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
    });
    it('check for the property with its length', function(){
        assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
    });
});

// ============================== should =============================================================


describe('============= Describe checking test cases ==========', function(){
    let foo = 'bar'
    let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

    it('check for string', function(){
        foo.should.be.a('string');
    });
    it('check for equal', function(){
        foo.should.equal('bar');
    });
    it('check for length', function(){
        foo.should.have.lengthOf(3);
    });
    it('check for the property with its length', function(){
        beverages.should.have.property('tea').with.lengthOf(3);
    });
});


// ============================= expect =============================================================

describe('=========== expect checking test cases =============', function(){
    let foo = 'bar'
    let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

    it('check for string', function(){
        expect(foo).to.be.a('string');
    });
    it('check for equal', function(){
        expect(foo).to.equal('bar');
    });
    it('check for length', function(){
        expect(foo).to.have.lengthOf(3);
    });
    it('check for the property with its length', function(){
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    });
});




