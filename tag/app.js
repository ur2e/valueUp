// html5의 한 요소, 캔버스 안에 있ㄴ느 픽셀들을 다룸 
const canvas = document.getElementById("jsCanvas");
// 캔버스 안의 픽셀들을 컨트롤함
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";

/*
console.log(colors); 결과 : HTMLCollection 
우리는 이걸 array로 다루고 싶다 
>> Array.from(colors); object로부터 array를 만드는 함수
*/


// 실제 픽셀사이즈를 넘겨주어야한다... pixel modifier
// 캔버스 크기 가져오기
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

// 우리가 그릴 선 들의 색과 너비 
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

// 클릭하지 않고 떠다니는 건 path를 만들다
// path : line, 선의 시작 점
function startPainting(){
    painting = true;
}

// 캔버스 위에서 마우스 움직임 감지
// path의 이전 위치랑 연결됨 = 계속 그리는 것처럼 보임
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){ // painting === false
        ctx.beginPath(); // 경로 생성
        ctx.moveTo(x, y); // 선 시작 좌표
        console.log(" PATH ", x, y);
    } else{ // 마우스르 누르는 순간 painting = T // 마우스 뗴는 순간 painting = F
        ctx.lineTo(x, y); // 선 끝 좌표
        ctx.stroke(); // 선 그리기
        console.log(" 롸롸로라롸로라")
    }
    // console.log(event); clientX : 스크린에서의 마우스 좌표, offsetX: canvas에서의 마우스 좌표
}

/* 마우스 떼면 painting 종료 
function onMouseUp(event){
    stopPainting(); // 실제로 그리는 line이 필요해서 함수로 종료 호출
}
*/

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;    
    ctx.lineWidth = size;
    
    // console.log(event) 해서 원하는 값 찾기
}

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else { // filling이 False였다가 True가 될 때
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(event){
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleCM(event){
    event.preventDefault();
}

function handleSaveClick(event){
    const image = canvas.toDataURL(); // default = png
    // const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image; // image URL
    link.download = "PaintJS[🎨]"; // image name
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    // 캔버스에 mousedown(누르는 순간)하면 painting=True로
    // click(눌렀다가 떼는 순간) != mousedown(누르는 순간)
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    // 마우스가 캔버스 밖으로 나가도 painting 종료
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    // 마우스 우클릭 방지
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);

/*
Array.from(colors).forEach(potato =>
    potato.addEventListener("click", handleColorClick)
);
*/

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}