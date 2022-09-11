

 function Maximum(Arr){
    var i= 0;
    var iMax=Arr[0];
    
    var temp=0;
    if(iMax[0]<iMax[1]){
      var lar=iMax[1];
      var  sec =iMax[0];
    }
      else{
        var lar=iMax[1];
        var  sec =iMax[0];
   }
    for (i = 0; i < Arr.length; i++) {
        if(iMax[i]>lar){
          sec=lar;
          lar=iMax[i];
        }  
        else if(iMax[i]>sec && iMax!=lar){
          sec=iMax[i];
        }
       console.log(sec);
}
}
 
var Arr = [23,89,6,29,56,77,32];
Maximum(Arr);
   





