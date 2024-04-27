
export default function navScroll() {
    
 const navEl = document.querySelector(".navbar");
 window.addEventListener("scroll", () => {
   if (window.scrollY >= 56) {
     navEl.classList.add("nav-scroll");
   } else if (window.scrollY < 56) {
     navEl.classList.remove("nav-scroll");
   }
 });
}

