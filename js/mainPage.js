
function diagDivAScroll(){
    const diagDivA = document.getElementById("diag-div-a");
    diagDivA.classList.add("diag-div-a-scrolled");
    diagDivComp();
    diagDivPreComp();
}

function diagDivComp(){
    const diagDivA = document.getElementById("diag-div-comp-id");
    diagDivA.classList.add("diag-div-comp-reveal");
}

function diagDivPreComp(){
    const diagDivPreComp = document.getElementById("diag-div-precomp-id");
    diagDivPreComp.classList.add("diag-div-pre-comp-reveal");
}


var headerDesc = document.getElementById("header-desc-id");

console.log(headerDesc)
window.addEventListener("scroll", () => {
    if (this.scrollY >= headerDesc.scrollHeight) {
      diagDivAScroll();
    }
})


