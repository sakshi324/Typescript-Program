//Object Oriented Programming(OOP)

//class Defination
class Arithmatic{

    //charecterisctics

    No1 :number;   
    No2:number;

    constructor(a:number,b:number){
     this.No1=a;
     this.No2=b;
      }
 Addition(){              //Behaviour
        var Ans:number=0;
        Ans=this.No1+this.No2;
        return Ans;
    }
 Substraction(){
        var Ans:number=0;  //Local Variable
        Ans=this.No1-this.No2;
        return Ans;
    }
    Multipilcation(){
        var Ans:number=0;  //Local Variable
        Ans=this.No1*this.No2;
        return Ans;
    }
   Division(){
        var Ans:number=0;  //Local Variable
        Ans=this.No1/this.No2;
        return Ans;
    }
}
  var obj1=new Arithmatic(10,5);
  var obj2=new Arithmatic(10,4);
 // var obj3=new Arithmatic(10,5);
 // var obj4=new Arithmatic(10,5);

  var Ret:number=0;

Ret=obj1.Addition();
console.log("Answer is "+Ret);

Ret=obj1.Substraction();
console.log("Answer is " +Ret);

Ret=obj1.Multipilcation();
console.log("Answer is " +Ret);

Ret=obj1.Division();
console.log("Answer is " +Ret);

Ret=obj2.Addition();
console.log("Answer is "+Ret);

Ret=obj2.Substraction();
console.log("Answer is " +Ret);

Ret=obj2.Multipilcation();
console.log("Answer is " +Ret);

Ret=obj2.Division();
console.log("Answer is " +Ret);
