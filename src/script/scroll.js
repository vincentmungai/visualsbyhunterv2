window.onscroll = function() {
    var elements = document.getElementsByClassName('cls');
    for (var i=0; i<elements.length; i++) {
        var bounding = elements[i].getBoundingClientRect();
        if (bounding.top >= -5 && bounding.top <= 30) {
            elements[i].style.visibility = 'visible';
            elements[i].style.animationPlayState = 'running';
        }
        else {
            elements[i].style.visibility = 'hidden';
            elements[i].style.animationPlayState = 'paused';
        }
    }
};