const marks=[89,96,98,97,85];

let largest= marks[0];

for (let i=1; i<=marks.length;i++){
    if (marks[i]>largest) {
         largest=marks[i];
    }
}

console.log(largest);