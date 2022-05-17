// nav hover
const navbarLi = document.querySelectorAll(".navbar .container .collapse .navbar-nav .nav-item .nav-link");

const navContentHover = document.querySelectorAll(".nav-hover");

function myFunction(x, navHover) {
  if (x.matches) {
    // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

navbarLi.forEach((a) => {
  a.onmouseover = (e) => {
    // console.log(e.target);
    targetMenu = e.target;
    // var x = window.matchMedia("(max-width: 810px)");

    if (targetMenu.getAttribute("id") !== null && targetMenu !== null) {
      //   console.log(e.target);

      for (x of navContentHover) {
        if (x.getAttribute("id") !== targetMenu.getAttribute("id")) {
          if (!x.classList.contains("d-none")) {
            x.classList.add("d-none");
          }
        } else if (x.getAttribute("id") == targetMenu.getAttribute("id")) {
          if (x.classList.contains("d-none")) {
            x.classList.remove("d-none");
          }
        }
      }
    }
  };

  navContentHover.forEach((e) => {
    e.onmouseleave = () => {
      e.classList.add("d-none");
    };
  });
});

//history
const filterYear = document.querySelectorAll(".section-history .container .history .row .col-md-12 ul li .year");

const contentShowHistory = document.querySelectorAll(".section-history .history .history-body");
filterClick(filterYear, contentShowHistory);
