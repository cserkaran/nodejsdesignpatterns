var user = require('./library/user');
var otherUser = require('./library/user');

console.log(user.getName());
console.log(otherUser.getName());

user.setName("Steve");

console.log(user.getName());
console.log(otherUser.getName());