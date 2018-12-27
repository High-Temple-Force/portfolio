var target = document.getElementsByClassName('article');

for (let i = 0; i < target.length; i++) {
    //ON
    setborder(target[i],
        'mouseenter',
        "2px solid rgba(241, 159, 64,1)");
    //OUT
    setborder(target[i],
        'mouseleave',
        "2px solid rgba(241, 159, 64,0.5)");
}
function getelement(element, mouse) {
    element.addEventListener()
}
function setborder(element, mouse, border) {
    element.addEventListener(mouse, () => {
        element.style.border = border;
        
    }, false);
}

