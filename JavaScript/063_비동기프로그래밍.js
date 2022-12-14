// 얄코님의 비유
// 동기
// 성진: 청소기 돌리고(10시)
// 성진: 빨래하고(11시)
// 성진: 설거지하고(12시)
// 성진: 요리한다(13시)

// 비동기
// 성진: 청소기 돌리고(10시)
// 성진: 빨래하고(10시)
// 성진: 설거지하고(10시)
// 성진: 요리한다(10시)

const one = '1';
const two = '2';
const three = '3';

console.log(one);

setTimeout(() => {
    console.log(two);
},0);

console.log(three);
// 1
// 3
// 2

// 싱글쓰레드
// 일할 수 있는 녀석이 1명 -> JS

// 멀티쓰레드
// 일할 수 있는 녀석이 여러 명 -> 다른 언어 대부분이 지원합니다.

// 우리가 이런 비동기 프로그래밍을 왜 알아야 하고, JavaScript의 실행 구조는 왜 알아야 하는가? 순차적으로 실행되지 않기 위해서

one() // 페이지 로드하고
two() // 서버에서 이미지와 상세 데이터를 받아오고(예 - http://test.api.weniv.co.kr/mall) - 1분(몇분이 걸릴지 모름))
three() // 읽어온 데이터를 뿌려준다
four() // 페이지에 정적 데이터 로드