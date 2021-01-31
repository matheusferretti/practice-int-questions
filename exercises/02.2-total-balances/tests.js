const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

const app = rewire("./app.js");

const clients = app.__get__('clients');
const accounts = app.__get__('accounts');

const sortClientsTotalBalances = app.__get__('sortClientsTotalBalances');

it('The function sortClientsTotalBalances should exist', function () {
    expect(sortClientsTotalBalances).toBeTruthy();
});

it('The function sortClientsTotalBalances should return an array', function () {
    //execute the sortClientsTotalBalances function from app.js
    const result = sortClientsTotalBalances();
    expect(Array.isArray(result)).toBeTruthy();
});

it('The function sortClientsTotalBalances should return an array of 6 elements', function () {
    //execute the sortClientsTotalBalances function from app.js
    const result = sortClientsTotalBalances();
    //Expect the console log to have been called with "Hello World" at least one
    expect(result.length).toBe(23);
});