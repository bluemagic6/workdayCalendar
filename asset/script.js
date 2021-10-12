$("#currentDay").text(moment().format("MMMM DD, YYYY!"));

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// save in local storage

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,text);
});

$("9.description").val(localStorage.getItem("9")); 
$("10.description").val(localStorage.getItem("10")); 
$("11.description").val(localStorage.getItem("11")); 
$("12.description").val(localStorage.getItem("12"));
$("13.description").val(localStorage.getItem("13"));
$("14.description").val(localStorage.getItem("14"));
$("15.description").val(localStorage.getItem("15"));
$("16.description").val(localStorage.getItem("16"));
$("17.description").val(localStorage.getItem("17"));

// function for current hour to color blocks 

function updateHour() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id"));

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
            } 
          else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
            } 
           else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
});

}
updateHour();
