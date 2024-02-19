const number=[2,4,6,5,1,3]
let ascending=number.sort((a,b)=>{
  return a-b
})
let descending=number.sort((a,b)=>{
  return b-a
})
console.log(ascending);
console.log(descending);