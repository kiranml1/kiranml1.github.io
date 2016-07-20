var getVar = function (obj) {
    for(var key in this) {
        if(obj === this[key]) return key;
    }
};
foo = 'foo';
console.log( getVar(foo) ); // => 'foo'