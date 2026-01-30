// Typing animation
const text = "Computer Science Engineering Student | Web Developer";
let i = 0;
function type(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 55);
  }
}
type();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", ()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 120){
      el.classList.add("active");
    }
  });
});
