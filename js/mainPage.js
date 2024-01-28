var captionStatus = true;

function diagDivAScroll(){
    const diagDivA = document.getElementById("diag-div-a");
    diagDivA.classList.add("diag-div-a-scrolled");
    diagDivComp();
}

function diagDivComp(){
    const diagDivA = document.getElementById("diag-div-comp-id");
    diagDivA.classList.add("diag-div-comp-reveal");
}

function revealCaption(){
    const caption = document.getElementById("caption");
    console.log(captionStatus);
    if(captionStatus === true){
        caption.classList.add("caption-hide")
        caption.classList.remove("caption-reveal");
        captionStatus  = false;
    }
    else{
        caption.classList.add("caption-reveal");
        caption.classList.remove("caption-hide");
        captionStatus  = true;
    }
}

var headerDesc = document.getElementById("header-desc-id");

console.log(headerDesc)
window.addEventListener("scroll", () => {
    if (this.scrollY >= headerDesc.scrollHeight + 1500) {
      diagDivAScroll();
    }
})


