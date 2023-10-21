let string=["red","yellow","blue"];
function colorchange(num1,num2){
    if((num1==="red"&&num2==="blue")||(num1==="blue"&&num2==="red")){
        return "purple";
    }
    if((num1==="red"&&num2==="yellow")||(num1==="yellow"&&num2==="red")){
        return "orange";
    }
    if((num1==="yellow"&&num2==="blue")||(num1==="blue"&&num2==="yellow")){
        return "green";
        
            
        
    }
    else{
        console.log("invalid color combination");
    }

}
console.log(colorchange(string[2],string[3]));