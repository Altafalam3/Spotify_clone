function myFunction(x) {
  x.classList.toggle("change");
}
    
  const navSlide = () => {
    const burger = document.querySelector(".containerr");
  
    const nav = document.querySelector(".nav-menu");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
  };
  
  navSlide();