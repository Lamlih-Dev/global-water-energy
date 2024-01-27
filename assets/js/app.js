AOS.init();
var upperNavProductsButton = document.getElementById("upperProductsButton");
var lowerNavProductsButton = document.getElementById("lowerProductsButton");
var mainButton = document.getElementById("mainButton");
var productsSectionPosition = document.getElementById('products').getBoundingClientRect().top - 50;

upperNavProductsButton.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0,productsSectionPosition);
});
lowerNavProductsButton.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0,productsSectionPosition)
});
mainButton.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0,productsSectionPosition)
});