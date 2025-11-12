if(localStorage.getItem("key")==="yes"){
    $("#b1").css("background-color", "green");
    $("#b1").html("<i class='fa-solid fa-check'></i> Booked!");
    $("#demo").html("<button class='bt'>Cancel</button>");
}

$("#b1").on("click", function(){
    if($("#b1").html() === "Book Now"){
        $("#b1").css("background-color", "green");
        $("#b1").html("<i class='fa-solid fa-check'></i> Booked!");
        let x = $("<button class='bt'>Cancel</button>");  
        $("#demo").html(x);
        localStorage.setItem("key","yes")
    }
    else{
        alert("You already booked it");
    }
});

$("#demo").on("click", function(){
    $("#b1").css("background-color", "rgb(13, 13, 66)");
    $("#b1").html("Book Now");
    $("#demo").empty();
    localStorage.removeItem("key")
});

//---------------------------------------------------------------------

if(localStorage.getItem("key2")==="yes2"){
    $("#b2").css("background-color", "green");
    $("#b2").html("<i class='fa-solid fa-check'></i> Booked!");
    $("#demo2").html("<button class='bt'>Cancel</button>");
}

$("#b2").on("click", function(){
    if($("#b2").html() === "Book Now"){
        $("#b2").css("background-color", "green");
        $("#b2").html("<i class='fa-solid fa-check'></i> Booked!");
        let x = $("<button class='bt'>Cancel</button>");  
        $("#demo2").html(x);
        localStorage.setItem("key2","yes2")
    }
    else{
        alert("You already booked it");
    }
});

$("#demo2").on("click", function(){
    $("#b2").css("background-color", "rgb(13, 13, 66)");
    $("#b2").html("Book Now");
    $("#demo2").empty();
    localStorage.removeItem("key2")
});

//---------------------------------------------------------------------
if(localStorage.getItem("key3")==="yes3"){
    $("#b3").css("background-color", "green");
    $("#b3").html("<i class='fa-solid fa-check'></i> Booked!");
    $("#demo3").html("<button class='bt'>Cancel</button>");
}

$("#b3").on("click", function(){
    if($("#b3").html() === "Book Now"){
        $("#b3").css("background-color", "green");
        $("#b3").html("<i class='fa-solid fa-check'></i> Booked!");
        let x = $("<button class='bt'>Cancel</button>");  
        $("#demo3").html(x);
        localStorage.setItem("key3","yes3")
    }
    else{
        alert("You already booked it");
    }
});

$("#demo3").on("click", function(){
    $("#b3").css("background-color", "rgb(13, 13, 66)");
    $("#b3").html("Book Now");
    $("#demo3").empty();
    localStorage.removeItem("key3")
});
//---------------------------------------------------------------------
if(localStorage.getItem("key4")==="yes4"){
    $("#b4").css("background-color", "green");
    $("#b4").html("<i class='fa-solid fa-check'></i> Booked!");
    $("#demo4").html("<button class='bt'>Cancel</button>");
}

$("#b4").on("click", function(){
    if($("#b4").html() === "Book Now"){
        $("#b4").css("background-color", "green");
        $("#b4").html("<i class='fa-solid fa-check'></i> Booked!");
        let x = $("<button class='bt'>Cancel</button>");  
        $("#demo4").html(x);
        localStorage.setItem("key4","yes4")
    }
    else{
        alert("You already booked it");
    }
});

$("#demo4").on("click", function(){
    $("#b4").css("background-color", "rgb(13, 13, 66)");
    $("#b4").html("Book Now");
    $("#demo4").empty();
    localStorage.removeItem("key4")
});
//---------------------------------------------------------------------
if(localStorage.getItem("key5")==="yes5"){
    $("#b5").css("background-color", "green");
    $("#b5").html("<i class='fa-solid fa-check'></i> Booked!");
    $("#demo5").html("<button class='bt'>Cancel</button>");
}

$("#b5").on("click", function(){
    if($("#b5").html() === "Book Now"){
        $("#b5").css("background-color", "green");
        $("#b5").html("<i class='fa-solid fa-check'></i> Booked!");
        let x = $("<button class='bt'>Cancel</button>");  
        $("#demo5").html(x);
        localStorage.setItem("key5","yes5")
    }
    else{
        alert("You already booked it");
    }
});

$("#demo5").on("click", function(){
    $("#b5").css("background-color", "rgb(13, 13, 66)");
    $("#b5").html("Book Now");
    $("#demo5").empty();
    localStorage.removeItem("key5")
});
//---------------------------------------------------------------------
if(localStorage.getItem("key6")==="yes6"){
    $("#b6").css("background-color", "green");
    $("#b6").html("<i class='fa-solid fa-check'></i> Booked!");
    $("#demo6").html("<button class='bt'>Cancel</button>");
}

$("#b6").on("click", function(){
    if($("#b6").html() === "Book Now"){
        $("#b6").css("background-color", "green");
        $("#b6").html("<i class='fa-solid fa-check'></i> Booked!");
        let x = $("<button class='bt'>Cancel</button>");  
        $("#demo6").html(x);
        localStorage.setItem("key6","yes6")
    }
    else{
        alert("You already booked it");
    }
});

$("#demo6").on("click", function(){
    $("#b6").css("background-color", "rgb(13, 13, 66)");
    $("#b6").html("Book Now");
    $("#demo6").empty();
    localStorage.removeItem("key6")
});
//---------------------------------------------------------------------
if(localStorage.getItem("key7")==="yes7"){
    $("#b7").css("background-color", "green");
    $("#b7").html("<i class='fa-solid fa-check'></i> Booked!");
    $("#demo7").html("<button class='bt'>Cancel</button>");
}

$("#b7").on("click", function(){
    if($("#b7").html() === "Book Now"){
        $("#b7").css("background-color", "green");
        $("#b7").html("<i class='fa-solid fa-check'></i> Booked!");
        let x = $("<button class='bt'>Cancel</button>");  
        $("#demo7").html(x);
        localStorage.setItem("key7","yes7")
    }
    else{
        alert("You already booked it");
    }
});

$("#demo7").on("click", function(){
    $("#b7").css("background-color", "rgb(13, 13, 66)");
    $("#b7").html("Book Now");
    $("#demo7").empty();
    localStorage.removeItem("key7")
});
//---------------------------------------------------------------------
if(localStorage.getItem("key8")==="yes8"){
    $("#b8").css("background-color", "green");
    $("#b8").html("<i class='fa-solid fa-check'></i> Booked!");
    $("#demo8").html("<button class='bt'>Cancel</button>");
}

$("#b8").on("click", function(){
    if($("#b8").html() === "Book Now"){
        $("#b8").css("background-color", "green");
        $("#b8").html("<i class='fa-solid fa-check'></i> Booked!");
        let x = $("<button class='bt'>Cancel</button>");  
        $("#demo8").html(x);
        localStorage.setItem("key8","yes8")
    }
    else{
        alert("You already booked it");
    }
});

$("#demo8").on("click", function(){
    $("#b8").css("background-color", "rgb(13, 13, 66)");
    $("#b8").html("Book Now");
    $("#demo8").empty();
    localStorage.removeItem("key8")
});
//---------------------------------------------------------------------
if(localStorage.getItem("key9")==="yes9"){
    $("#b9").css("background-color", "green");
    $("#b9").html("<i class='fa-solid fa-check'></i> Booked!");
    $("#demo9").html("<button class='bt'>Cancel</button>");
}

$("#b9").on("click", function(){
    if($("#b9").html() === "Book Now"){
        $("#b9").css("background-color", "green");
        $("#b9").html("<i class='fa-solid fa-check'></i> Booked!");
        let x = $("<button class='bt'>Cancel</button>");  
        $("#demo9").html(x);
        localStorage.setItem("key9","yes9")
    }
    else{
        alert("You already booked it");
    }
});

$("#demo9").on("click", function(){
    $("#b9").css("background-color", "rgb(13, 13, 66)");
    $("#b9").html("Book Now");
    $("#demo9").empty();
    localStorage.removeItem("key9")
});

//----------------------------------------------------------------------
document.getElementById("btn").onclick = function(){
    if(document.getElementById("btn").innerText === "Show review"){
        fetch("review.json")
        .then(function (res){
            return res.json()
        })

        .then(function (data){
            document.getElementById("btn").innerText = "Hide review"
            data.comments.forEach(function (jdata){
                let block = document.createElement("div")
                block.className = "reviews"
                $(block).css({"background-color":"#eee","margin":"10px auto","padding":"8px","border-radius":"8px","width":"300px"})
                block.innerHTML = "<strong>" + jdata.user + "</strong>:" + jdata.text
                document.getElementById("reviews").appendChild(block)
            })
        })

        .catch(function(){
            document.getElementById("reviews").innerHTML = "Something go wrong!"
            document.getElementById("reviews").style.color = "red"
        })
    }
    else{
        document.getElementById("btn").innerText = "Show review"
        document.getElementById("reviews").innerHTML=""
    }
}
