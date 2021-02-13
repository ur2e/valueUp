/*  투두리스트 아이디어 차용
투두리스트 input : text
태그박스리스트 input : 선택된 태그박스의 name

투두리스트 아이템 :  아이콘 투두제목 >> 아이콘 누르면 delete
태그박스리스트 아이템 : 태그제목  >> 탭하면 delete
*/


const timeTags = document.getElementsByClassName("timeTags"),
    themeTags = document.getElementsByClassName("themeTags"),
    tagList = document.querySelector(".horizontal-tag-list");

function handleTimeTagClick(event) {
    const clickedTagName = event.target.name;
    const clickedTagid = event.target.id;
    // 버튼과 버튼 사이 입력하면 undefined이 입력됨.
    if(clickedTagName !== undefined ){
            // clickedTagName을 리스트에 추가해주자
        const li = document.createElement("li");
        const btn= document.createElement("button") // clickedTagName 넣어줘야함
        const id = clickedTagid;
        const name = clickedTagName;
        btn.innerText = clickedTagName;
        btn.id = id;
        btn.name = name;
        li.appendChild(btn);
        tagList.appendChild(li);
        //const tagObj = {text: clickedTagName,}
    }
}

function deleteTag(event){
    const tag = event.target;
    const li = tag.parentNode;
    tagList.removeChild(li);
}

Array.from(timeTags).forEach(tag =>
    tag.addEventListener("click", handleTimeTagClick)
);

Array.from(themeTags).forEach(tag =>
    tag.addEventListener("click", handleTimeTagClick)
);

tagList.addEventListener("click", deleteTag);