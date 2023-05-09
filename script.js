const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");

let isDragging = false;

const showBottomSheet = () => {
    bottomSheet.classList.add("show");
}
const hideBottomSheet = () => {
    bottomSheet.classList.remove("show");
}

const dragging = (e) => {
    if (!isDragging) return;
    sheetContent.style.height = `${e.pageY}vh`;
    console.log(e.pageY)
}

dragIcon.addEventListener("mousemove", dragging);

showModalBtn.addEventListener("click", showBottomSheet);
sheetOverlay.addEventListener("click", hideBottomSheet);