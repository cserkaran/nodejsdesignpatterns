exports.randomString = function(length) {
    var stringLength = length || 12;
    var chars = '0123456789ABCDEFFHIJKLMNOPQRSTUVWXYZabcdefghiljklmnopqrstuvwxyz';
    var result = '';
    for (var i = 0; i < stringLength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        result += chars.substring(rnum, rnum + 1);
    }
    return result;
};