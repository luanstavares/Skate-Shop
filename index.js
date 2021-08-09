 const arco = document.querySelector(".circleSelector");
 const deck = document.querySelector("#deck");

document.querySelector(".productEffect").addEventListener("mouseenter", () => {
    gsap.to(arco, {duration: 0.55, x: "200px", transform: "scale(1)", ease: Power2.easyIn});
    gsap.to(deck,{duration: 0.4, transform: "scale(1.05)", ease: Power2.easyInOut});
}); 

 document.querySelector(".productEffect").addEventListener("mouseleave", () => {
    gsap.to(arco, {duration: 0.55, x: "-50px", transform:"scale(0)", ease: Power2.easyIn});
    gsap.to(deck,{duration: 0.4, transform: "scale(1)",ease: Power2.easyInOut});
}); 