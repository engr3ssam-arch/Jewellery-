//BUTTON HOVER
$(document).ready(function(){
  $("button").hover(function(){
  $(this).css("background-color","#4b4646ff");
    
 
  }),
   $("button").mouseleave(function(){
   $(".learn-more").css("background-color","#e11717ff"),
    $(".about-us").css("background-color","transparent")
 
  });
});

//SLACK MENUE
$(document).ready(function(){
  
  $(".menu-icon").click(function(event){
    event.stopPropagation(); 
    $(".slack-menu").fadeToggle(); 
  });


  $(document).click(function(){
    $(".slack-menu").fadeOut();
  });

  $(".slack-menu").click(function(event){
    event.stopPropagation();
  });
});

//ICON HOVER
$(document).ready(function(){
$("i").hover(function(){
$(this).css("color","#e11717ff");


})

 $("i").mouseleave(function(){
   $(this).css("color","#000");
   
});


});

// IMAGES EFFECTS
$(document).ready(function(){
  $("img").mouseenter(function(){
    $(this).css({
      "transform": "scale(1.2)" 
    });
  });

  $("img").mouseleave(function(){
    $(this).css({
      "transform": "scale(1)"
    });
  });
});


//scroll to top

let topBtn = document.getElementById("topBtn");


window.onscroll = function () {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};


topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//slider

let slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("next").onclick = function () {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

document.getElementById("prev").onclick = function () {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};