// Test 1

function f1(arr1, arr2) {
    let counter = 0
    let res = []
    arr1.map(el1 => {
        arr2.map(el2 => {
            if (el1 === el2) {
                counter++
            }
        })
        res.push(counter)
        counter = 0
    })

    return res
}

export { f1 }






// Test 2

function f2(string) {
    let arr = string.split(" ")
    let newArr = arr.map(el => el.replace(/[^-0-9.]/gi, "").replace(/\.$/, ""))
    newArr.forEach((el, i) => {
        if (el === "") {
            newArr.splice(i, 1)
        }
    })
    return newArr
}

export { f2 }





// Test 3

function f3(a) {
    return [a.map(el => ({ ...el }))]
}

export { f3 }






// Test4

let validation = true
function callBack() {
    console.log('i\'ve been called from Test4')
}

(function f4(cb) {
    if (validation) {
        cb()
    }
    validation = false
    setInterval(() => cb(), 300)
})(callBack)

export { f4 }