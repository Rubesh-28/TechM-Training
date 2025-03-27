// main.ts
import { createUser } from "./user";

const userObj = createUser("JohnDoe", 30, "johndoe@example.com");

console.log(`User: ${userObj.username}, Age: ${userObj.age}, Email: ${userObj.email}`);
