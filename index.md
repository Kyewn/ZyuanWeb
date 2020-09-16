<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="introAndMain.css">
    <link rel="stylesheet" href="repopage.css">
    <link rel="stylesheet" href="social.css">
    <title>Zyuan - Official Web</title>
    <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="intro">
        <div class="typewriter">
            <p class="typewriter-text">Hello World</p>
        </div>    
    </div>
    <div class="main">
        <div class="nav">
            <div class="logo">
                <span>//ZYUAN</span>
            </div>
            <div class="navlist">
                <div class="navblock home">HOME</div>
                <div class="navblock repos">REPOS</div>
                <div class="navblock social">SOCIAL</div>
            </div>
        </div>
        <p class="helloMe">Hello <span>Me</span></p>
        <div class="main-para">
            <p class="desc">//Programmer apprentice. likes games, code, and being Oowu</p>
            <p class="desc2">//Oh, and also cats</p>
        </div>
    </div>
    <div class="repopage">
        <div class="divider">
            <div class="bar1"></div>
            <div class="repoTitle">REPOSITORY &nbsp; */</div>
        </div>
        <div class="flex-container"></div>
        <div class="githubProfile">
            <a href="#" class="profileIcon" title="this pikapi :3" target="_blank"></a>
            <div class="rect"></div>
            <span class="MwL">🌠 Made and nurtured with love by</span>
        </div>
    </div>
    <div class="socialpage">
        <div class="socialHeader">
            <div class="socialTitle">
                <div class="greenRect">
                    <span>SOCIAL</span>
                </div>
                <span>SOCIAL</span>
                <div class="greenRect2"></div>
            </div>
        </div>
        <div class="platforms">
            <a target="_blank" href="https://www.facebook.com/lim.z.yuan.1" class="fa fa-facebook"></a>
            <a target="_blank" href="https://twitter.com/OowuYuan" class="fa fa-twitter"></a>                
            <a target="_blank" href="https://www.instagram.com/kyoowu/" class="fa fa-instagram"></a>
            <a target="_blank" href="https://www.github.com/Kyewn" class="fa fa-github"></a>
        </div>
    </div>
    <div class="eop">
        <p></p> 
    </div>
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="getRepo.js"></script>
<script>
    var date = new Date();
    $(".eop p").html("♥️ Made by Zyuan " + date.getFullYear());
</script>
<script>
$(".repos").click(function() {
    $('html,body').animate({
        scrollTop: $(".repopage").offset().top
    }, 800, "swing");
});

$(".social").click(function() {
    $('html,body').animate({
        scrollTop: $(".socialpage").offset().top
    }, 800, "swing");
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).innerHeight();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$("html, body").scroll(function() {
    //dont know why but need to arrange if else targets in opposite order of where they are placed down the web
    if ($(".platforms").isInViewport()) {
        $(".fa-facebook").css("animation", "fadeUp 3s cubic-bezier(0, 1, 0.5, 1) forwards 0.5s");
        $(".fa-twitter").css("animation", "fadeUp 3s cubic-bezier(0, 1, 0.5, 1) forwards 0.55s");
        $(".fa-instagram").css("animation", "fadeUp 3s cubic-bezier(0, 1, 0.5, 1) forwards 0.6s");
        $(".fa-github").css("animation", "fadeUp 3s cubic-bezier(0, 1, 0.5, 1) forwards 0.65s");
    } else if ($(".greenRect2").isInViewport()) {
        $(".greenRect2").css("animation", "greenRect2 1s forwards .2s");
    } else if ($(".githubProfile").isInViewport()) {
        $(".MwL").css("animation", "slideNFadeIn .5s forwards .2s");
        $(".profileIcon").css("animation", "opacity 1s forwards .8s");
        $(".rect").css("animation", "rect 1s forwards .3s");
    } else if ($(".flex-container").isInViewport()) {
        var delay = 0.6;
        $(".repoblock").each(function() {
            $(this).css("animation", "repoblock .5s forwards " + delay + "s");
            delay += 0.1;
        });
    } else if ($(".bar1").isInViewport()) {
        $(".bar1").css("animation", "bar1Enlarge 1s forwards .2s");
    } else if ($(".repoTitle").isInViewport()) {
        $(".repoTitle").css("animation", "opacity 1s forwards .5s");    
    }
});
</script>
</body>
</html> 