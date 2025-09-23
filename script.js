const preview = document.getElementById("preview");
const desktopBtn = document.getElementById("desktopBtn");
const mobileBtn = document.getElementById("mobileBtn");

// Default: desktop active
desktopBtn.classList.add("active-icon");

desktopBtn.onclick = () => {
    preview.classList.remove("mobile-view");
    desktopBtn.classList.add("active-icon");
    mobileBtn.classList.remove("active-icon");
};

mobileBtn.onclick = () => {
    preview.classList.add("mobile-view");
    mobileBtn.classList.add("active-icon");
    desktopBtn.classList.remove("active-icon");
};