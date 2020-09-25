  function feetToMile(input){
      if(input>0){
          var result=input*0.000189393939;
          return result;
      }
      else{
          return ("feet can't be negative");
      }
      
  }
  var result=feetToMile(-30);
  console.log(result);

//   end of first task

// starting woodCalculator

function woodCalculator(inputChair, inputTable, inputBed){

   var chair=inputChair*1;
   console.log(chair,"qubic wood needed to make these amount of chair");

   var table = inputTable*3;
    console.log (table,"qubic wood needed to make these amount of table");

    var bed= inputBed*5;
    console.log (bed,"qubic wood needed to make these amount of bed");



}
var  result= woodCalculator(3,3,3);


//end of 2nd task

// starting 3rd task

function brickCalculator(input){
    if(input<=0){
        console.log("BUILDING CANT BE NEGATIVE OR EMPTY")
    }
    else if(input<=10){
        var result=input*15*1500;
        console.log(result, "pcs brick needed to make this building");
    }
    else if(input>=20){
        var second=input-10;
        var result=second*12*1500;
        var total= 225000+result;
        console.log(total, "pcs brick needed to make this building");
    }
    else{
         
        var last=input-20;
        var third= last*10*1500;
        var result=405000+third;
        console.log(result, "pcs brick needed to make this building");
    }

}
var brick= brickCalculator(100);

//END OF THIRD TASK

//STARTING 4TH TASK


function tinyFriend(){
    var small=tinyFriend[0];
    for(i=0; i<tinyFriend.length; i++){
    element=tinyFriend[i];
    if(element.length<small.length){
        small=element;
        console.log(small);
    }
    
}

}
var names= ["rahman", "rahim", "abuhasnath"];
var result= tinyFriend(names);




   