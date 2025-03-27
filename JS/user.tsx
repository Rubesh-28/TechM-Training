interface User{
    username:string;
    age:Number;
    email:string;
}

export function createUser(username:string,age:Number,email:string):User
    {
        return {username,age,email};
    }