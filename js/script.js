const menubar = document.querySelector(".menu-bar");
const menu = document.querySelector("#menu");
const closeButton = document.querySelector(".close");
const button1 = document.querySelector(".menu-button1");
const button2 = document.querySelector(".menu-button2");
const inventory = document.querySelector(".inventory-menu");

menu.addEventListener("click", function () {
  // menu.classList.toggle("is-active");
  menubar.classList.toggle("active");
});
closeButton.addEventListener("click", function () {
  // menu.classList.toggle("is-active");
  menubar.classList.toggle("active");
});

button1.addEventListener("click", function () {
  // menu.classList.toggle("is-active");
  inventory.classList.toggle("active");
});

let PersonalDetails = document.querySelector(".settings");
document.querySelector(".login-icons").onclick = () => {
  PersonalDetails.classList.toggle("active");
};

document.querySelector(".inventory-menu-button").onclick = () => {
  inventory.classList.toggle("active");
};

let inventorynav = document.querySelector(".inventory");
document.querySelector(".inventory").onclick = () => {
  inventorynav.classList.toggle("active");

  System.classList.remove("active");
  calculator.classList.remove("active");

  // if (inventorynav.className != "nav inventory active") {
  //   // menubutton1.classList.remove("active");

  // }
};

let menubutton1 = document.querySelector(".myMenu-button");
menubutton1.onclick = () => {
  console.log(inventorynav.className);
  menubutton1.classList.toggle("active");
  if (inventorynav.className == "nav inventory active") {
    document.querySelector(".inventory-menu").style.display = "block";
    inventorynav.classList.remove("active");
  } else {
    document.querySelector(".inventory-menu").style.display = "none";
    menubutton1.classList.remove("active");
  }
  // menubutton1.classList.toggle("active");
};

let calculator = document.querySelector(".calculator");
document.querySelector(".calculator").onclick = () => {
  calculator.classList.toggle("active");
  System.classList.remove("active");
  inventorynav.classList.remove("active");
};

let System = document.querySelector(".System");
document.querySelector(".System").onclick = () => {
  System.classList.toggle("active");
  calculator.classList.remove("active");
  inventorynav.classList.remove("active");
};

let nav = document.querySelectorAll(".nav");
document.querySelectorAll(".nav").onclick = () => {
  nav.classList.toggle("active");
};

// let System = document.querySelector(".System");
// document.querySelector(".System").onclick = () => {
//   System.classList.toggle("active");
// };
