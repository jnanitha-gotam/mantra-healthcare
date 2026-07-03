// =========================
// NovaCare Medical Centre
// script.js
// =========================

// Sticky Navbar

window.addEventListener("scroll", function () {

const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {

navbar.style.padding = "12px 8%";
navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";

} else {

navbar.style.padding = "18px 8%";
navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

document.querySelectorAll(
".service-card,.doctor-card,.testimonial-card,.faq-box,.emergency-card,.counter-box"
).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .8s ease";

observer.observe(el);

});

// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#14B8A6";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});