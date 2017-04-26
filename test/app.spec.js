'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should revert 123 to 321', function()
    {
        expect(app.reverseNumber(123)).to.eql(321);
    });
});

describe('returnOnlyLetter', function ()
{
    it('should return only letters', function()
    {
        expect(app.returnOnlyLetter('a1b4c.')).to.eql('abc');
    });

});

describe('isEmail', function ()
{
    it('should return true when is email', function()
    {
        expect(app.isEmail('aaa@bbb.pl')).to.eql(true);
    });
});
