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
  "./assets/flutter.png",
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

// card-projek
const dataProject = [
  {
    img: "./assets/ClonePahamify.png",
    title: "Company Profile",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nam.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quam est impedit distinctio iste sit numquam
            assumenda ratione dolore expedita, voluptas ipsam minus iure ab
            suscipit dolor temporibus esse, quia obcaecati incidunt eaque omnis
            facere quidem doloribus aut? Tenetur alias aperiam repellendus`,
    linkRepo:
      "https://github.com/tunggulalmajid/pahamify-clone-tailwind-jquery",
    linkWEb: "https://pahamify-clone-tailwind-jquery.vercel.app/",
  },
  {
    img: "./assets/CPBelajarLawos.png",
    title: "Company Profile",
    desc: `Lawos Coding merupakan website company profile yang saya buat sebagai project pembelajaran dalam memahami library css yaitu bootstrap. Didalam Project ini hanya menggunakan html css dan juga beberapa library pendukung berupa bootstrap, animate, aos, dan juga font awesome.`,
    linkRepo: "https://github.com/tunggulalmajid/tunggullawos.github.io",
    linkWEb: "https://tunggulalmajid.github.io/tunggullawos.github.io/",
  },
  {
    img: "./assets/HealthyHeroes.png",
    title: "Healthy Heroes",
    desc: `Helathy Heroes merupakan sebuah software untuk membantu usernya agar memiliki pola hidup sehat, Software ini  merupakan software  berbasis mobile yang menggunkan frawework flutter sebagai pembangunnya. Software ini memiliki fitur antara lain Kalkulator Kalori, Kalkulator BMI, Monitoring Kalori Harian, Jadwal Makanan, dan Referensi Makanan. Untuk Sementara ini Healthy Heroes hanya berfokus dalam front end nya saja dan back end nya belum diselesaikan dan untuk fitur yang telah selesai adalah kalkulator kalori dan kalkulator BMI`,
    linkRepo: "https://github.com/tunggulalmajid/ItDevEros",
    linkWEb: "https://github.com/tunggulalmajid/ItDevEros",
  },
  {
    img: "./assets/Ecoranger.png",
    title: "Eco Ranger",
    desc: `Ecoranger merupakan Software yang berfungsi untuk membantu pengelolaan sampah yang ada dalam masyarakat, Ecoranger disini  berperan dalam menghubungkan antara penjual sampah dengan pengepulnya sehingga transaksi yang terjadi antara keduanya dapat dilakukan dengan mudah. Ecoranger ini dibangun menggunakan bahasa pemrograman C# dan menggunakan beberapa library berupa windform sebagai GUI nya dan juga menggunakan Postgresql untuk database nya.`,
    linkRepo: "https://github.com/tunggulalmajid/project-ecoranger",
    linkWEb: "https://github.com/tunggulalmajid/project-ecoranger",
  },
  {
    img: "./assets/Digiparking.png",
    title: "Digiparking",
    desc: `Sebuah Projek untuk menyelesaikan masalah parkir liar yang ada dalam sebuah stasiun, masih berdasarkan prototype sehingga masih berbasis terminal dan hanya menggunakan bahasa python saja`,
    linkRepo: "https://github.com/tunggulalmajid/DIGIPARKING",
    linkWEb: "https://github.com/tunggulalmajid/DIGIPARKING",
  },
  {
    img: "./assets/Revitory.png",
    title: "Revitory",
    desc: `Revitory merupakan sebuah project yang menjadikan UKM Reog UNEJ sebagai studi kasus nya. Revitory disini merupakan sebuah project yang bertujuan untuk mengelola dan mencatat proses pinjam meminjam alat alat kesenian yang dimiliki oleh UKM Reog UNEJ. Project ini merupakan project yang dibuat untuk memenuhi tugas akhir mata kuliah Sistem Basis Data sehingga untuk bahasa pemrograman yang digunakan adalah python dan postgreesql sebagai database nya.`,
    linkRepo: "https://github.com/tunggulalmajid/Revitory_SBD",
    linkWEb: "https://github.com/tunggulalmajid/Revitory_SBD",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const cardProject = document.querySelector("#card-project");

  dataProject.forEach((data) => {
    const project = ` <div class="card">
          <img src="${data.img}" alt="" />
          <h4>${data.title}</h4>
          <p>
  ${data.desc}
          </p>
           <div class="btn-card">
            <a href="${data.linkRepo}" target="_blank"
              ><button class="btn-small">/></button></a
            >
            <a href="${data.linkWEb}" target="_blank"
              ><button class="btn-notsmall">View Project</button></a
            >
          </div>
        </div>`;
    cardProject.innerHTML += project;
  });
});

// contact

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.querySelector("#nama");
  const message = document.querySelector("#message");
  const nomorHp = "+6283856842965";
  const pesanKirim = `halo, perkenalkan saya ${nama.value} saya memiliki pesan yang ingin disampaikan berupa ${message.value}`;
  const encode = encodeURI(pesanKirim);
  const waUrl = `https://wa.me/${nomorHp}?text=${encode}`;

  window.open(waUrl, "_blank");

  nama.value = "";
  message.value = "";
});
