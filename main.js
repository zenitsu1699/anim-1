// anime({
//     targets: 'div.box.red',
//     translateY: [
//         { value:200, duration:500 },
//         { value:0, duration:800 }
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine'
//     }
// });

// anime({
//     targets: 'div.box.blue',
//     translateY: [
//         { value:200, duration:500, delay: 500 },
//         { value:0, duration:800 }
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 500
//     }
// });

// anime({
//     targets: 'div.box.green',
//     translateY: [
//         { value:200, duration:500, delay: 1000 },
//         { value:0, duration:800 }
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 1000
//     }
// });

// anime({
//     targets: 'div.box.yellow',
//     translateY: [
//         { value:200, duration:500, delay: 1500 },
//         { value:0, duration:800 }
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 1500
//     }
// });

var PlayPause = anime({
    targets: 'div.box',
    translateY: [
        { value:200, duration:500 },
        { value:0, duration:800 }
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: function(elem, i, l_i) {
        return i * 1000
    },
    autoplay: false,
    loop: true
});

document.querySelector('#boxes .play').onclick = PlayPause.play;

document.querySelector('#boxes .pause').onclick = PlayPause.pause;