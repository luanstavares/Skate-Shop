const arco = $(".circleSelector");
const deck = $("#deck");
const item = $(".item");
const list = $("#brands li");
var vectorBrands = [];
var i = 0;

list.each(function () {
    i = list.index(this);
    vectorBrands[i] = this.id;
});

/* alert(JSON.stringify(vectorBrands)); */

document.querySelector(".productEffect").addEventListener("mouseenter", () => {
    gsap.to(arco, { duration: 0.4, x: "200px", transform: "scale(1)", ease: Power2.easyIn });
    gsap.to(deck, { duration: 0.3, transform: "scale(1.1)", ease: Power2.easyInOut });
    gsap.to(list, { delay: 0.5, duration: 0.15, transform: "scale(1)", ease: Power2.easyInOut });

});




document.querySelector(".productEffect").addEventListener("mouseleave", () => {
    gsap.to(arco, { duration: 0.55, x: "-50px", transform: "scale(0)", ease: Power2.easyIn });
    gsap.to(deck, { duration: 0.4, transform: "scale(1)", ease: Power2.easyInOut });
    gsap.to(list, { duration: 0.4, transform: "scale(0)", ease: Power2.easyInOut });
});