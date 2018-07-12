function multiplicationArr(list) {

    let Newlist = []

    for (let i = 0; i < list.length; i++) {

        let newEl = list[i] * 2

        Newlist.push(newEl)
    }

    return Newlist;
}

console.log(multiplicationArr([ 5 , 36 , 10 ]));