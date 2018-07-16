function multiplicationArr(list) {

    let newlist = []

    for (let i = 0; i < list.length; i++) {

        let newel = list[i] * 2
        newlist.push(newel)
    }

    return newlist;
}

console.log(multiplicationArr([ 5 , 36 , 10 ]));