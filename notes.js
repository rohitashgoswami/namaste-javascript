
     //>>>>>> Hoisting >>>>>>

/* 
    Hoisting refers to the process whereby the interpreter appears to 
    move the devlarations to the top of the code execution.

        JS only hoist declarations, not initialization.  

     */
     

         //>>>>>> Functions >>>>>>

/*
    A javascript function is a block of code designed to perform a partucular task 
     
        syntax ......

        function myFunc (parameter1, parameter2){
            //executable code
        }

        parameters behave as local variables.

        function invocation is a way to use the code inside the function..

        myFunc(2, 4);  //function invocation

    */

         //>>>>>> Scope Chain >>>>>>

/*
        The Scope chain is used to resolve the calue of variable names in Javascript.
        (konse variable me konsi value aa sakti hai )

        Scope chain in JavaScript is lexically defined,  which means that we can see what the scope chain will be by looking at the code.
        (lexically defined matlab code kaha likha hai or scope chain kaha kaha  ban rha hai )

        At the top of the scope chain is the global scope, which is the window object in the browser.
        (scope chain ke top me hamesha global scope hota hai)

        Lexical Scoping : Inner functionn can get access to their parent functions variables but parent functions can't access their chaild functions variables.
