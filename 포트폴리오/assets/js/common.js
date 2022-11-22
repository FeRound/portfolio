const item = document.querySelectorAll(".item"); //아이템
const modal = document.querySelector(".modal"); //모달창
const wrap = document.querySelector("#wrap") // 최상위부모
const modalCancelBtn = document.querySelector(".cancel-bar") // x버튼

for(let i = 0; i < item.length; i++){
  item[i].addEventListener("click",modalOn);
}

modalCancelBtn.addEventListener("click",modalOn);

function modalOn(){
  modal.classList.toggle("on");
  wrap.classList.toggle("on");
}

