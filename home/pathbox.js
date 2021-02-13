state = 0;

function ClickImg() {
  var element = document.getElementById("jsimg")
  var vvalue = document.getElementById("jsimg").value;

  console.log(vvalue);
  if(state%2 == 0) {
      element.style.opacity = 0.5;
    }
  else {
      element.style.opacity = 1;
    }
  state = state+1; 
}