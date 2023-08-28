
document.addEventListener("DOMContentLoaded", function () {

  const showNavbar = (toggleId, navId) => {
    // const shadowLayout = document.querySelector('dms-layout');
    // const toggle = shadowLayout.shadowRoot.querySelector(toggleId),
    //   nav = shadowLayout.shadowRoot.querySelector(navId);

    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    // Validate that all variables exist
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        // console.log(toggle);
        // show navbar
        nav.classList.toggle("expand");
      });
    }
  };

  showNavbar("toggle-action", "side-bar");
});

$(document).ready(function() {
  $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
});