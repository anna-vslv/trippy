function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function buttonTwo() {
    document.getElementById("myTwo").classList.toggle("show");
  }
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInputTwo");
    filter = input.value.toUpperCase();
    div = document.getElementById("myTwo");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  function buttonThree() {
    window.location.assign ("/project_01/to-do.html")
  }
  function redirecting() {
    window.location.assign ("/background_video.html")
  }
  function buttonTwo() {
   window.location.assign ("/project_01/calculator.html")
  }

  function buttonFour() {
    window.location.assign ("/project_01/slots.html")
   }
