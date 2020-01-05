var pageDo, pageDone;
pageDo = localStorage.getItem("dc");
pageDone = localStorage.getItem("dd");

if (pageDone != null) {
    document.getElementById("done").innerHTML = pageDone;
}
if (pageDo != null) {
    document.getElementById("do").innerHTML = pageDo;
}

function addEvents1() {
    $("#do > .works:last > .icon > .icon_1").click(
        function() {
            var text = $(this).parent().parent().html();
            text = '<div class = "works">' + text + '</div>';
            text = text.replace(/完成/, "恢复");
            text = text.replace(/wanchengchenggong/, "fuyuan");
            $("#done").append(text);
            $(this).parent().parent().remove();
            addEvents2();
            f();
        }
    )
    $("#do > .works:last > .icon > .icon_2").click(
        function() {
            var text = $(this).parent().siblings().first().html();
            text = text.replace(/&lt;/g, "<");
            text = text.replace(/&gt;/g, ">");
            $(this).parent().hide().siblings().hide().parent().append("<input class='input_2'>");
            $(this).parent().parent().addClass("compiling").children().last()[0].value = text;
            $(this).parent().siblings().last().keydown(function(event) {
                if (event.keyCode === 13) {
                    var textb = $(this)[0].value;
                    textb = textb.replace(/</g, "&lt");
                    textb = textb.replace(/>/g, "&gt");
                    $(this).siblings().first()[0].innerHTML = textb;
                    $(this).siblings().show();
                    $(this).parent().removeClass("compiling");
                    $(this).remove();
                    f();
                }
            })
        }
    )
    $("#do > .works:last > .icon > .icon_3").click(
        function() {
            $(this).parent().parent().remove();
            f();
        }
    )
}

function addEvents2() {
    $("#done > .works:last > .icon > .icon_1").click(
        function() {
            var text = $(this).parent().parent().html();
            text = '<div class = "works">' + text + '</div>';
            text = text.replace(/恢复/, "完成");
            text = text.replace(/fuyuan/, "wanchengchenggong");
            $("#do").append(text);
            $(this).parent().parent().remove();
            addEvents1();
            f();
        }
    )
    $("#done > .works:last > .icon > .icon_2").click(
        function() {
            var text = $(this).parent().siblings().first().html();
            text = text.replace(/&lt;/g, "<");
            text = text.replace(/&gt;/g, ">");
            $(this).parent().hide().siblings().hide().parent().append("<input class='input_2'>");
            $(this).parent().parent().addClass("compiling").children().last()[0].value = text;
            $(this).parent().siblings().last().keydown(function(event) {
                if (event.keyCode === 13) {
                    var textb = $(this)[0].value;
                    textb = textb.replace(/</g, "&lt");
                    textb = textb.replace(/>/g, "&gt");
                    $(this).siblings().first()[0].innerHTML = textb;
                    $(this).siblings().show();
                    $(this).parent().removeClass("compiling");
                    $(this).remove();
                    f();
                }
            })
        }
    )
    $("#done > .works:last > .icon > .icon_3").click(
        function() {
            $(this).parent().parent().remove();
            f();
        }
    )
}

$(".icon_3").click(
    function() {
        $(this).parent().parent().remove();
        f();
    }
)

$(".icon_2").click(
    function() {
        var text = $(this).parent().siblings().first().html();
        text = text.replace(/&lt;/g, "<");
        text = text.replace(/&gt;/g, ">");
        $(this).parent().hide().siblings().hide().parent().append("<input class='input_2'>");
        $(this).parent().parent().addClass("compiling").children().last()[0].value = text;
        $(this).parent().siblings().last().keydown(function(event) {
            if (event.keyCode === 13) {
                var textb = $(this)[0].value;
                textb = textb.replace(/</g, "&lt");
                textb = textb.replace(/>/g, "&gt");
                $(this).siblings().first()[0].innerHTML = textb;
                $(this).siblings().show();
                $(this).parent().removeClass("compiling");
                $(this).remove();
                f();
            }
        })

    }
)


$("#do > .works > .icon > .icon_1").click(
    function() {
        var text = $(this).parent().parent().html();
        text = '<div class = "works">' + text + '</div>';
        text = text.replace(/完成/, "恢复");
        text = text.replace(/wanchengchenggong/, "fuyuan");
        $("#done").append(text);
        $(this).parent().parent().remove();
        addEvents2();
        f();
    }
)
$("#done > .works > .icon > .icon_1").click(
    function() {
        var text = $(this).parent().parent().html();
        text = '<div class = "works">' + text + '</div>';
        text = text.replace(/恢复/, "完成");
        text = text.replace(/fuyuan/, "wanchengchenggong");
        $("#do").append(text);
        $(this).parent().parent().remove();
        addEvents1();
        f();
    }
)

$("#newWork").keydown(function(event) {
    if (event.keyCode === 13) {
        var text = document.getElementById("newWork").value;
        text = text.replace(/</g, "&lt");
        text = text.replace(/>/g, "&gt");
        text = '<div class = "works">' + '<div class = "items">' + text + '</div>' + '<div class = "icon">' +
            '<img title="点击完成" class="icon_1" src="imags/wanchengchenggong.png" alt="完成">' +
            '<img title="点击编辑" class="icon_2" src="imags/bianji.png" alt="编辑">' +
            '<img title="点击删除" class="icon_3" src="imags/shanchu.png" alt="删除"></div>' +
            '</div>';
        $("#do").append(text);
        $("#newWork").val(null);
        addEvents1();
        f();
    }
})
$("#toNew").click(function() {
    $("#do > div").remove();
    f();
})
$("#toDone").click(function() {
    $("#done > div").remove();
    f();
})

function f() {
    pageDo = $("#do").html();
    localStorage.dc = pageDo;
    pageDone = $("#done").html();
    localStorage.dd = pageDone;
}
$("li").click(
    function() {
        $(this).addClass("onclick").siblings().removeClass("onclick");
        var index = $(this).index();
        $("#list .l").eq(index).show().siblings().hide();
    }
)