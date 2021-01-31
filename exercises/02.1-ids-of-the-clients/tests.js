const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

//I have to use rewire because the variables "clients" and "listClientsIds" are not exported
const app = rewire("./app.js");

//import the list of clients from app.js
const clients = app.__get__('clients');

//import the function listClientsIds from the app.js
const listClientsIds = app.__get__('listClientsIds');

it('The function listClientsIds should exists', function () {
    expect(listClientsIds).toBeTruthy();
});

it('The function listClientsIds should return an array', function () {
    //execute the listClientsIds function from app.js
    const result = listClientsIds();
    expect(Array.isArray(result)).toBeTruthy();
});

it('The function listClientsIds should return an array of 6 elements', function () {
    //execute the listClientsIds function from app.js
    const result = listClientsIds();
    //Expect the console log to have been called with "Hello World" at least one
    expect(result.length).toBe(6);
});

it('The function listClientsIds should return an array with the clients ids', function () {
    //execute the listClientsIds function from app.js
    const result = listClientsIds();

    // solution of the exercise (expected array values)
    const solution = clients.map(c => c.id);
    //create my own solution array and compare it with the result
    expect(result).toEqual(solution);
});

it('The function listClientsIds should return an array with the clients ids', function () {
    //execute the listClientsIds function from app.js
    const result = listClientsIds();

    // solution of the exercise (expected array values)
    const solution = clients.map(c => c.id);
    //create my own solution array and compare it with the result
    expect(result).toEqual(solution);
});
