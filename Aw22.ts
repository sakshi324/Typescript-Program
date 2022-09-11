function Maximum(Arr):number{
    var i= 0;
    var iSum=0;
    for (i = 0; i < Arr.length; i++) {
     
          iSum=Arr[i]+iSum;
        
   
    }
    return iSum;
}
var Arr = [23,6,7,4,5,7];
var iRet:number=0;

iRet=Maximum(Arr);

 console.log(iRet);
 



