//Optional Argument


 function Demo(no1:number,no2?:number){
    console.log("Inside Demo");
    console.log("Value of no1 :"+no1);
      //function=Calley
                 if(no2!=undefined){
                     console.log("Value of no2 :"+no2);
                     
                 }                        //main=Caller
}

Demo(10,11);  //no1=10,no2=11

Demo(10);   //no1=10 no2=undefined


  
