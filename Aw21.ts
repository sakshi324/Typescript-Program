

//Procedural Oriented Programming(POP)

function Maximum(Arr){
    var i= 0;
    var iMax=Arr[0];
 
    for (i = 0; i < Arr.length; i++) {
        if(iMax<Arr[i]){
            iMax=Arr[i];
        
        console.log(Arr[i]);
    }
}
}

var Arr = [23,89,6,29,56,100,77,32];
Maximum(Arr);
   