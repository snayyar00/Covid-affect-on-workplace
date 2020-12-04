var posx, posy;
let isVisible = false;
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
    // let imagetoshow = "#"+this.getAttribute("data-userId")+'a';
    let imagetoshow = "#user-images";
    let el = window.document.querySelector(imagetoshow);
    el.classList.remove("hide-img");
    el.classList.add("show-img");
}
function showImageForOne(){
    if(isVisible){
        showYTembed();
    }

    // let imagetoshow = "#"+this.getAttribute("data-userId")+'a';
    let imagetoshow = "#user-images";
    let el = window.document.querySelector(imagetoshow);
    el.classList.remove("hide-img");
    el.classList.add("show-img-one");
}
function hideImage(){
    let imagetoshow = "#user-images";
    let el = window.document.querySelector(imagetoshow);
    if(el.classList.contains("show-img")){
        el.classList.remove("show-img");
    }
    else{
        el.classList.remove("show-img-one");
    }
    el.classList.add("hide-img");
    
}

function showYTembed(){
    // let imagetoshow = "#"+this.getAttribute("data-userId")+'a';
    let imagetoshow = "#user-videos";
    let el = window.document.querySelector(imagetoshow);
    let toggleBtn = window.document.querySelector("#videoToggleBtn");
    
    if(!isVisible){ 
        el.classList.remove("hide-img");
        el.classList.add("show-img-one");
        toggleBtn.classList.remove("off-btn");
        toggleBtn.classList.add("on-btn");
    
    }else{
        el.classList.remove("show-img-one");
        el.classList.add("hide-img");
        toggleBtn.classList.remove("on-btn");
        toggleBtn.classList.add("off-btn");
    }
    isVisible = !isVisible;
}