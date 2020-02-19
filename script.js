console.log("Hi from script");
console.log("time = ", new Date());
let aktive_tab = "apks";
document.querySelector('.tab-wrapper').innerHTML = apks[0].html;

 const tab_left = document.querySelector('.grc-tab-left');
 const tab_right = document.querySelector('.grc-tab-right');
// console.log("tab_left", tab_left);
// console.log("tab_right", tab_right);

tab_left.classList.remove('grc-passive-tab-header');
tab_right.classList.add('grc-passive-tab-header');

tab_left.onclick = elem => {
    console.log("left", elem);
    tab_left.classList.remove('grc-passive-tab-header');
    tab_right.classList.add('grc-passive-tab-header');
    document.querySelector('.tab-wrapper').innerHTML = apks[0].html;
};

tab_right.onclick = elem => {
    console.log("right", elem);
    tab_right.classList.remove('grc-passive-tab-header');
    tab_left.classList.add('grc-passive-tab-header');
    document.querySelector('.tab-wrapper').innerHTML = apks[1].html;
};


