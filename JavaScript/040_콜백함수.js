// callback function

function sum(x, y, 콜백함수){
    콜백함수(x+y);
    return x + y
}

function documentWriter(s){
    document.write('콜백함수', s)
}

// sum(10, 20, console.log)
sum(10, 20, documentWriter) // documentWriter라는 함수가 3번째 줄 콜백함수에 전달. 함수를 아규먼트로 전달

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

let arr = [10, 20, 30, 40, 50]
arr.map(제곱)

function 제곱(x){
    return x ** 2
} // x => x**2
arr.map(x => x**2)

function 두배(x){
    console.log(x * 2)
}

let arr = [10, 20, 30, 40, 50]
arr.forEach(두배)


//////////
// 문제: 화살표 함수를 사용해서 아래 map 과 동일한 기능을 하는 forEach문을 완성해주세요.
let arr = [10, 20, 30, 40, 50]
arr.map(x => x**2)

let result = []
arr.forEach(x => {
    result.push(e ** 2)
})
console.log(result)