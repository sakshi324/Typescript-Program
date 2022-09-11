function Demo(no1:number,no2?:number){
    console.log("Inside Dmeo");
    console.log("value of no1");

    if(no2!=undefined){
        console.log("Value if no2: "+no2);
        
    }
}
Demo(10,11);
Demo(10);