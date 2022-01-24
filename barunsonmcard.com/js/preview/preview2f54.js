var ratio = 1; 
var _Width = 0;
$(document).ready(function () {
    if ($(document).width() < 500) {
        if (typeof parent.$(".product_img .img_con").val() != 'undefined') {
            _Width = parent.$(".product_img .img_con").width();
        } else {
            _Width = $("#wrap").width();
        }

    } else {
        _Width = $("#wrap").width();
    }

    if ($("#Objects").text() != "") {
        objects = JSON.parse($("#Objects").text());
        var idx = 0;
        objects.forEach(function (elem) {

            ratio = _Width / 800;
            var w = elem.width * ratio
            var h = elem.height * ratio
            var x = elem.left * ratio
            var y = elem.top * ratio
            idx++;
            if (elem.type == 'img') {
                var div = "<div id='" + elem.id + "'  class='item' style='top: " + y + "px; left: " + x + "px;  position:absolute;'><img class='img' src='" + $("#CDN").val() + elem.resource_url + "' width='" + w + "px' height='" + h + "px'  /></div>";
                $('#' + elem.pid).append(div);
            }
            else if (elem.type == 'photo') {
                var div = "<div id='" + elem.id + "'  class='item photo-image' style='top: " + y + "px; left: " + x + "px;  position:absolute;'><img class='img' src='" + $("#CDN").val() + elem.resource_url + "' width='" + w + "px' height='" + h + "px'  /></div>";
                $('#' + elem.pid).append(div);
            } else {
                var text = matchText(elem.chracterset);
                var matchinfo = "<input type='text' id='" + idx + "' idx='" + idx + "' class='matchinfo' value='" + elem.chracterset + "'>"
                $('#divMatch').append(matchinfo);
                elem.fontsize = elem.fontsize * ratio
                var div = "<div id='" + elem.id + "' class='item'  style='top: " + y + "px; left: " + x + "px;    position:absolute; width:" + w + "px;  height:" + h + "px;'><div class='text'>" + text + "</div></div>";
                $('#' + elem.pid).append(div);
                $('#' + elem.id).css('background-color', elem.bgcolor);
                $('#' + elem.id).children(".ui-resizable-handle").removeClass('resizabled');
                $('#' + elem.id).children(".ui-resizable-handle").css('display', 'none');
                $('#' + elem.id + ">.text").css('font-family', elem.font);
                $('#' + elem.id + ">.text").css('font-size', elem.fontsize + "px");
                $('#' + elem.id + ">.text").css('color', elem.fontcolor);
                $('#' + elem.id + ">.text").css('font-weight', elem.bold_yn ? "bold" : "");
                $('#' + elem.id + ">.text").css('font-style', elem.italic_yn ? "italic" : "");
                $('#' + elem.id + ">.text").css('text-decoration', elem.underline_yn ? "underline" : "");
                if (elem.horizontal_align == "C") {
                    $('#' + elem.id + ">.text").css('text-align', "center")
                } else if (elem.horizontal_align == "R") {
                    $('#' + elem.id + ">.text").css('text-align', "right")
                } else if (elem.horizontal_align == "L") {
                    $('#' + elem.id + ">.text").css('text-align', "left");
                } else {
                    $('#' + elem.id + ">.text").css('text-align', "");
                }
                if (elem.vertical_align == "T") {
                    $('#' + elem.id).css('align-items', "flex-start")
                } else if (elem.vertical_align == "M") {
                    $('#' + elem.id).css('align-items', "center")
                } else if (elem.vertical_align == "B") {
                    $('#' + elem.id).css('align-items', "flex-end");
                } else {
                    $('#' + elem.id).css('align-items', "");
                }
                $('#' + elem.id + ">.text").css('letter-spacing', elem.between_text / 100 + "em");
                $('#' + elem.id + ">.text").css('line-height', elem.between_line + "em");
                $('.item').each(function () {
                    $(this).data("height", $(this).outerHeight());
                    $(this).data("width", $(this).outerWidth());
                });
                $('.text', '.item').each(function () {
                    $(this).data("height", $(this).outerHeight());
                    //$(this).data("width", $(this).outerWidth());
                    $(this).data("fontSize", parseInt($(this).css("font-size")));
                });
            }
        });

        //신랑 신부 연락정보
        $("#area4").prepend("<img src=\"/img/preview/img_01.png\"/>");
        $("#area4 img").css("width", _Width + "px");
        $("#area4 img").css("display", "block");

        //혼주 연락 정보
        $(".onoff_2").append("<img src=\"/img/preview/img_02.png\"/>");
        $(".onoff_2 img").css("width", _Width + "px");
        $(".onoff_2 img").css("display", "block");

        //갤러리
        $("#area6").append("<img src=\"/img/preview/img_03.png\"/>");
        $("#area6 img").css("width", _Width + "px");
        $("#area6 img").css("display", "block");

        //동영상
        $("#area8").append("<img src=\"/img/preview/img_04.png\"/>");
        $("#area8 img").css("width", _Width + "px");
        $("#area8 img").css("display", "block");

        //오시는길
        $("#area10").append("<img src=\"/img/preview/img_05.png\"/>");
        $("#area10 img").css("width", _Width + "px");
        $("#area10 img").css("display", "block");

        //방명록
        $("#area15").append("<img src=\"/img/preview/message.png\"/>");
        $("#area15 img").css("width", _Width + "px");
        $("#area15 img").css("display", "block");


        //공유하기
        $("#area16").append("<img src=\"/img/preview/share.png\"/>");
        $("#area16").append("<img src=\"/img/preview/barunson.png\"/>");
        $("#area16 img").css("width", _Width + "px");
        $("#area16 img").css("display", "block");

        //송금하기
        $(".remittance").append("<img src=\"/img/preview/img_06.png?ver=3.1\"/>");
        $(".remittance img").css("width", _Width + "px");
        $(".remittance img").css("display", "block");
    }

    if ($("#TB_Area").text() != "") {

        areas = JSON.parse($("#TB_Area").text());
        areas.forEach(function (elem) {

            $(".templatearea").each(function () {
                if ($(this).attr('idx') == elem.Area_ID) {
                    if ($(this).hasClass('templatearea')) {

                        ratio = _Width / 800;

                        if ($('#area' + elem.Area_ID).find('.item').length > 0) {
                            $('#area' + elem.Area_ID).css('height', elem.Size_Height * ratio + "px");
                            $('#area' + elem.Area_ID).css('background-color', elem.Color);
                        }

                    }
                }
            });
        });

    }
    if ($("#Product_Category_Code").val() == "PCC02") {
        //감사장
        $(".onoff_2").hide();
        $(".onoff_5").hide();
        $(".onoff_6").hide();
        $("#area9").hide();
        $("#area10").hide();
        $(".onoff_3").hide();
        $(".onoff_4").hide();
        $(".onoff_1").hide();
    }

});
function matchText(text) {

    if (text != null) {
        var _matches = text.match(/#[^#]+#/g);

        if (_matches != null) {
            for (var i = 0; i < _matches.length; i++) {
                var target = _matches[i].replace(/#/g, '');
                var split = target.split(/\|/);
                var _append = $('[match="' + split[0] + '"]').val();
                if (split.length > 1) {
                    _append = '<span style="' + split[1] + '">' + _append + '</span>'
                }
                text = text.replace(_matches[i], _append);
            }
        }
        text = text.replace(/\r|\n|\r\n/g, "<br>");
    }
    return text;
}
$(window).load(function () {
    if (typeof $(".d_day").val() != 'undefined') {
        $(".d_day").css("font-size", (parseInt($(".d_day").css("font-size").replace("px", "")) * ratio) + "px");
    }
    $(".frame_wrap").show();
    $(".loader_main_preview").hide();
});