$(function() {
    var divc, divd;
    divc = localStorage.getItem("dc");
    divd = localStorage.getItem("dd");

    if (divd != null && divd != undefined) {
        document.getElementById("done").innerHTML = divd;
    }
    if (divc != null && divc != undefined) {
        document.getElementById("do").innerHTML = divc;
    }
    $("#add").click(
        function() {
            var text = document.getElementById("newWork").value;
            text = '<div class = "works">' + text + '</div>';
            $("#do").append(text);
            $("#newWork").val(null);

            f();
        }
    )
    $("#newWork").keydown(function(event) {
        if (event.keyCode === 13) {
            var text = document.getElementById("newWork").value;
            text = '<div class = "works">' + text + '</div>';
            $("#do").append(text);
            $("#newWork").val(null);
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
        divc = $("#do").html();
        localStorage.dc = divc;
        divd = $("#done").html();
        localStorage.dd = divd;
    }
    $("li").click(
        function() {
            $(this).addClass("onclick").siblings().removeClass("onclick");
            var index = $(this).index();
            $("#list .l").eq(index).show().siblings().hide();
        }
    )
    $("#do .works").click(
        function() {
            var text = $(this).html();

            text = '<div class = "works">' + text + '</div>';
            $("#done").append(text);
            $(this).remove();
            f();

        }
    )
    $("#done .works").click(
        function() {
            var text = $(this).html();

            text = '<div class = "works">' + text + '</div>';
            $("#do").append(text);
            $(this).remove();
            f();

        }
    )
})