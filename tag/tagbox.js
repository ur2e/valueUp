const timeTags = document.getElementsByClassName("timeTags");
    

function handleTagClick(event) {
    const tag = event.target.value;
    // 
    // 문제 엄엄 버튼과 버튼 사이를 클릭하면 tag = undefined
    //
    
}

Array.from(timeTags).forEach(tag =>
    tag.addEventListener("click", handleTagClick)
);
