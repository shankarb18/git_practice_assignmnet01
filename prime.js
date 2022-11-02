function checkPrime(num){
let counter=0;
for(let i=0;i<=num;i++){
if(num%i==0){
counter++;
}
if(counter==2){
return true;
}
 return false;
}

let num=13;
let ans=checkPrime(num);
if(ans==true){
console.log('Prime Number');
}else{
console.log('Not Prime Number')
}
