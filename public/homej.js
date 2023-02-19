const humburger = document.querySelector(".menu-btn");
const aboutPart = document.querySelector(".aboutpage");
const absvg = document.querySelector(".absvg");
const skillz = document.querySelector(".skillz");
const url1 = document.querySelector(".ul1");
const url2 = document.querySelector(".ul2");
const url3 = document.querySelector(".ul3");
const url4 = document.querySelector(".ul4");
const contactsvg = document.querySelector(".contactsvg");
const contactpage = document.querySelector(".contactpage");
const formclass = document.querySelector(".formclass");
const link_contanier = document.querySelector(".link_contanier");
let contactbtn = document.querySelector("#contactbtn");

// function formvalidator(name, email) {
//   let names = Array.from(name);
//   console.log(names);
//   let text = new RegExp(".com$", "gi");
//   if (!email.match(text)) {
//     console.log("your email address is not correct");
//   }
//   const isstring = (currentValue) => typeof currentValue === "string";

//   if (names.every(isstring)) {
//     console.log("true");
//     names = [];
//   } else {
//     console.log("false");
//     names = [];
//   }
// }

humburger.addEventListener("click", () => {
  humburger.classList.toggle("active"); // toggle means add and remove
  link_contanier.classList.toggle("active");
});

window.onscroll = () => {
  humburger.classList.remove("active");
  link_contanier.classList.remove("active");

  scroll();
};
function scroll(params) {
  if (contactpage.getBoundingClientRect().top < window.innerHeight) {
    formclass.classList.add("reveal");
    contactsvg.classList.add("reveal");
  }
  if (skillz.getBoundingClientRect().top < window.innerHeight) {
    url1.classList.add("skillzreveal1");
    url2.classList.add("skillzreveal2");
    url3.classList.add("skillzreveal3");
    url4.classList.add("skillzreveal4");
  }
  if (aboutPart.getBoundingClientRect().top < window.innerHeight) {
    aboutPart.classList.add("reveal");
    absvg.classList.add("reveal");
  }
}
