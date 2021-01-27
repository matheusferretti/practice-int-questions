const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

const app = rewire("./app.js");

const clients = app.__get__('clients');

const listClientsIdsSortByTaxNumber = app.__get__('listClientsIdsSortByTaxNumber');

it('The function listClientsIds should exists', function () {
    expect(listClientsIdsSortByTaxNumber).toBeTruthy();
});