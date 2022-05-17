function filterClick(filters, contentShow) {
  filters.forEach((filters) => {
    filters.onclick = (e) => {
      const targetMenu = e.target;
      //   console.log(targetMenu);
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
