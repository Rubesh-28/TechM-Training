"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var user_1 = require("./user");
var userObj = (0, user_1.createUser)("JohnDoe", 30, "johndoe@example.com");
console.log("User: ".concat(userObj.username, ", Age: ").concat(userObj.age, ", Email: ").concat(userObj.email));
