
//Function Defination 
function tun(){
    console.log("Inside Fun");
    
}
//Function Call
tun();



function gun(no: number){
    console.log("Inside gun"+no);
    
}
gun(11);//Function Argument



function sun(no:number):number{
    var i:number=no;
    i++;                 //LocalVariables
   return i;
}

var ret:number=0;
var a:number=10;
ret=sun(a);

console.log("Return Value is :"+ret);
 

//tsc FunctionDemo.ts   //step 1(transpile.ts to js)

//node Functions.js    //step 2(Execute.js)