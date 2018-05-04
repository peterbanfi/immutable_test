"use strict";
/* H1-1 */
let h11 = document.getElementById('h1-1');
let styleh11 = window.getComputedStyle(h11);
let toph11 = parseInt(styleh11.getPropertyValue('padding-top').slice(0, -2));
let opacityh11 = parseInt(styleh11.getPropertyValue('opacity'));
/* H1-2 */
let h12 = document.getElementById('h1-2');
let styleh12 = window.getComputedStyle(h12);
let toph12 = parseInt(styleh12.getPropertyValue('padding-top').slice(0, -2));
let opacityh12 = parseInt(styleh12.getPropertyValue('opacity'));
/* H1-3--7 */
let h13 = document.getElementById('h1-3');
let h14 = document.getElementById('h1-4');
let h15 = document.getElementById('h1-5');
let h16 = document.getElementById('h1-6');
let h17 = document.getElementById('h1-7');

/* The magic. */
document.addEventListener("scroll", () => {
    moveh(window.scrollY, opacityh11, h11, 0);
    moveh(window.scrollY, opacityh12, h12, 60);
    moveh(window.scrollY, opacityh12, h13, 120);
    moveh(window.scrollY, opacityh12, h14, 180);
    moveh(window.scrollY, opacityh12, h15, 240);
    moveh(window.scrollY, opacityh12, h16, 300);
    moveh(window.scrollY, opacityh12, h17, 360);
});

function moveh(pos, opa, h, num) {
    if (pos > num) {
        let opacity = opa - 0.100;
        h.style.paddingTop = `${pos-num}px`;
        h.style.opacity = (opa - ((pos - num) / 300));
    }
}