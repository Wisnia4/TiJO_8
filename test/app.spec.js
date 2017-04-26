'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should revert 123 to 321', function()
    {
        expect(app.reverseNumber(123)).to.eql(321);
    });

    it('if is not a number', function()
    {
        expect(app.reverseNumber('asd2')).to.eql(false);
    });

});

describe('returnOnlyLetter', function ()
{
    it('should return only letters', function()
    {
        expect(app.returnOnlyLetter('a1b4c.')).to.eql('abc');
    });

    it('should return only letters', function()
    {
        expect(app.returnOnlyLetter(12323)).to.eql(false);
    });

    it('should return only letters', function()
    {
        expect(app.returnOnlyLetter('aaaa')).to.eql('aaaa');
    });

});

describe('isEmail', function ()
{
    it('should return true when it is a email', function()
    {
        expect(app.isEmail('aaa@bbb.pl')).to.eql(true);
    });

    it('should return false when it is not a email', function()
    {
        expect(app.isEmail('aaabb.pl')).to.eql(false);
    });
});
