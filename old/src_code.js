setTimeout(function() {
    document.getElementById("my_name1").style.filter = "blur(2px)";
    document.getElementById("my_ocp1").style.filter = "blur(2px)";
}, 2759);

setTimeout(function() {
    document.getElementById("my_name1").innerHTML = "Lymeng Naret";
    document.getElementById("my_name1").style.filter = "blur(0px)";

    document.getElementById("my_ocp1").innerHTML = "A Third Year CS Student";
    document.getElementById("my_ocp1").style.filter = "blur(0px)";
}, 3000);
// 

//
document.querySelector("#arrow1").addEventListener('click', function () {
    document.querySelector("#btn1").click();
    // document.getElementById("div1").style.height       = "100vh";
    // document.getElementById("my_name1").style.fontSize = "2.5rem";
    // document.getElementById("my_ocp1").style.fontSize  = "2rem";
    // document.getElementById("par1").style.fontSize     = "1.5rem";
});

document.querySelector("#arrow2").addEventListener('click', function () {
    document.querySelector("#btn2").click();
});

document.querySelector("#arrow3").addEventListener('click', function () {
    document.querySelector("#btn3").click();
});
//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// 