$(document).ready(function(){
 // put your code here

// When a colored panel is clicked, all panels vanish-using sibling method!!!

// $(".theButton").click(function() {
//     $("#panel .container").siblings().hide();
// })
// When a colored panel is clicked, just that panel disappears

$(".theButton: first()").click(function(){
    $("panel. container").hide();
})

// //adds  a fadeTo to all panels when a panel is clicked
// $(".theButton").click(function(){
// 	$  ("#panel .container").siblings().fadeTo(1000, .5);
//    });


// //restores all panels to full opacity when reset button clicked
// $(".superButton").click(function(){
// 	$("#panel .container").siblings().fadeTo(1000,1);
//    });


// //turns panel background black on mouseenter
// $(".theButton").mouseenter(function(){
// 	$(this).addClass("makeBlack");
//    });

//  //returns to original colour on mouseout
// $(".theButton").mouseout(function(){
// 	$(this).removeClass("makeBlack");
//    });

});