/*
const dolphins =97+112+101;
const koalas=109+95+123;
const calcAverage=(a,b,c)=>(a+b+c)/3;
const dolphinsAverage=calcAverage(85,54,41);
const koalasAverage=calcAverage(23,34,27);
function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
    }else if(avgDolphins*2<=avgKoalas){
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log(`No team wins..`)
    }
}
checkWinner(dolphinsAverage,koalasAverage);
const calcTip=(billValue)=>billValue>=50&&billValue<=300? (15*billValue)/100:(20*billValue)/100;
const bills=[125,555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total=[tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];
console.log(tips);
console.log(total);
const bioData={
    firstName:`Himanshu`,
    lastName: `Lal`,
    birthYear:2002,
    job: `student`,
    location: `noida`,
    friends:[`Prashast`,`Radhika`,`Kartik`],
    hasDriverLicence:false,
    getSummary:function(){
        console.log(`${this.firstName} is ${2023-this.birthYear} - years old and has ${this.hasDriverLicence==true?"a":"no"} driver licence`);
    }
};
// console.log(`${bioData.firstName} have ${bioData.friends.length} and his best friend is ${bioData.friends[0]}`);
// bioData.getSummary();
const temp=[
    'Wrack',
    21,
    'willClearAccenture',
    ['Donnie','Radhika','Karitk'],
    true
];
const newArray=[];
for(let i=0;i<temp.length;i++){
    if(i%2==0){
        newArray[i]=temp[i];
    }else{
        newArray[i]='odd';
    }
}
console.log(newArray);
function calcAverage(arr){
    let totalSum=0;
    for(let i=0;i<arr.length;i++){
        totalSum+=arr[i];
    }
    return totalSum/arr.length;
}
const calcTip=(billValue)=>billValue>=50&&billValue<=300? (15*billValue)/100:(20*billValue)/100;
const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsAndTotals=[];
for(let i=0;i<bills.length;i++){
    const tip=calcTip(bills[i]);
    tipsAndTotals.push(`${tip} ${tip+bills[i]}`);
}
console.log(tipsAndTotals);
console.log(calcAverage(bills));
console.log()
*/

const printForecast=function(arr){
    let str=``;
    for(let i=0;i<arr.length;i++){
        str+=`...${arr[i]}\u00B0 C`;
    }
    return str;
}
const data1=[17,21,23];
const data2=[12,5,-5,0,4];
console.log(printForecast(data1));
console.log(printForecast(data2));
