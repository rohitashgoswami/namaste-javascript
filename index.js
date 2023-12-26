//.>>> Epesode 1. code execution >>>>>

/*
var n = 2;
function square (num) {
    var ans = num*num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);
var square = square(7);
console.log(square7);     */


// >>>> Epesode 2. Hoisting >>>>> 

/*

getName();
console.log(x);
console.log(getName);
var x = 7;

function getName(){
    console.log("Namaste Javascrip");
}

*/

// >>>> Epesode 2. Function & Variable Environment >>>>> 

/*
var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

*/

        //>>>>>> Scope Chain >>>>>>

    var a = "Hello World..";

    function first(){
        var b = "Namaste JavaScript...";
        second();
        
            function second(){
                var c = "Code practice..";
                console.log(a+b+c);
               // three(); 
            }
    }
    //function three(){
    //    var d = "this will show an error...";
    //    console.log(a+b+c+d);
    //} 
    first();