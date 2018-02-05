$('.owl-carousel').owlCarousel({
    margin: 25,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

window.onresize = autoResizer;
autoResizer();

function autoResizer() {
    var winHeight = window.innerHeight - 89.42;
    document.getElementById("landing").style.height = winHeight + "px";
}

var modal = document.getElementById('modal-1');
var img = document.getElementById('main-img-1');
var modalImg = document.getElementById("img1");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

modal.onclick = function() {
    modal.style.display = "none";
}

var modal2 = document.getElementById('modal-2');
var img2 = document.getElementById('main-img-2');
var modalImg2 = document.getElementById("img2");
img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.src = this.src;
}

modal2.onclick = function() {
    modal2.style.display = "none";
}

var modal3 = document.getElementById('modal-3');
var img3 = document.getElementById('main-img-3');
var modalImg3 = document.getElementById("img3");
img3.onclick = function() {
    modal3.style.display = "block";
    modalImg3.src = this.src;
}

modal3.onclick = function() {
    modal3.style.display = "none";
}

var modal4 = document.getElementById('modal-4');
var img4 = document.getElementById('main-img-4');
var modalImg4 = document.getElementById("img4");
img4.onclick = function() {
    modal4.style.display = "block";
    modalImg4.src = this.src;
}

modal4.onclick = function() {
    modal4.style.display = "none";
}

var modal5 = document.getElementById('modal-5');
var img5 = document.getElementById('main-img-5');
var modalImg5 = document.getElementById("img5");
img5.onclick = function() {
    modal5.style.display = "block";
    modalImg5.src = this.src;
}

modal5.onclick = function() {
    modal5.style.display = "none";
}

var modal6 = document.getElementById('modal-6');
var img6 = document.getElementById('main-img-6');
var modalImg6 = document.getElementById("img6");
img6.onclick = function() {
    modal6.style.display = "block";
    modalImg6.src = this.src;
}

modal6.onclick = function() {
    modal6.style.display = "none";
}

function openSidebar() {
    document.getElementById("menu-sidebar").style.width = "250px";
    // document.getElementById("menu-sidebar").style.opacity = "1";
    // document.getElementById("menu-sidebar").style.visibility = "visible";
    document.getElementById("close").style.display = "block";
    document.getElementById("open").style.display = "none";
    disableScroll();
}

function closeSidebar() {
    document.getElementById("menu-sidebar").style.width = "0";
    // document.getElementById("menu-sidebar").style.opacity = "0";
    // document.getElementById("menu-sidebar").style.visibility = "hidden";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";
    enableScroll();
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove = preventDefault;
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}