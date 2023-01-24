let ctverecek = document.querySelector(".ctverecek");

function zmenBarvu(){
    ctverecek.style.backgroundColor = "green";
}

function secti(){
    let a = parseInt(document.getElementById("cislo1").value);
    let b = parseInt(document.getElementById("cislo2").value);
    let c = a + b;
    
    let vysledek = document.getElementById("vysledek");
    vysledek.innerHTML = "Tady bude výsledek: " + c;
    return c
}

function upozorni(){
    let a = parseInt(document.getElementById("cislo1").value);
    let b = parseInt(document.getElementById("cislo2").value);
    let c = a + b;

    console.log(c);
    ctverecek.innerHTML = c;
    }

