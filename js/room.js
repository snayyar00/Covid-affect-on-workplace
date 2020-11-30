var posx, posy;
$(document).on('mousemove', function () {
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
    }

    coefX = 5,
        coefY = -5,
        win = { width: window.innerWidth, height: window.innerHeight },
        rotX = coefX ? 0 - (2 * coefX / win.height * posy - coefX) : 0,
        rotY = coefY ? 0 - (2 * coefY / win.width * posx - coefY) : 0;
    $(".scroller").css('transform', 'translate3d(0,0,500px) ' + 'rotate3d(1,0,0,' + rotX + 'deg) rotate3d(0,1,0,' + rotY + 'deg) rotate3d(0,0,1,0)');
});
function showImage(){
    let imagetoshow = "#"+this.getAttribute("data-userId");
    let cssToAdd = "display: block; position: fixed; top: 0; height: 87vh; pointer-events: none; left: 33vw; margin: 0.5rem;";
    let el = window.document.querySelector(imagetoshow);
    // console.log('show '+ imagetoshow);
    el.classList.remove("hide-img");
    el.classList.add("show-img");
}
function hideImage(){
    let imagetoshow = "#"+this.getAttribute("data-userId");
    let cssToAdd = "display: none;  transition: all 0.2s;";
    let el = window.document.querySelector(imagetoshow);
    // console.log('hide '+ imagetoshow);
    el.classList.remove("show-img");
    el.classList.add("hide-img");
    
}