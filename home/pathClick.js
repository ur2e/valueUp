const pathItems = document.querySelector("#masonry_container");
const paths = pathItems.getElementsByClassName("item");
const temp = pathItems.children[0];

//console.log(pathItems);
console.log(temp);
//console.log(paths);
function handleItemClick(event){
    console.log(event)
    //console.log(event.getAttribute("name"));
}

/*
Array.from(paths).forEach(item => 
    item.addEventListener("click", console.log(item.getAttribute("name")))
);
*/

