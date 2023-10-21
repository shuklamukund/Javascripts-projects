const numbers=[3,9,18,20];
let result=[];
function checkDivisibility(numbers){
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%3===0 &&numbers[i]%6!==0){
          result.push(numbers[i]);
        }
    }
    return result;
}
const ans=checkDivisibility(numbers);
console.log(ans);