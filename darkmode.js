if(localStorage.getItem("dmode")==="dark"){
    $("#darkmode").text("Light mode")
    $("#darkmode").css({"background":"#1f1f1f"})
    $("body").css({"background":"#121212","color":"#eee"})
    $(".header").css({"background-color":"#1f1f1f","color":"#eee"})
    $("#footer").css({"background-color":"#1f1f1f","color":"#eee"})
    $(".cardb").css({"background-color":"#292929","box-shadow":"0 0 15px 2px rgba(100, 100, 100, 0.7)","color":"#ddd"})
    $(".button1").css({"background-color":"#444","border":"none","color":"#eee"})
    $(".button2").css({"background-color":"transparent","border":"1px solid #666","color":"#aaa"})
    $("body").addClass("dark-mode")
    $(".card").css({"background-color":"#292929","box-shadow":"0 0 15px 2px rgba(100, 100, 100, 0.7)","color":"#ddd"})
    $(".zais").css("color","#eee")
    $("table").css("box-shadow","1px 1px 5px white")
    $(".c").css("color","gold")
    $(".containerform").css("box-shadow","2px 2px 15px white")
    $("#reviews").css("color","black")
    if($("#reviews").text().trim()==="Something go wrong!"){
        $("#reviews").css("color","red")
    }
}

$("#darkmode").on("click",function(){
    if($("#darkmode").text().trim()==="Dark mode"){
        $("#darkmode").text("Light mode")
        $("#darkmode").css({"background":"#1f1f1f"})
        $("body").css({"background":"#121212","color":"#eee"})
        $(".header").css({"background-color":"#1f1f1f","color":"#eee"})
        $("#footer").css({"background-color":"#1f1f1f","color":"#eee"})
        $(".cardb").css({"background-color":"#292929","box-shadow":"0 0 15px 2px rgba(100, 100, 100, 0.7)","color":"#ddd"})
        $(".button1").css({"background-color":"#444","border":"none","color":"#eee"})
        $(".button2").css({"background-color":"transparent","border":"1px solid #666","color":"#aaa"})
        $("body").addClass("dark-mode")
        $(".card").css({"background-color":"#292929","box-shadow":"0 0 15px 2px rgba(100, 100, 100, 0.7)","color":"#ddd"})
        $(".zais").css("color","#eee")
        $("table").css("box-shadow","1px 1px 5px white")
        $(".c").css("color","gold")
        $(".containerform").css("box-shadow","2px 2px 15px white")
        $("#reviews").css("color","black")
        if($("#reviews").text().trim()==="Something go wrong!"){
            $("#reviews").css("color","red")
        }
        localStorage.setItem("dmode","dark")
    }
    else if($("#darkmode").text().trim()==="Light mode"){
        $("#darkmode").text("Dark mode")
        $("#darkmode").css({"background":"rgb(13,13,66)"})
        $("body").css({"background":"linear-gradient(to right, white,rgb(241, 235, 235))","color":"black"})
        $(".header").css({"background-color":"rgb(13, 13, 66)","color":"#eee"})
        $("#footer").css({"background-color":"rgb(13, 13, 66)","color":"#eee"})
        $(".cardb").css({"background-color":"#fff","box-shadow":"5px 5px 10px rgba(217, 205, 205, 0.7)","color":"black"})
        $(".button1").css({"background-color":"rgb(13, 13, 66)","border":"none","color":"white"})
        $(".button2").css({"background-color":"white","border":"2px solid black","color":"black"})
        $("body").removeClass("dark-mode")
        $(".card").css({"background-color":"#fff","box-shadow":"5px 5px 10px rgba(217, 205, 205, 0.7)","color":"black"})
        $(".zais").css("color","black")
        $("table").css("box-shadow","3px 3px 10px black")
        $(".c").css("color","rgb(67,67,139)")
        $("#reviews").css("color","black")
        if($("#reviews").text().trim()==="Something go wrong!"){
            $("#reviews").css("color","red")
        }
        localStorage.removeItem("dmode")
    }
})


