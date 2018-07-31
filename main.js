let i = 0;
let time = 2000;
let imagesArr = ["img/universe1.jpg","img/universe2.jpeg", "img/universe3.jpeg", "img/universe4.jpeg"];


function slideImg() {
    document.img_slider.src = imagesArr[i];

    if (i < imagesArr.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("slideImg()", time);   
}

window.onload(slideImg());