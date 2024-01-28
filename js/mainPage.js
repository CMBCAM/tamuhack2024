
function diagDivAScroll(){
    const diagDivA = document.getElementById("diag-div-a");
    diagDivA.classList.add("diag-div-a-scrolled");
    diagDivComp();
}

function diagDivComp(){
    const diagDivA = document.getElementById("diag-div-comp-id");
    diagDivA.classList.add("diag-div-comp-reveal");
}

var headerDesc = document.getElementById("header-desc-id");

console.log(headerDesc)
window.addEventListener("scroll", () => {
    if (this.scrollY >= headerDesc.scrollHeight + 500) {
      diagDivAScroll();
    }
})


