Date()

let d = new Date()
d.getDate() // 1부터 시작합니다.
13
d.getMonth() // 0월부터 시작합니다. +1해야 합니다.
9
d.getDay() // 0부터 시작합니다. 0은 일요일입니다.

switch (d.getDay()) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    default:
        break;
}