var no1 : number=23;
var no2 : number=89;
var no3 : number=6;
var iRet : number=0;
    var iMax=0
    var iMin=0;
    iRet=Maximumm(no1,no2,no3);
console.log("Maximum is "+iRet);
function Maximumm(Value1:number,Value2:number,Value3:number):number
{
  
 if(Value1>Value2){
     return Value1;
 }
    else if (Value1<Value2){
       return Value2;
    }else {
        return Value3;
    }
}