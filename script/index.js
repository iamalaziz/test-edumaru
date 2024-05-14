const button = document.getElementById("myButton");
const message = document.getElementById('myMessage');

button.addEventListener("click", () => {
    // 콘솔에 메시지 출력
    console.log("버튼이 클릭되었습니다.");

    // 버튼에 'on' 클래스 추가
    button.classList.add("on");
    
    message.classList.add('show');
});