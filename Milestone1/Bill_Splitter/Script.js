function calculateBill(){
const costInput=document.getElementById("cost").value;
const numPeople=parseInt(document.getElementById("people").value);

if(costInput.trim()===''||isNaN(numPeople)||numPeople<=0){
    alert("Please enter valid values for Cost of Each Dish and Number of People");

    return;
}

const costArray=costInput.split(',').map(cost=>parseFloat(cost));
const totalBill = costArray.reduce((acc, cost) => acc + cost, 0);
const amountPerPerson = totalBill / numPeople;

const billDetails = {
  totalBill: totalBill.toFixed(2),
  amountPerPerson: amountPerPerson.toFixed(2)
};

document.getElementById("result").innerHTML = `
  Total Bill: $${billDetails.totalBill}<br>
  Each person should pay: $${billDetails.amountPerPerson}
`;
}