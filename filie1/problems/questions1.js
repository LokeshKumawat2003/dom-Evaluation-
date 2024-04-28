const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

function rearrangeFruits  (arr){
  let removeFrout=arr.splice(-4)
arr.splice(0,0,"kiwi","Peach","Watermelon","Strawberry");
  console.log(arr)
}
  rearrangeFruits (fruits)
