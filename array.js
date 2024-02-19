// // const number = [5,2,4,6,1,3];
// let ascending=number.sort((a, b) => a - b);
// console.log('Ascending:' +ascending);
// let descending=number.sort((a, b) => b - a);
// console.log('Descending:' +descending);
// let firstDateTime = "12/01/2022 14:00:00";
// let secondDateTime = "12/01/2021 08:00:00";
// function calculateTimeDifference(firstDateTime, secondDateTime) {
//   let firstDate = new Date(firstDateTime);
//   let secondDate = new Date(secondDateTime);
//   let difference = Math.abs(firstDate - secondDate);
//   let days = Math.floor(difference / (1000 * 60 * 60 * 24));
//   difference -= days * (1000 * 60 * 60 * 24);
//   let hours = Math.floor(difference / (1000 * 60 * 60));
//   difference -= hours * (1000 * 60 * 60);
//   let minutes = Math.floor(difference / (1000 * 60));
//   difference -= minutes * (1000 * 60);
//   let seconds = Math.floor(difference / 1000);
//   return `${days} days | ${hours} hours | ${minutes} minutes | ${seconds} seconds`;
// }
// let differenceDateTime = calculateTimeDifference(firstDateTime, secondDateTime);
// console.log(differenceDateTime);
// let input=["my","name","is","my","location","is"]
// // let unique=[]
// let duplicate=[]
// let duplicate2=[]
// let seen=[]

// for(let arr of input){
// if(!seen[arr]){
//   unique.push(arr)
//   seen[arr] = 1;
// }else{  
//   duplicate.push(arr)
//   duplicate2.push(arr)
//   duplicate2.push(arr)
// }
// }

// for(let i=0;i<unique.length;i++){    
//   const index=duplicate.findIndex(data=>data==unique[i])    
//     if(index!= -1){
//   unique.splice(index,1)
//     }  
// }
// console.log(unique);
// console.log(duplicate2);


// console.log(input);
// for (let i = 0; i < input.length; i++) {
// //  console.log(input[i]); 
//  if(input[i]==input[i+1]|| input[i]==input[i-1]){
//   duplicate.push(input[i])
//  }else{
//   unique.push(input[i])
//  }
  
// }
// console.log(unique);
// console.log(duplicate);
// function splitArray(arr) { data==unique[i] 
//   const unique = [];
//   const duplicate = [];
//   const seen = {};

//   arr.forEach(item => {
//       if (!seen[item]) {
//           unique.push(item);
//           seen[item] = 1;
//           console.log(unique);
         
        
//           // unique.splice(index,1)
//       } else {
//           duplicate.push(item);
//           unique.splice(1,2)
//           console.log('ji'); 

//       }
//   });

//   return { unique, duplicate };
// }

// const inputArray = ["my", "name", "is", "my", "location", "is"];
// const result = splitArray(inputArray);
// console.log("Unique:", result.unique);
// console.log("Duplicate:", result.duplicate);


//  let dupilcate=[]
//  let unique=[]
// for (let i = 0; i < input.length; i++) {
//   console.log(input[0],input[3]);
//   if(input[i]==input[i+3]){
//     dupilcate.push(input[i],input[i+3])
//   }else{ 
//     unique.push(input[i])
//   }
// }
// console.log(dupilcate);
// console.log(unique);
// let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
// console.log(findDuplicates());
// function flattenObject(obj, parentKey) {
//   let flattened = {};

//   for (let key in obj) {
//       if (typeof obj[key] === 'object' && obj[key] !== null) {
//           let nestedKeys = flattenObject(obj[key], `${parentKey}${key}.`);
//           flattened = { ...flattened, ...nestedKeys };
//       } else {
//           flattened[`${parentKey}${key}`] = obj[key];
//       }
//   }

//   return flattened;
// }

// let nestedObject = {
//   academics:{
//   qualification:"Btech",
//   zone:"East"
//   },
//   address:{
//   state:"KA",
//   pincode:"121211"
//   }
//   }

// let flattenedObject = flattenObject(nestedObject,'');
// console.log(flattenedObject);

// PROMISES
// userDetails=[{name:'shyam',age:565}]
// let data=new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // const ans=undefined 
//     const ans='shyam'
//     if(ans){
//       resolve(ans)
//     }else{
//       reject(new Error("No data Present"))
//     }
//   }, 100);
// })
// function getUserDetails(inputName) {
//   const userDetails=new Promise((resolve, reject) => {
  
//     setTimeout(() => {
//       console.log('i am first');
//       const userDetails=[{names:'shyam',age:565,salary:'₹50,0000'}]
//       let user=userDetails.find(user=>user.names==inputName).salary
//       if(user){
//         resolve(user)
//       }else{
//         reject('NO data')
//       }
//     })
//     }, 1000);

//   return userDetails
// }
// async function process() {
//   try {
//     let user=await data
//     let userDetail=await getUserDetails(user)
//     console.log(userDetail);
//     console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }finally{
//       console.log('finnaly');
//     } 
// }
// process()

// console.log('gkjks');
// data.then((name)=>{ 
//   // console.log(name);
//   // getUserDetails(name).then((detail)=>{// executes slower while not using return
//   //   console.log(detail);
//   // })
//      getUserDetails(name).then((detail)=>{
//     console.log(detail);
//   }).catch((error)=>{
//     console.log(error);
//   })
  
//     })
//     .catch((error)=>{
//       console.log(error.stack);
//     })
//     .finally(()=>{
//       console.log("Testing");
//     })



// // ********************************************************************
// // const h=ki([2,7,8,9],8)
// nums=[1,2,3,6]
// ta=9
// console.log(ki(nums,ta));

// function hi(arr,target){
//     for(let i = 0; i<arr.length ; i++ )
//    {
//      for(let j = i+1 ; j<arr.length ; j++)
//      {
//        if(arr[i] + arr[j] === target)
//        {
//          return [ i ,j ]
//        }
//      }
//    }
// }

// // const jaa=hi(hi,ji)
// // console.log(jaa);
// const arr = [  2 ,5 ,9 ,7 ,3 , 8 ,1 ];
// const pairOfIndices = hi(arr , 10);
// console.log(pairOfIndices);

// // *************************************************************************************************** */
// let print=function(name){
//  this.firstname=name
//   this.printname=function(){
//     return 'this is myname '+this.firstname
//   }
//   //  console.log(firstname);
// }
// const test=new print("hi")
// console.log(test.firstname);
// console.log(test.printname());
// class companyname{
//   constructor(companyname){
// this.name=companyname
//   }
//     printfirst(){
//       return 'hi my name is -' +this.name
//     }
// }
// class chennai extends companyname{
//   constructor(companyname,branch){
//     super(companyname)
//     this.names=branch
//       }
//         printfirst(){
//           return super.printfirst()+' .hi my name is -' +this.names
//         }
// }
// // let test=new companyname('js')
// // let test=new chennai("chsss","tambaram")
// console.log(test.printfirst());
// function twosum(nums,target){
// var mem={}
// for(i=0;i<nums.length;i++){
//     value=nums[i]
//   hash=target-value
//   if(mem[hash]!==undefined){
//      return [mem[hash],i]
//     console.log(mem); //{1: 0, 2: 1, 3: 2}
//     console.log( hash); // 3
//     console.log(mem[hash]);//2
    
// }
//   else{
//   //   {1: 0}
//   //   0 
//   //  {1: 0, 2: 1}
 
//   //  {1: 0, 2: 1, 3: 2}
   
//   mem[value]=i //{}
                 
//   console.log(mem,i);  
//   console.log(value);
//   console.log(mem[value]);  
//  }

// }}
// let number=[5,4,3,7]
// let ta=10;
// // const a=twosum(number,10);
// console.log(a);


// // ----reference -----------------------------------------
// // const colors=['red','orange','green','red','violet','green']
// const hi=colors.reduce((ki,ji)=>{
//     if(ki[ji]){
//          ki[ji]++
//     }else{
//         ki[ji]=1//red:1
//     }
//     return ki

// },{})
// console.log(hi);



// let m=  [3,6,2,3,3,3,2]

// function game(nums){
// let mem={}
// for(let num of nums){
//   if(!mem[num]){
//     mem[num]=1
//   }else{
//     mem[num]++
//   }
//   //  console.log( mem[num]);//num :value
//   //  console.log(num);
//   //  console.log(mem);
// }

// let cout=0
// value=0
// for(let key in mem) {
//   if(mem[key]>cout){
//     cout=mem[key]
//     value=key

//   }
  
  
// }
//  return value
// }
//  console.log(game(m));
// // console.log(mem[key]); // 2 4 1 cout 
// console.log(key); // 2 3 4
// // console.log(cout); //2 4(2)
//  console.log(key, '  ',value);  


// function rotate(nums, k) {
//   // k%=nums.length
//   let n=nums.length
//   reverse(nums,0,n-1)//[7,6,5,4,3,2,1]
//   reverse(nums,0,k-1)//[5,6,7,4,3,2,1]
//   reverse(nums,k,n-1)//[5,6,7,1,2,3,4]
//   function reverse(nums,start,end){
//     while(start<end){
//         [nums[start],nums[end]]=[nums[end],nums[start]]
//         start++
//         end--
//     }
    
//   }
  
// };

// -12

// let a=[-4,-3,-2]
// function price(nums){

// //   for (let i = nums.length-1; i >=0; i--) {
// //  console.log(nums[i]);
// //   }
// let result = -Infinity;
// let max = 1
// let min = 1
// for(let i =0; i< nums.length; i++) {
//   currentMax = Math.max(max * nums[i], min * nums[i], nums[i])
//     min = Math.min(min * nums[i], max * nums[i], nums[i], 1)
//      max = currentMax
//     result = Math.max(result, min, max)
// }    
// return result


// }
// console.log(price(a));

// num=[-1,0,1,2,-1,-4]
// function tar(nums){
//      nums.sort((a,b)=> a-b)
//     //  console.log(nums); [-4, -1, -1, 0, 1, 2]
//      if(nums.length<3) return solution
//     let solution=[]
//     left=0
//     right=nums.length-1
    
// for (let [index,number]of nums.entries()){
// // console.log(index,number,nums.entries());
// // if(number>0)return solution
// if(number===nums[index-1]) continue
// left =index+1
// right=nums.length-1
// let temp=0
// while(left<right){
// temp=number+nums[left]+nums[right]
// if(temp===0){
//     solution.push([number,nums[left],nums[right]])
//     left++
//     right--
//     // while(left<right && nums[left]=,=nums[left-1]) left++
//     //  whi le(left<right && nums[right]==nums[right-1]) right--
// }else if(temp>0) right--
// else if(temp<0) left++
// }


// }
// return solution
// };






// let x=a.length
// let sum1=0
// let sum2=0
// for(i=0;i<a.length;i++){
// sum1+=a[i][i]
// sum2+=a[i][(x-1)-i]


// }
//  return Math.abs(sum1-sum2)
// console.log(tar(num));

// // ======================================================[]
// const hi= (a)=>
// a>3?a:a.slice(0,3)+"     "+a.slice(-3)
// console.log(hi('sudarshan'));//sud     han
// //  ==================================================
//  const first=(str)=>
//  str.length%2!=0?"nan":str.slice(0,(str.length/2))

// console.log(first("sudarshan"));
// // =========================================================
// const concat=(str,str1)=>
// str.slice(1)+str1.slice(1)
// console.log(concat('abc','abc'));

// // ==========================================================
// const nearest=(a,b)=>
// a-100<b? a: b
// console.log(nearest(99,1));
// // ==============================================

// const countchars=(str,char)=>
// str.split('').filter(a=> a=== char).length
// const colors=(st,t)=>
// countchars(st,t)<=2 
// console.log(countchars('hissasa','s'));
// console.log(colors('hisasa','s'));

// const animals=(str)=>
//   str.length<3?str:str.slice(-(str.length-1))//6-1=5
//  console.log(animals('abcccc'));
// // ===========================================================
// a=[ -4, 3, -9, 0, 4, 1 ]
// // const even=(str)=>
// str.filter(num=>num%2===0&& num!=0).length
// console.log(even(a));
// // =========================================================
// // const even=(arr)=>
// arr.filter(num=>num%2==0&& num!=0)
// function arr(a){
//   b=[]
//   for(let i=0;i<=a;i++){
//    b.push(i)
//   }
//   return b
// }
// console.log(even(arr(8)));
// const ascending=(arr)=>{
//   for(i=0;i<arr.length;i++){
//     if(arr[i+1] < arr[i]) return false
  
// }
// return true
// // return true
// // console.log(arr);
// }
// console.log(ascending([2,1,0]));
// console.log(ascending([1,2,3,4,5,6]));
// ==============================================================
// let array=[ 1,2,3,4,5,6,7,9 ]
//  const largest=(arr)=>
// Math.max(...arr.filter(a=>a%2===0)) 
// console.log(largest(array));
// =========dfsdsdf===========dfhkjdshffhkfhkhafs=================================
// const replace=(str)=>
// str.toLowerCase().replace(/[a-z]/g,'$')
// console.log(replace("ABcd23"));
// ============================================================
//  const objA=`abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza`
// const hi=(a)=>
// a.split("\n").map(a=>a.split(','))
// console.log(hi(objA));
// =====================================
// const hi=()=>
// Math.floor(Math.random()*16).toString(17)
// const ji=()=>"#"+Array.from({length:6}).map(hi).join('')
// console.log(ji());
// ==================================================================
// console.log(([1,2,3,4,5].some(s=>s>3)));
// console.log(([1,2,3,4,5].every(s=>s>3)));
// ===========================================================
// const alpha=(str)=>str.split('').sort().join('')
// console.log(alpha('webmaster'));
// ================================================
// const vow=(vowel)=>{
// let coutn =vowel.match(/[aeiou]/g).length
// return coutn
// }
//  let str=["a", "e", "i", "o", "u"]
//  console.log(vow("sudas"));

// let count=0
// for( let box of vowel){
//   console.log(vowel);
//   console.log(box);
//   if(str.includes(box))
 
//   count++
// }
// return count
// }

// console.log(vow("sudarshan"));

// function simpleArraySum(arr) {
//  let positive=0
//  let lnegative=0
//  let zero=0
//  let length=arr.length
//  for(i=0;i<arr.length;i++){
//   if(arr[i]<0) negative ++
//   if(arr[i]>0) positive++
//   if(arr[i]==0) zero++
//  }
// // console.log((positive/length).toFixed(6));
// }

//  console.log(simpleArraySum(array))

// array=[ -4, 3, -9, 0, 4, 1 ]

// function simpleArraySum(arr) {
// for (let i = 1; i <= arr; i++) {
// console.log(" ".repeat(arr-i)+"#".repeat(i));
  
// }
 
// }

//  console.log(simpleArraySum(6))


//  array=[ 1, 2, 3, 4, 5 ]

// function simpleArraySum(s) {
// const arr=s.slice(0,8).split(':')
// console.log(s[0]);
// arr[0]=s.includes('PM')?
//      (arr[0]==="12")?arr[0]='12':Number(arr[0])+12:
//      (arr[0]==='12')?arr[0]='00':arr[0]
//  return arr.join(":")

// }
//  console.log(simpleArraySum("12:45:54PM"));

// let a=[73,67,38,33]
//  function simpleArraySum(s) {

//   return s.map((n)=>{
//     diff=n%5
//     if(diff>2&& n>=37){
//      n=n+(diff-1)    
//     }
//     return n
    
//   })
// //   let num=[]
// // for(i=0;i<s.length;i++){
// //   diff=5-(s[i]%5)
// //   // console.log(diff);
// //   if(diff<3&& s[i]>=37){
// //     let k=diff+s[i]
// //     num.push(k)
// //   }else{
// //     num.push(s[i])
// //   }
// // // return num
//   }
//   //  console.log(simpleArraySum(a));

// function kang(x1,v1,x2,v2){
// // console.log(...arguments);
// kan1=x1
// kan2=x2

// for(i=0;i<=10;i++){
//   kan1+=v1
//   kan2+=v2
//   console.log(kan1+":"+kan2);
// }
// }
// console.log(kang(0,3,4,2));

// let a=[2,4]
// console.log(Math.max(...a));
// let b=[16,32,96]
// function int(a,b){
//   let cout=0
//   // let c=Math.max(a)
 
//   for(let i=Math.max(...a);i<=Math.min(...b);i++){
//     // console.log(i);
//     // console.log(i);
//     if(a.every(inet=>(i%inet===0))){
//       if(b.every(inet=>(inet%i===0))){
//         cout++
//       }
//     }
//   }
//   return cout
// }
// console.log(int(a,b));

// const ip=[1,2,1,3,2]
// const tp=[4]
// const robo=(str,d,m)=>{
// let count=0
// for(let i=0;i<str.length;i++){
//  let sub=str.slice(0,3)
//  console.log(sub);


// }
// // return count
// }
// console.log(robo(ip,3,2));


// const hi=[1,3,2,6,1,2]
// function data(ar,k){
//   let count=0
//  for(let i=0;i<ar.length;i++){
// for(let j=i+1;j<ar.length;j++){
//   if((ar[i]+ar[j])%k ===0){
//       count++
//   }
// }
//  }
// return count
// }
// console.log(data(hi,3));
// const hi=[1,2,3,4,5,4,3,2,1,3,4]

//  function ar(arr){
//   const k=arr.reduce((hi,ji)=>{
//     if(hi[ji]){
//       hi[ji]++
//     }else{
//       hi[ji]=1
//     }
//     return hi
//       },{})
//       // console.log(k.map(Number));   
//       let values=Object.values(k)
//       let key=Object.keys(k).map(Number);
//       let max=Math.max(...values)
//       let min=[]
//     for(let i=0;i<values.length;i++){      
//       if(max==values[i] ){
//         min.push(key[i])
//         // console.log(key[i]);        
//       }
//          }
//    let ans=Math.min(...min)
// return ans
//  }
//   console.log(ar(hi));
//  function  year(year){
//     // Write your code here
//     let result=0
   
//     if(year==1918){
//          result = "26.09."+year;
//     }else if(year<1918 && year%4==0){
//           result = "12.09."+year;
//     }else if((year>1918 && year%400==0)|| ((year%4==0) && (year%100!=0))){
//         result = "12.09."+year;
//     }else{
//         result = "13.09."+year;
//     }
//     return result


//  }
//  console.log(year(1800))
//  ( year>1918 && ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))))
// const n=[1,2,3,4,5,6,7,8,9]
// const n1=[1,2,3,4,5,6,7,8,9]

// n.splice(0,2,50)
//     console.log(n)
    
//     console.log(n1.splice(0,2,50,40));
//     console.log(n1);


// let ranked=[100,100,50,40,40,20,10]//100 50 40 20 10
// let player=[5,25,50,120]
// ranked=Array.from(new Set(ranked))
// const  result=[]
// // console.log(ranked);
// for(let alice of player){
//   let index=ranked.findIndex(num=>num<=alice)
//   // index=index===-1?ranked.length:index

//   console.log(ranked,alice,index);

// }
// return result
//  console.log(4%2);
// function hi(n){
//   // let count=1

//   let height = 1;

        
//   for (let i = 0; i < n; i++) {
//       if (i % 2 == 0) {
//           height *= 2
//       } else {
//           height += 1;
//       }
//   }
 
// console.log(height); 
// // return height;

  
// }
// hi(4)
// console.log('---------');
// hi(3)

// function hi(a,b){
//   while(a<=b){
//     let b=Math.sqrt(a)
//     // console.log(a)
//     if(b%1==0){
// //       console.log('hi',a);
//     }
//     a++
//   // console.log(b);
   
//   }
// }
// hi(3,9)