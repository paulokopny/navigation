/**
 * Created by Mike on 5/6/2016.
 */

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['firstLandmark', 'secondLandmark', 'thirdLandmark', 'fourthLandmark', 'lastLandmark'],
        menu: '#menu',
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4', 'section5']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){}
    });
});
