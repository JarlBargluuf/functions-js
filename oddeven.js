/*function pickIt(arr){
  let odd=[],even=[];

  for (let i = 0; i < arr.length; i++) {
  if (i % 2 != 0) {
  odd.push(i) 
  } else {
  even.push(i)
  }
}  
  return [odd,even];
} - не верно*/



function pickIt(arr){
  let odd=[]
  let even=[];
  for (i of arr) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  
  return [odd,even];
}