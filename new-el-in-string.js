function padIt(str,n){
  let resultat = str
  let i = 0
  while  (i < n) {
  if (i % 2 === 0) {
  str = `*${resultat}`
  } else {
  resultat = `${resultat}*`
  }
  i+=1
  }
  return resultat
}

/*  function padIt(str,n){
    while(n>0){
      if(n%2 === 0) {
        str = str + "*";
      }else{
        str = "*" + str;
      }
      n --;
    }
    return str;
  } */