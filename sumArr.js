function sumArr(list) {

    let arr = []

    for (let i = 0; i < list.length; i++) {

        let newArr = list[i] + list[i]
        
        arr.push(newArr)

    }

    return arr;
}

console.log(sumArr([ 4 , 5 , 6 ]))