AOS.init();
var upperNavProductsButton = document.getElementById("upperProductsButton");
var lowerNavProductsButton = document.getElementById("lowerProductsButton");
var alert = document.getElementById("alert");
var btnCloseAlert = document.getElementById("btnCloseAlert");
var mainButton = document.getElementById("mainButton");
var productsSectionPosition = document.getElementById('products').getBoundingClientRect().top - 50;

btnCloseAlert.addEventListener("click",()=>{
    sessionStorage.setItem("alertClosed", "true");
})
window.addEventListener("load",()=>{
    if(sessionStorage.getItem('alertClosed') !== null){
        alert.style.display = "none";
    }
})
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