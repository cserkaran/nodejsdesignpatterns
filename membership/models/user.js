var assert = require('assert');
var utility = require('../library/utility');

var User = function(args) {
    assert.ok(args.email, "Email is required");
    var user = {};
    if (args.id) {
        user.id = args.id;
    }
    user.email = args.email;
    user.createdAt = args.createdAt || new Date();
    user.status = args.status || 'pending';
    user.signInCount = args.signInCount || 0;
    user.lastLoginAt = args.lastLogin || new Date();
    user.currentLoginAt = args.currentLoginAt || new Date();
    user.currentSessionToken = args.currentSessionToken || null;
    user.reminderSentAt = args.reminderSentAt || null;
    user.reminderToken = args.reminderToken || null;
    user.authenticationToken = args.authenticationToken || utility.randomString();
    user.hashedPassword = args.hashedPassword || null;
    return user;
};

module.exports = User;