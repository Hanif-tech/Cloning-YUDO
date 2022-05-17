const img = $("#click-video");
const configObject = {
  sourceUrl: img.attr("data-videourl"),
  triggerElement: "#" + img.attr("id"),
  progressCallback: function () {
    console.log("Callback Invoked.");
  },
};
const videoBuild = new YoutubeOverlayModule(configObject);
videoBuild.activateDeployment();

//   owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    responsiveClass: true,
    loop: false,
    dots: false,
    nav: true,
    touchDrag: true,
    navText: ['<i class="fa-solid fa-angle-left fa-xl"></i>', '<i class="fa-solid fa-angle-right fa-xl"></i>'],
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
});

//========= Click Video Modal popup ===========
// Get the modal
const modal = document.querySelectorAll("#myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const image = document.querySelectorAll("#click");
const play = document.querySelectorAll(".icon-play");

// Get the <span> element that closes the modal
const span = document.querySelectorAll("close");
clickModal(play, modal, span);

//========= Click Video Modal popup ===========

//product series
const navMenu = document.querySelector(".nav-menu-product");

navMenu.onclick = (e) => {
  const targetMenu = e.target;

  if (targetMenu.classList.contains("nav-item-history")) {
    console.log("sukses nav-item");

    const menuLinkActive = document.querySelector("#product-series ul li.active-nav-p-series");
    const contentShow = document.querySelector("#product-series .owl-carousel.d-block");
    if (menuLinkActive !== null) {
      menuLinkActive.classList.remove("active-nav-p-series");
      contentShow.classList.replace("d-block", "d-none");
      console.log("sukses mengahpus active");

      // Menampilkan isi konten
      if (targetMenu.hasAttribute("id")) {
        if (targetMenu.getAttribute("id") == "system") {
          document.querySelector("#system-content").classList.replace("d-none", "d-block");
        } else if (targetMenu.getAttribute("id") == "temperature-controller") {
          document.querySelector("#temperature-content").classList.replace("d-none", "d-block");
        } else if (targetMenu.getAttribute("id") == "all") {
          document.querySelector("#all-content").classList.replace("d-none", "d-block");
        } else if (targetMenu.getAttribute("id") == "sequence-timer") {
          document.querySelector("#sequence-content").classList.replace("d-none", "d-block");
        }
      }
    }
  }

  targetMenu.classList.add("active-nav-p-series");
};

// product market
const filter = document.querySelectorAll("#product-market .container .owl-carousel .img img");
const contentShow = document.querySelectorAll("#Automobile-injection .container .p");
filterClick(filter, contentShow);

//product series
const filterProduct = document.querySelectorAll("#product-series .container .row .col-md-10 .owl-carousel .item .img img");
const contentShowProduct = document.querySelectorAll("#product-series .container  .content-ps");
filterClick(filterProduct, contentShowProduct);
