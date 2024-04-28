var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation",price:20000, rating:5}
];
let avg=0;
let pri=amazon.length
function avrage(amazom){
for(let i=0;i<amazom.length;i++){
avg+=amazom[i].rating;
pri =Math.min(amazon[i].price)
}
console.log(avg/pri ,pri)
}
avrage(amazon)
