// const img2 = $("#click");
// const configObjectt = {
//   sourceUrl: img2.attr("data-videourl"),
//   triggerElement: "#" + img2.attr("id"),
//   progressCallback: function () {
//     console.log("Callback Invoked.");
//   },
// };
// const videoBuild1 = new YoutubeOverlayModule(configObjectt);
// videoBuild1.activateDeployment();

function filterClick(filters, contentShow) {
  filters.forEach((filters) => {
    filters.onclick = (e) => {
      const targetMenu = e.target;
      console.log(targetMenu);
      if (targetMenu.getAttribute("id") !== null && targetMenu !== null) {
        for (x of contentShow) {
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
  });
}

function clickModal(plays, spans) {
  plays.forEach((play) => {
    play.onclick = (e) => {
      const targetMenu = e.target;
      console.log(targetMenu);
      if (targetMenu.getAttribute("id") === "product-header") {
        targetMenu.nextElementSibling.style.display = "block";
      } else {
        targetMenu.parentNode.previousElementSibling.style.display = "block";
      }
    };
  });

  // When the user clicks on <span> (x), close the modal
  spans.forEach((span) => {
    span.onclick = (e) => {
      const target = e.target.parentNode;
      target.style.display = "none";
    };
  });
}
