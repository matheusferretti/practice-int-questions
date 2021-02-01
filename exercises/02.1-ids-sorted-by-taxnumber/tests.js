const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

const app = rewire("./app.js");

const clients = app.__get__('clients');

const listClientsIdsSortByTaxNumber = app.__get__('listClientsIdsSortByTaxNumber');

it('The function listClientsIdsSortByTaxNumber should exist', function () {
    expect(listClientsIdsSortByTaxNumber).toBeTruthy();
});

it('The function listClientsIdsSortByTaxNumber should return an array', function () {
    //execute the listClientsIds function from app.js
    const result = listClientsIdsSortByTaxNumber();
    expect(Array.isArray(result)).toBeTruthy();
});

it('The function listClientsIdsSortByTaxNumber should return an array of 6 elements', function () {
    //execute the listClientsIdsSortByTaxNumber function from app.js
    const result = listClientsIdsSortByTaxNumber();
    //Expect the console log to have been called with "Hello World" at least one
    expect(result.length).toBe(6);
});

it('The function listClientsIdsSortByTaxNumber should return an array with the clients taxNumbers', function () {
    //execute the listClientsIdsSortByTaxNumber function from app.js
    const result = listClientsIdsSortByTaxNumber();

    // solution of the exercise (expected array values)
    let solution = clients.sort(function (a, b) {
        if (a.taxNumber > b.taxNumber) {
          return 1;
        }
        if (a.taxNumber < b.taxNumber) {
          return -1;
        }

        return 0;
    });
    solution =  solution.map((client) => client.id);
    //create my own solution array and compare it with the result
    expect(result).toEqual(solution);
});

