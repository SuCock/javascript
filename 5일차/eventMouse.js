document.addEventListener("DOMContentLoaded",function(){ 
  document.addEventListener("click", function(aa){
    console.log(aa);
    let img = document.querySelector("img");
    img.style.left = aa.clientX + 'px';  //px는 단위
    img.style.top = aa.clientY + 'px';   //mousemove의 function의 속성명.이벤트(이름을 안넣으면 event.이벤트)
  })
})