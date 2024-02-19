 
 
 var displayText = document.getElementById("displayText");
      var hiddenText = document.getElementById("hiddenText");

      function showText() {
        hiddenText.style.display = "block";
      }

      function hideTextOnScroll() {
         hiddenText.style.display = "none";
         window.removeEventListener("scroll", hideTextOnScroll);
      }

      displayText.addEventListener("click", function(){
        showText();
        window.addEventListener("scroll", hideTextOnScroll);
      })