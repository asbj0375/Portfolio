window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //klik på menu-knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");


    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        //        menuen er nu skjult - ændre den til☰
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        //        menuen er vist - ændre menuknap til ×
        document.querySelector("#menuknap").textContent = " × "

    }
}
