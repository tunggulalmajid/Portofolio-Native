// nav start
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});

// nav end

// tech stack
const dataImageTech = [
  "./assets/html.png",
  "./assets/css.png",
  "./assets/tailwind.png",
  "./assets/bootstrap.png",
  "./assets/js.png",
  "./assets/py.png",
  "./assets/cs.png",
  "./assets/cpp.png",
  "./assets/pg.png",
  "./assets/canva.png",
  "./assets/figma.png",
];
document.addEventListener("DOMContentLoaded", function () {
  const btmImg = document.querySelector(".bottom-img");
  dataImg = dataImageTech
    .map((data) => {
      return `
      <img src="${data}" alt="img-tech" />
    `;
    })
    .join("");
  btmImg.innerHTML = dataImg;
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector("#menu-icon");
  const menuList = document.querySelector("#menu-list");
  menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
  });
});
