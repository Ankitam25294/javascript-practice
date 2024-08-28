let obj = {
    firstName : "abc",
    lastName : "xyz",
    fn : function() {
        console.log(this);      // { firstName : "abc", lastName : "xyz",}
    },
    fn1 : () => {
        console.log(this);      // window  
    },

    fn2 : function() {
        let arr = [1,2,3,4];
        arr.forEach((i) => {
            console.log(i + this.firstName);   // error
    });
},
    fn3 : function() {
        let arr = [1,2,3,4];
        arr.forEach(function(i) {  
            console.log(i + this.lastName); // error
    });
}
}

// obj.fn();
// obj.fn1();
obj.fn3();



console.log('hello world')