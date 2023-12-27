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
    console.log(square7);     


// >>>> Epesode 2. Hoisting >>>>> 

    getName();
    console.log(x);
    console.log(getName);
    var x = 7;

    function getName(){
        console.log("Namaste Javascrip");
    }

    

// >>>> Epesode 2. Function & Variable Environment >>>>> 
   var x = 1;
    a(); // calling the function a 
    b(); // calling the function b
    console.log(x); // ???? What the hell, why is it 1 :) ohhh it's 1 because a has internal scope for x, it's not modifying outer variable.

    function a(){
        var x = 10; // This in local valiable 
        console.log(x); //  This will print 10
    }


    function b(){
        var x = 100;
        console.log(x); // Printing 100 because here x has local scope.
    }


    // Okay let's modify it a little, 

    var x = 1;
    a();
    b();
    console.log(x); // What's the output now? => This is printing 10. Why?? because a() modified the value of x.

    function a(){
        x = 10; // Here I'm changing the OUTER variable so it will replace the value of outer x to 10
        console.log(x); //  This will print 10
    }


    function b(){
        var x = 100; // This will again print 100
        console.log(x); // This will again print 100
    } 

            //>>>>>> Scope Chain >>>>>>

        
            var a = "Hello World.."; // a is defined 

            function first() {
                var b = "Namaste JavaScript..."; // b is getting defined here but IT'S SCOPE IS INSIDE the body of this function ONLY.
                second(); // Calling second
                
                function second() {
                    var c = "Code practice.."; // c will be defined but it's SCOPE IS INSIDE the body of second function ONLY.
                    console.log(a+b+c);
                    three(); 
                }
                console.log(b);    
            }
            
            function three(){
            var d = "this will show an error..."; // d is defined here and it's scope is inside function three only
            console.log(a+b+c+d); // This will throw an error because I'm trying to access b and c which are local variables of first and second function.
            
            
               // * Error will be like this
               // * VM39:17 Uncaught ReferenceError: b is not defined.
                
            } 
            first(); // Called firsts
            

        //>>>>>> var, Let and Const >>>>>>


    //let and const can also hoiste but ye thoda alag behave karte hai 
    
    // console.log(a); //it gives us an error (ReferenceError: Cannot access 'a' before initialization)
    // let a = 10;     // (let will be stored in seprate spece)
    // var b = 100;    //(var will be atteched in global scope) 

    // we can't access let and const before initialization 
    // let and const hoiste in temporal dead zone (wo time jisme let and const hoiste hote h or jab tak initialize nahi hote hai uske bich ke  time ko temporal dead zone kahte hai)

    //  let a =10;
    //  let a = 100; it's gives us an syntaxError because let and const can't decalare multiple time with same variable

    
    
    //defferance between let and const

    // let a;
    // const b = 100;
    // a = 10;
    // console.log(a); //(it's fine because let can be inisitialize anywhere in that scope)

    // let a = 10;
    // const b; (decalared b )
    // b = 100; (assigned b) (but in case of const we can't assign value later)
    // console.log(b);  //(this is wrong kyuki const ek hi time par inisitialize karna padta hai(syntaxError ) )

    
        */
    
    //>>>>>>  Let and Const Block scope >>>>>>

    //   {
    //     var a = 10; //( stored in global scope)
    //     let b = 20; //(stored in block scope)
    //     const c = 30; //(stored in block scope)
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    //   } // (let and const {} ke bahar access nahi ho sakte)

    // console.log(a); // (it will execute but b and c can't kyuki let and const are block scope )
    // console.log(b);
    // console.log(c);
