let goods = [
  { no: "1", title: "스프링", price: 40000, desc: "스프링은 프레임워크" },
  { no: "2", title: "자바", price: 25000, desc: "자바는..." },
  { no: "3", title: "SQL", price: 32000, desc: "sql도 언어" },
];
let cartlist = [];
makeTag();
//조회
function makeTag() {
  for (let i = 0; i < goods.length; i++) {
    let tag = `<div class="card" data-no=${goods[i].no}>
      <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width: 100%" />
      <h1>${goods[i].title}</h1>
      <p class="price">${goods[i].price}</p>
      <p>${goods[i].desc}</p>
      <p><button class = "cart">Add to Cart</button></p>
      <p><button class = "del">Delete from Cart</button></p>
      </div>;`;
    document.querySelector("#list").innerHTML += tag;
  }
}
//장바구니
document.querySelector("#list").addEventListener("click", function (ev) {
  let btn = ev.target;
  if (btn.classList.contains("cart") == "BUTTON") {
    let price = btn.closest(".card").querySelector(".price").innerHTML;
    console.log(price);
  } else if (btn.classList.contains("del")) {
    //삭제
    let idx = btn.closest(".card").getAttribute("data-no");
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].no == idx) {
        goods.splice(i, 1);
        break;
      }
    }
    console.table(goods);
    btn.closest(".card").remove();
  }
});

//가격계산
