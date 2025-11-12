$("#bt").on("click",function(){
    let fname = $("#fname").val();
    if(fname === ''){
        $("#demo1").text("Field must be filled!").css({"color":"red","font-size":"10px"});
        $("#fname").css("border","3px solid red");
    }
    else{
        $("#demo1").text("Required").css({"color":"lime","font-size":"10px"});
        $("#fname").css("border","3px solid lime");
    }

    //--------------------------------
    let lname = $("#lname").val();
    if(lname === ''){
        $("#demo2").text("Field must be filled!").css({"color":"red","font-size":"10px"});
        $("#lname").css("border","3px solid red");
    }
    else{
        $("#demo2").text("Required").css({"color":"lime","font-size":"10px"});
        $("#lname").css("border","3px solid lime");
    }

    //-------------------------------

    let phone = $("#phone").val();
    if(phone === ''){
        $("#demo3").text("Field must be filled!").css({"color":"red","font-size":"10px"});
        $("#phone").css("border","3px solid red");
    }
    else if(isNaN(phone)){
        $("#demo3").text("Invalid phone number!").css({"color":"red","font-size":"10px"});
        $("#phone").css("border","3px solid red");
    }
    else if(phone.length<=1){
        $("#demo3").text("Must contain at least 2 digits!").css({"color":"red","font-size":"10px"});
        $("#phone").css("border","3px solid red");
    }
    else if(phone.length>10){
        $("#demo3").text("Must contain at most 9 digits!").css({"color":"red","font-size":"10px"});
        $("#phone").css("border","3px solid red");
    }
    else{
        $("#demo3").text("").css({"color":"lime","font-size":"10px"});
        $("#phone").css("border","3px solid lime");
    }

    //--------------------------------

    let email = $("#email").val();
    let emailPattern = /.+@.+\..+/
    if(email === ''){
        $("#demo4").text("Field must be filled!").css({"color":"red","font-size":"10px"});
        $("#email").css("border","3px solid red");
    }
    else if (!emailPattern.test(email)) {
        $("#demo4").text("Invalid email format!").css({"color":"red","font-size":"10px"});
        $("#email").css("border","3px solid red");
    }
    else{
        $("#demo4").text("Required").css({"color":"lime","font-size":"10px"});
        $("#email").css("border","3px solid lime");
    }

    $("#demo5").text("Not required").css({"color":"gray","font-size":"13px"})
    $("#demo6").text("Not required").css({"color":"gray","font-size":"13px"})
    $("#demo7").text("Not required").css({"color":"gray","font-size":"13px"})
})














