$(function(){
    var $html = $("html");
    var color = randomColor();
    var $color_random = $("<div/>")
                            .addClass("color-random")
                            .css("position","absolute")
                            .css("top","0px")
                            .css("left","0px")
                            .css("width",$html.width())
                            .css("height",$html.height())
                            .css("background-color",color)
                            .css("opacity",0.8)
                            .css("display", "none");
    $html.append($color_random);

    $(window).scroll(function () {
        $color_random.css("background-color",color).css("display", "inline");
        $html.append($color_random);
        $color_random.fadeOut(1);
    });
});

function randomColor(){
    var colorHue = Math.floor( Math.random() * 360 );
    return "hsl(" + colorHue + ", 100%, 50% )";
}
