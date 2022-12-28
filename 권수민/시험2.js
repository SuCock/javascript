let users = [
  { userno: "100", email: "aa@b.com", username: "김기자", point: 250 },
  { userno: "101", email: "bb.yedam.ac", username: "이순신", point: 150 },
  { userno: "102", email: "cc.naver.com", username: "을지문덕", point: 100 },
];

function makeTag() {
  list.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    list.innerHTML += `<tr>
  <td>${users[i].userno}</td>
  <td>${users[i].email}</td>
  <td>${users[i].username}</td>
  <td class="point">${users[i].point}</td>
  <td>
    <button>삭제</button>
  </td>
</tr>`;
  }
}
makeTag();
list.addEventListener("click", function (ev) {
  if (ev.target.nodeName == "BUTTON") {
    /* let no = ev.target.closest("tr").children[1].innerText;
    for (let i = 0; i < users.length; i++) {
      if (users[i].no == no) {
        users.splice(i, 1); */
    ev.target.closest("tr").remove();
  }
});

btnAdd.addEventListener("click", function (ev) {
  let obj = {
    userno: userno.value,
    email: email.value,
    username: username.value,
    point: point.value,
  };
  if (!inputCheck()) {
    return;
  }
  users.push(obj);
  makeTag();
  innputClear();
});

btnSum.addEventListener("click", function () {
  //totalPoint.push(pointTotalCalc);
  let total = 0;
  for (let i = 0; i < users.length; i++) {
    total += users[i].point * 1;
  }
});
/* function pointTotalCalc() {
  let total = 0;
  for (let i = 0; i < users.length; i++) {
    total += users[i].point * 1;
  }
} */
function inputCheck() {
  if (email.value == "") {
    alert("이메일");
    email.focus();
    return false;
  }
  return true;
}
function inputClear() {
  usersno.value = "";
  email.value = "";
  usersname.value = "";
  point.value = "";
}
