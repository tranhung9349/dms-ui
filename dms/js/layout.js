
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


document.addEventListener("DOMContentLoaded", function () {
  
  const internalRows = document.querySelectorAll("#internalDocList tr td");
  var lastTouchTime = 0;

  internalRows.forEach(row => {
    row.addEventListener("touchstart", () => {
      var currentTime = new Date().getTime();
      var timeSinceLastTouch = currentTime - lastTouchTime;
      lastTouchTime = currentTime;

      if (timeSinceLastTouch < 300) {
        // Double click logic here;
        let internalDocViewModal = new bootstrap.Modal(document.getElementById("internalDocViewModal"), {});
        internalDocViewModal.show();
      }
        
    });
  });


});


// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

    
            
$(document).ready(function() {
                    
  var options = {
      html: true,
      // title: "<div>Thông báo </div>",
      //html element
      //content: $("#popover-content")
      content: $('[data-name="noti-box-popover-content"]'),
      //Doing below won't work. Shows title only
      //content: $("#popover-content").html()
      // placement: 'bottom'
  }
  var exampleEl = document.getElementById('noti-box')
  var popover = new bootstrap.Popover(exampleEl, options)
})
