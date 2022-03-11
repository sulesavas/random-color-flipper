const colors=["plum","pink","grey","aqua","PapayaWhit"]
const body = document.querySelector("#body");
const button = document.querySelector(".btn");

  button.addEventListener("click", function (e) {
      body.style.backgroundColor=colors[Math.floor(Math.random() * 5)];

});
