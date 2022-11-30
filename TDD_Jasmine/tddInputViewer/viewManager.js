class ViewManager {
    // options에는 값을 가져와야하는 요소와 값을 뿌려주는 요소를 인자로 받아올 것.
    constructor(textManager, options) {
        if (textManager.constructor !== TextManager) {
            // throw Error : 사용자 정의 에러. 에러 메시지를 반환하고 프로그램을 종료합니다.
            throw Error("textManager 객체를 전달해야합니다!");
        }

        if(!options.viewerEl || !options.btnEl || !options.inpTxt) {
            // 셋 중에 하나라도 false 이라면 경고 메세지!
            throw Error("필요한 요소중에 빈값이 존재합니다.");
        }

        this.inpTxt = options.inpTxt;
        this.veiwerEl = options.viewerEl;
        this.textManager = textManager;

        options.btnEl.addEventListener("click", () => {
            this.changeValue();
        })
    }

    changeValue() {
        this.textManager.setValue({data: this.inpTxt.value});
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }

}