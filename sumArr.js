function sumArr(list) {

    let arr = []

    for (let i = 0; i < list.length; i++) {

        let newarr = list[i] + list[i]
        
        arr.push(newarr)

    }

    return arr;
}

console.log(sumArr([ 4 , 5 , 6 ]))