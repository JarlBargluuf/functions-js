function pow( x , n ) {

    let number = x

    for ( let i = 1; i < n; i++) {

        number *= x
    }
    
    return number
}

console.log(pow( 2 , 3 ))