

            function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
            }

                function openlogin() {
                document.getElementById("login").style.display = "block";
                }

                function opensignup() {
                document.getElementById("signup").style.display = "block";
                }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
            }