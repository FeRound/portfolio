const item = document.querySelectorAll(".item"); //아이템
const modal = document.querySelector(".modal"); //모달창
const wrap = document.querySelector("#wrap") // 최상위부모
const modalCancelBtn = document.querySelectorAll(".cancel-bar") // x버튼

for(let i = 0; i < item.length; i++){
  item[i].addEventListener("click",modalOn);
}

for(let i = 0; i < modalCancelBtn.length; i++){
  modalCancelBtn[i].addEventListener("click",modalOn);
}

function modalOn(){ // 모달 창 띄우기
  modal.classList.toggle("on");
  wrap.classList.toggle("on");
  
  let modalName = this.dataset.name;
  modalInner(modalName)
  console.log(modalName)
}

// function modalOff(){// 모달 창 닫기
//   modal.classList.remove("on");
//   wrap.classList.remove("on");
// }

function modalInner(i){ // 모달 창 내 컨텐츠 삽입
  const e = document.querySelector(`.${i}`);
  e.classList.toggle("active");
}

