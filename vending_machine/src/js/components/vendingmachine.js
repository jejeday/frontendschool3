class Vendingmachine {
    constructor() {
        const vMachine = document.querySelector(".vending-machine");
        // <div class="info-balance">잔액<span class="txt-balance">원</span></div>
        this.balance = vMachine.querySelector(".txt-balance");
        this.itemList = vMachine.querySelector(".list-item");
        this.inputCostEl = vMachine.querySelector(".inp-put");
        this.btnPut = vMachine.querySelector(".btn-put");
        this.btnReturn = vMachine.querySelector(".btn-return");
        this.btnGet = vMachine.querySelector(".btn-get");
        this.stagedList = vMachine.querySelector(".list-item-staged");

        const myinfo = document.querySelector(".my-info");
        // <div class="info-mymoney">소지금:<span class="txt-mymoney">원</span></div>
        this.myMoney = myinfo.querySelector(".txt-mymoney");
        this.gotList = myinfo.querySelector(".list-item-staged");
        this.txtTotal = myinfo.querySelector(".txt-total");
    }
    
    setup() {
        this.bindEvents();
    }

    // 선택한 음료수 목록 생성
    stagedItemGenerator(target) {
        const stagedItem = document.createElement("li");
        stagedItem.dataset.item = target.dataset.item;
        stagedItem.dataset.price = target.dataset.price;
        stagedItem.innerHTML = `
        <button type="button" class="btn-staged">
            <img src="./src/images/${target.dataset.img}" alt="" class="img-item">
            <strong class="txt-item">${target.dataset.item}</strong>
            <span class="num-counter">1</span>
        </button>
        `;
        this.stagedList.appendChild(stagedItem);
    }

    bindEvents() {
        /*
        * 1. 입금 버튼 기능
        * 입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금-입금액, 잔액 == 기존잔액 + 입금액이 됩니다.
        * 입금액이 소지금보다 많으면 실행을 중단하고 "소지금이 부족합니다." 라고 쓰인 경고창을 띄웁니다.
        * 입금액 인풋창은 초기화됩니다.
        * */
        // 키워드: 입금액(inp-put), 소지금(txt-mymoney), 잔액(txt-balance)


        this.btnPut.addEventListener("click", (event) => {
            const inputCost = parseInt(this.inputCostEl.value);
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
            const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

            if (inputCost) {
                // 입금액이 소지금보다 적다면
                if(inputCost <= myMoneyVal && inputCost > 0) {
                    // Intl.NumberFormat: 언어에 맞는 숫자 서식을 문자열로 반환합니다.(IE11부터 지원)
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + " 원";
                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal?balanceVal:0) + inputCost) + " 원";
                } else {
                    alert("소지금이 부족합니다.");
                }
                this.inputCostEl.value = null;
            }
        })
        /*
        * 2. 거스름돈 반환 버튼 기능
        * 반환 버튼을 누르면 소지금 == 소지금 + 잔액이 됩니다.
        * 반환 버튼을 누르면 잔액 창은 초기화됩니다.
        */
        
        // 키워드: 소지금(txt-mymoney), 잔액(txt-balance)

        this.btnReturn.addEventListener("click", (event) => {
            const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));

            if (balanceVal) {
                this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + " 원";
                this.balance.textContent = "원";
            }
        })
        /*
        * 3. 자판기 메뉴 기능
        * 아이템을 누르면 잔액 == 잔액 - 아이템 가격이 됩니다.
        * 아이템 가격보다 잔액이 적다면 "잔액이 부족합니다. 돈을 입금해주세요." 라고 쓰인 경고창을 띄웁니다.
        * 아이템이 획득가능 창에 등록됩니다.
        * 아이템 버튼의 data-count 값이 -1 됩니다.
        * 만약 data-count 값이 0이라면, 부모 li에 sold-out클래스를 붙여줍니다.
        */
    }
}