//task 1

function DoubleArray(list){
    newlist = []
    for(let val of list){
        newlist.push(val * val)
    }

    return newlist
}

console.log(DoubleArray([1, 2, 3]))

//task 2
function ObjKeyValue(Obj){
    for (let key in Obj){
        console.log(key, Obj[key])
    }
}


ObjKeyValue({"1":1, "2":2})


//task 3
function StringTimeOut(strings){
    i = 0
    for( let string of strings){
        setTimeout(()=>{
            console.log(string)
        }, i * 1000)
    i++
    }
}

StringTimeOut(["first", "second", "third"])
