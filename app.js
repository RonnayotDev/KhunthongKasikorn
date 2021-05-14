const NavbarToggle = document.querySelectorAll(".nav-bar,.accordian-container");
loadEventListener();

function loadEventListener(){
    for( i =0;i<NavbarToggle.length;i++){
        NavbarToggle[i].addEventListener("click",function(){
            this.classList.toggle("active");
        });
    }
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

