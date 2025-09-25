const preview = document.getElementById("preview");
const desktopBtn = document.getElementById("desktopBtn");
const ipadBtn = document.getElementById("ipadBtn");
const mobileBtn = document.getElementById("mobileBtn");

// Default: desktop active
desktopBtn.classList.add("active-icon");

desktopBtn.onclick = () => {
    preview.className = ""; // reset
    desktopBtn.classList.add("active-icon");
    ipadBtn.classList.remove("active-icon");
    mobileBtn.classList.remove("active-icon");
};

ipadBtn.onclick = () => {
    preview.className = "ipad-view"; // you can style ipad in CSS
    ipadBtn.classList.add("active-icon");
    desktopBtn.classList.remove("active-icon");
    mobileBtn.classList.remove("active-icon");
};

mobileBtn.onclick = () => {
    preview.className = "mobile-view"; // already working
    mobileBtn.classList.add("active-icon");
    ipadBtn.classList.remove("active-icon");
    desktopBtn.classList.remove("active-icon");
};
