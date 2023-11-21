function liaImut() {
    alert("PASTI IMUT DONG!!!");
}

function gakImut() {
    alert("LIA ITU IMUT!! JADI HARUS PENCET \"PASTI IMUT DONG!!!\"");
}

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('imut').addEventListener('click', liaImut);
//     document.getElementById('gakImut').addEventListener('click', gakImut);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var slider = document.querySelector('.slider');

//     slider.addEventListener('click', function() {
//         this.classList.toggle('clicked');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider');
    var img = document.querySelector('img');

    slider.addEventListener('click', function() {
        this.classList.toggle('clicked');
        img.style.borderRadius = this.classList.contains('clicked') ? '10px' : '50%';
    });
});