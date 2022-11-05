class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    loadData(callback) {
        const requestObj = new XMLHttpRequest(); // 서버와 통신하기 위해 객체를 생성합니다.
        requestObj.open('GET', 'src/js/item.json'); // 요청 시작
        requestObj.onreadystatechnage = () => { // readyState가 변화하면 트리거
            if (requestObj.readyState === 4 && requestObj.status === 200) {
                callback(JSON.parse(requestObj.responseText));
            }
        }
        requestObj.send(null);
    }

    colaFactory(data) {
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = ``
        })
    }
}