state = 0;

const element = document.getElementById("pathboxs")


function ClickImg() {
  const clickimgname = event.target.name; 
  const minielement = event.target;

  //이미지들 각각 인식 성공. clickimgname의 이미지가
  //opacity 0.5면 1로 바꾸고 1이면 0으로 바꾸기.

  if(minielement.style.opacity == 0.5){
    minielement.style.opacity = 1;
  } else {
    minielement.style.opacity = 0.5;
  }
}

Array.from(pathboxs).forEach(tag =>
  tag.addEventListener("click", ClickImg)
);
