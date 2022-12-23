
let book=[
  { no : 'inbn0002', title : '스프링',
    writer:'김기자', price : 40000},
  { no : 'inbn0003', title : '자바',
    writer : '이순신', price:25000},
  { no : 'inbn0004', title : 'SQL',
    writer:'을지문덕', price:32000}
]

  function booksMake (){
    list.innerHTML = "";
    for (let i = 0; i<book.length; i++){
      list.innerHTML += ` <tr>
        <td><input type="checkbox"></td>
        <td>${book[i].no}</td>
        <td>${book[i].title}</td>
        <td>${book[i].writer}</td>
        <td class="price">${book[i].price}</td>
        <td><button>삭제</button></td>
      </tr>`
    }
  };
//배열의 데이터로 태그 그리기
booksMake();
priceTotalCalc();
//삭제버튼 클릭
list.addEventListener("click", function(ev){
  if(ev.target.nodeName == "BUTTON") {
    // ev.target.closest("tr").remove();
    
    //배열에서 삭제
    let no = ev.target.closest("tr").children[1].innerText
    for(let i = 0; i<book.length; i++){
      if( book[i].no == no){
        book.splice(i,1);
      }
    }

    //태그 그리기
    booksMake();

    //가격 계산
    priceTotalCalc();
  }
})
  
//추가버튼 클릭
btnAdd.addEventListener("click",function(ev){
 let addObj = { no : no.value, 
                title : title.value,
                writer : writer.value, 
                price : price.value}
      
      //입력값 체크
      if( ! inputCheck()){
         return;
       }
      //배열에 추가
      book.push(addObj);

      //금액 계산
      priceTotalCalc();

      //배열에 내용을 태그로 그리고
      booksMake();

      //텍스트필드 클리어
      inputClear();
})

//총금액 계산
function priceTotalCalc(){
  let total = 0;
  for(let i=0; i<book.length; i++){
      total += parseInt(book[i].price);
  }
  totalPrice.innerHTML = total;
}

function inputCheck(){
  if(no.value == "" ){
    alert("도서번호");
    no.focus();
    return false;
  }
  if(title.value == "" ){
    alert("도서명");
    title.focus();
    return false;
  }
  if(writer.value == "" ){
    alert("저자");
    writer.focus();
    return false;
  }
  if(price.value == "" ){
    alert("가격");
    price.focus();
    return false;
  }
  return true;
}

function inputClear(){
  no.value = "";
  title.value = "";
  writer.value = "";
  price.value = "";
}
    