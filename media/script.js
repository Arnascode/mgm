function mainImage() {
    var imgContainer = document.getElementsByClassName('description__img-main')[0];
    var imgContainerChild = imgContainer.getElementsByTagName('img');
    var imgCount = imgContainerChild.length;
    var firstImg = document.getElementsByClassName('product-img')[0].src;
    var imageURL = document.createElement('img');
    imageURL.src = firstImg;
    if (imgCount === 0) {
        document.getElementsByClassName('description__img-main')[0].appendChild(imageURL);
    }
}

mainImage();

function changeImage(src){
    var imgCount = document.getElementsByClassName('description__img-main')[0].childNodes.length;
    var imageURL = document.createElement('img');
    imageURL.src = src;

    if (imgCount >= 1){
        document.getElementsByClassName('description__img-main')[0].innerHTML = '';
        document.getElementsByClassName('description__img-main')[0].appendChild(imageURL);
    } else {
        document.getElementsByClassName('description__img-main')[0].appendChild(imageURL);
    }
}

function changeTab(textId, id) {
    var allClassHide = document.getElementsByClassName('about__text-hide');
    var allClassTxt = document.getElementsByClassName('about__titles-txt');

    for (var i = 0; i < allClassHide.length; i++){
        allClassHide[i].style = "display: none";
    }

    for (var i = 0; i < allClassTxt.length; i++){
        allClassTxt[i].classList.remove('active');
    }

    document.getElementById(textId).style = "display: block";
    document.getElementById(id).classList.add("active");
}