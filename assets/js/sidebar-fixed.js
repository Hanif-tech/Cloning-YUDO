const sidebar = document.getElementById("sidebar-fixed");
const sidebarContent = document.querySelectorAll(".slide-content");

sidebar.onmouseover = () => {
  sidebarContent.forEach((sidebar) => {
    sidebar.style.right = "40px";
  });
};
sidebar.onmouseleave = () => {
  sidebarContent.forEach((sidebar) => {
    sidebar.style.right = "-110px";
  });
};
