let book= {
    책이름: 'javaScript',
    책가격: 1000,
    저자: '홍길동',
    출판일: '22.10.11'
}

let newBook = {}

newBook['책이름'] = 'JavaScript' // 예를 들어 form에서 입력 받은 값
book['책가격'] = 1000000
book['저자'] = '하늘, 파랑, 보라'
book['출판일'] = '22.10.30'

// new 키워드를 사용했을 경우
function Book(책이름, 책가격, 저자, 출판일){
    // this = {}
    this.책이름 = 책이름 // 앞과 뒤는 다른 변수 디스는 펑션이라는 자신을 가리키고 있는 것
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    // return this
}

// 생성자 함수는 왜 쓸까? 객체를 쉽게 만들기 위해서. 찍어내는 용도(프로퍼티들의 집합을 만들 때 사용). 함수도 들어갈 수 있습니다.

// let data = Book('CSS', 10, '연두', '22.12.30')
// console.log(data) // undefined

// let data = new Book('CSS', 10, '연두', '22.12.30')
// console.log(data) // new는 객체를 찍어내는 용도로 사용할 수 있으며, 메모리 효율도 가지고 있다.

let book1 = new Book('HTML', 10, '노랑', '22.12.30')
let book2 = new Book('CSS', 20, '노랑', '23.12.30')
let book3 = new Book('JS', 30, '노랑', '24.12.30')

console.log(book1, book2, book3)

그 아래 못쓴듯
