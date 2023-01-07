// ---------Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            top: itemPosNewAnimTop.top + "px",
            left: itemPosNewAnimLeft.left + "px",
            height: activeWidthNewAnimHeight + "px",
            width: activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function () {
    setTimeout(function () {
        test();
    });
});
$(window).on("resize", function () {
    setTimeout(function () {
        test();
    }, 500);
});
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
        test();
    });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == "") {
        path = "index.html";
    }

    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    // Add active class to target link
    target.parent().addClass("active");
});

// Add active class on another page linked
// ==========================================
$(window).on('load', function () {
    var current = location.pathname;
    console.log(current);
    $('#navbarSupportedContent ul li a').each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href').indexOf(current) !== -1) {
            $this.parent().addClass('active');
            $this.parents('.menu-submenu').addClass('show-dropdown');
            $this.parents('.menu-submenu').parent().addClass('active');
        } else {
            $this.parent().removeClass('active');
        }
    })
});

//clock
/*

|| Instagram: @emnatkins

|| Codepen: @emnatkins

|| GitHub: @emnatkins

*/

var InsideWatch = document.getElementsByClassName("hand")[0];

var RangeInsideWatch = 6;
setInterval(function () {
    InsideWatch.style.transform = `rotate(${RangeInsideWatch}deg) translateY(-14.2em)`;
    if (RangeInsideWatch <= 359) {
        RangeInsideWatch += 6;
    } else {
        RangeInsideWatch = 6;
    }
}, 1000)



//Start js Canvas
window.onload = function () {

    //get the cancvas and context and store in vars
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");

    //set canvas dims to window height and width
    window.addEventListener('resize', function () {
        canvas.height = H;
    })
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = 888;
    canvas.height = H;

    //generate the snowflakes and apply attributes
    var mf = 100; //max flakes
    var flakes = [];

    //loop throught the empty flakes and apply attributes
    for (var i = 0; i < mf; i++) {
        flakes.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 5 + 2, //min of 2px and max of 7px
            d: Math.random() + 1 //density of the flake

        })
    }

    //draw flakes onto canvas
    function drawFlakes() {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (var i = 0; i < mf; i++) {
            var f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        moveFlakes();
    }

    //animate the flakes
    var angle = 0;

    function moveFlakes() {
        angle += 0.01;
        for (var i = 0; i < mf; i++) {
            //store current flake
            var f = flakes[i];

            //update X and Y coordinates of each snowflakes
            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;

            //if the snowflake reaches the bottom, send a new one to the top
            if (f.y > H) {
                flakes[i] = { x: Math.random() * W, y: 0, r: f.r, d: f.d };
            }
        }
    }

    setInterval(drawFlakes, 25);
}

//End js Canvas


//Start js Switcher

var Selected = 1;

function Remover() {

    switch (Selected) {
        case 1:
            document.getElementsByClassName("ModelWatchSub_1")[0].classList.add("hide-element");
            document.getElementsByClassName("ModelWatch_1")[0].classList.add("hide-element");
            break;
        case 2:
            document.getElementsByClassName("sky")[0].classList.add("hide-element");
            break;
        case 3:
            var ModelWatchSub_1_3 = document.getElementsByClassName("ModelWatchSub_1_3")[0];
            ModelWatchSub_1_3.classList.add("hide-element");
            ModelWatchSub_1_3.innerHTML = "";
            document.getElementsByClassName("timesec")[0].classList.remove("timesec-3");
            document.getElementsByClassName("time")[0].classList.remove("time-3");
            document.getElementsByClassName("timehour")[0].classList.remove("timehour-3");
            break;
        case 4:
            document.getElementsByClassName("MainData")[0].classList.remove("MainData-4");
            document.getElementsByClassName("timesec")[0].classList.remove("timesec-3");
            document.getElementsByClassName("time")[0].classList.remove("time-3");
            var timehour = document.getElementsByClassName("timehour")[0];
            timehour.classList.remove("timehour-3");
            timehour.classList.remove("timehour-4");
            document.getElementsByClassName("hand")[0].classList.remove("hand-4");
            var ModelWatchSub_1_3 = document.getElementsByClassName("ModelWatchSub_1_3")[0];
            ModelWatchSub_1_3.classList.add("hide-element");
            ModelWatchSub_1_3.classList.remove("ModelWatchSub_1_4");
            ModelWatchSub_1_3.innerHTML = "";
            break;
    }
}

function Created(idTag) {

    switch (idTag) {
        case 1:
            document.getElementsByClassName("ModelWatchSub_1")[0].classList.remove("hide-element");
            document.getElementsByClassName("ModelWatch_1")[0].classList.remove("hide-element");
            break;
        case 2:
            document.getElementsByClassName("sky")[0].classList.remove("hide-element");
            break;
        case 3:
            var ModelWatchSub_1_3 = document.getElementsByClassName("ModelWatchSub_1_3")[0];
            ModelWatchSub_1_3.classList.remove("hide-element");
            ModelWatchSub_1_3.innerHTML = "31";
            document.getElementsByClassName("timesec")[0].classList.add("timesec-3");
            document.getElementsByClassName("time")[0].classList.add("time-3");
            document.getElementsByClassName("timehour")[0].classList.add("timehour-3");
            break;
        case 4:
            document.getElementsByClassName("MainData")[0].classList.add("MainData-4");
            document.getElementsByClassName("timesec")[0].classList.add("timesec-3");
            document.getElementsByClassName("time")[0].classList.add("time-3");
            var timehour = document.getElementsByClassName("timehour")[0];
            timehour.classList.add("timehour-3");
            timehour.classList.add("timehour-4");
            document.getElementsByClassName("hand")[0].classList.add("hand-4");
            var ModelWatchSub_1_3 = document.getElementsByClassName("ModelWatchSub_1_3")[0];
            ModelWatchSub_1_3.classList.remove("hide-element");
            ModelWatchSub_1_3.classList.add("ModelWatchSub_1_4");
            ModelWatchSub_1_3.innerHTML = "13";
            break;
    }
}

document.getElementById('model_1').addEventListener("click", function () {

    if (Selected != 1) {
        Remover();
        Created(1);
        Selected = 1;
    }
})

document.getElementById('model_2').addEventListener("click", function () {

    Remover();
    Created(2);
    Selected = 2;
})

document.getElementById("model_3").addEventListener("click", function () {

    Remover();
    Created(3);
    Selected = 3;
})

document.getElementById("model_4").addEventListener("click", function () {

    Remover();
    Created(4);
    Selected = 4;
})
