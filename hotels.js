$("#c1").on("mouseover",function(){
    $("#c1").animate({"width":"650px","height":"250px"})
    $("#ig").animate({opacity:1})
    $("#item").animate({"font-size":"0px"})
})

$("#c1").on("mouseout",function(){
    $("#c1").animate({"width":"600px","height":"200px"})
    $("#ig").animate({opacity:0.3})
    $("#item").animate({"font-size":"25px"})
}) 

$("#nimg").on("click",function(){
    let x = $("#item").text()
    if(x==="Kazakhstan"){
        $("#ig").attr("src","usa.jpg");
        $("#item").text("United States");

        $("#i1").attr("src","plaza.webp")
        $(".l1").attr("href","7info.html")
        $("#name1").text("The Plaza Hotel")
        $("#1_1").text("Located on Fifth Avenue and Central Park South, The Plaza Hotel is a symbol of timeless luxury.")
        $("#1_2").text("Starting from $650 per night")
        $("#1_3").text("Rating: ★★★★★")

        $("#i2").attr("src","hills.webp")
        $(".l2").attr("href","8info.html")
        $("#name2").text("The Beverly Hills Hotel")
        $("#2_1").text("This iconic hotel on Sunset Boulevard has hosted Hollywood’s most famous stars for over a century.")
        $("#2_2").text("Starting from $720 per night")
        $("#2_3").text("Rating: ★★★★★")
        
        $("#i3").attr("src","vegas.webp")
        $(".l3").attr("href","9info.html")
        $("#name3").text("Bellagio Hotel")
        $("#3_1").text("The Bellagio offers an unforgettable luxury experience on the Las Vegas Strip. Modern view.")
        $("#3_2").text("Starting from $450 per night")
        $("#3_3").text("Rating: ★★★★☆")

    }
    else if(x==="United Arab Emirates"){
        $("#ig").attr("src","kz.webp");
        $("#item").text("Kazakhstan");

        $("#i1").attr("src","rixos.webp")
        $(".l1").attr("href","4info.html")
        $("#name1").text("Rixos")
        $("#1_1").text("Escape to the tranquil beauty of Burabay National Park at Rixos Borovoe. Amazing nature")
        $("#1_2").text("Starting from $250 per night")
        $("#1_3").text("Rating: ★★★★☆")

        $("#i2").attr("src","ritz.avif")
        $(".l2").attr("href","5info.html")
        $("#name2").text("The Ritz-Carlton")
        $("#2_1").text("Experience the perfect blend of modern luxury and Kazakh heritage at The Ritz-Carlton, Almaty.")
        $("#2_2").text("Starting from $350 per night")
        $("#2_3").text("Rating: ★★★★★")
        
        $("#i3").attr("src","st.png")
        $(".l3").attr("href","6info.html")
        $("#name3").text("The St. Regis Astana")
        $("#3_1").text("Overlooking the Ishim River, The St. Regis Astana blends timeless elegance with modern luxury.")
        $("#3_2").text("Starting from $400 per night")
        $("#3_3").text("Rating: ★★★★★")
    }
    else{
        $("#ig").attr("src","uae1.jpg");
        $("#item").text("United Arab Emirates")

        $("#i1").attr("src","1.jpg")
        $(".l1").attr("href","Info.html")
        $("#name1").text("Burj Al Arab")
        $("#1_1").text("Experience luxury at its finest in the iconic Burj Al Arab, where opulence meets unparalleled service.")
        $("#1_2").text("Starting from $1,000 per night")
        $("#1_3").text("Rating: ★★★★★")

        $("#i2").attr("src","2.jpg")
        $(".l2").attr("href","2info.html")
        $("#name2").text("The Atlantis")
        $("#2_1").text("Dive into a world of wonder at The Atlantis, where every moment is filled with excitement and luxury.")
        $("#2_2").text("Starting from $800 per night")
        $("#2_3").text("Rating: ★★★★☆")
        
        $("#i3").attr("src","3.jpg")
        $(".l3").attr("href","3info.html")
        $("#name3").text("Atlantis The Royal")
        $("#3_1").text("Discover a new level of sophistication at Atlantis The Royal, where elegance and modernity converge.")
        $("#3_2").text("Starting from $1,200 per night")
        $("#3_3").text("Rating: ★★★★★")
    }
})

$("#n1img").on("click",function(){
    let x = $("#item").text()
    if(x==="Kazakhstan"){
        $("#ig").attr("src","uae1.jpg");
        $("#item").text("United Arab Emirates")
        
        $("#i1").attr("src","1.jpg")
        $("#name1").text("Burj Al Arab")
        $(".l1").attr("href","Info.html")
        $("#1_1").text("Experience luxury at its finest in the iconic Burj Al Arab, where opulence meets unparalleled service.")
        $("#1_2").text("Starting from $1,000 per night")
        $("#1_3").text("Rating: ★★★★★")

        $("#i2").attr("src","2.jpg")
        $(".l2").attr("href","2info.html")
        $("#name2").text("The Atlantis")
        $("#2_1").text("Dive into a world of wonder at The Atlantis, where every moment is filled with excitement and luxury.")
        $("#2_2").text("Starting from $800 per night")
        $("#2_3").text("Rating: ★★★★☆")
        
        $("#i3").attr("src","3.jpg")
        $("#name3").text("Atlantis The Royal")
        $(".l3").attr("href","3info.html")
        $("#3_1").text("Discover a new level of sophistication at Atlantis The Royal, where elegance and modernity converge.")
        $("#3_2").text("Starting from $1,200 per night")
        $("#3_3").text("Rating: ★★★★★")
    }
    else if(x==="United States"){
        $("#ig").attr("src","kz.webp");
        $("#item").text("Kazakhstan");

        $("#i1").attr("src","rixos.webp")
        $("#name1").text("Rixos")
        $(".l1").attr("href","4info.html")
        $("#1_1").text("Escape to the tranquil beauty of Burabay National Park at Rixos Borovoe. Amazing nature")
        $("#1_2").text("Starting from $250 per night")
        $("#1_3").text("Rating: ★★★★☆")

        $("#i2").attr("src","ritz.avif")
        $(".l2").attr("href","5info.html")
        $("#name2").text("The Ritz-Carlton")
        $("#2_1").text("Experience the perfect blend of modern luxury and Kazakh heritage at The Ritz-Carlton, Almaty.")
        $("#2_2").text("Starting from $350 per night")
        $("#2_3").text("Rating: ★★★★★")
        
        $("#i3").attr("src","st.png")
        $(".l3").attr("href","6info.html")
        $("#name3").text("The St. Regis Astana")
        $("#3_1").text("Overlooking the Ishim River, The St. Regis Astana blends timeless elegance with modern luxury.")
        $("#3_2").text("Starting from $400 per night")
        $("#3_3").text("Rating: ★★★★★")      
    }
    else{
        $("#ig").attr("src","usa.jpg");
        $("#item").text("United States");
       
        $("#i1").attr("src","plaza.webp")
        $(".l1").attr("href","7info.html")
        $("#name1").text("The Plaza Hotel")
        $("#1_1").text("Located on Fifth Avenue and Central Park South, The Plaza Hotel is a symbol of timeless luxury.")
        $("#1_2").text("Starting from $650 per night")
        $("#1_3").text("Rating: ★★★★★")

        $("#i2").attr("src","hills.webp")
        $(".l2").attr("href","8info.html")
        $("#name2").text("The Beverly Hills Hotel")
        $("#2_1").text("This iconic hotel on Sunset Boulevard has hosted Hollywood’s most famous stars for over a century.")
        $("#2_2").text("Starting from $720 per night")
        $("#2_3").text("Rating: ★★★★★")
        
        $("#i3").attr("src","vegas.webp")
        $(".l3").attr("href","9info.html")
        $("#name3").text("Bellagio Hotel")
        $("#3_1").text("The Bellagio offers an unforgettable luxury experience on the Las Vegas Strip. Modern view.")
        $("#3_2").text("Starting from $450 per night")
        $("#3_3").text("Rating: ★★★★☆")
    }
})



