//Default Argument


//Number of Required arguments 3

//Defaults Argument Should be trailing(From right to left)
function Demo(no1:number,no2:number=20,no3:number=12){
    console.log("Inside Demo "+no1+no2+no3);
    
}

//Demo();   Error 
Demo(10);         //no1=10;no2=20,no3=30;
Demo(10,11);      //no1=10;no2=11,no3=30;
Demo(10,11,12);   //no1=10;no2=11,no3=12;

