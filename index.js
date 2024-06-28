function addReminder(textInput, dateInput) {
    var dateFormatted = dateInput.slice(5,7) + "/" + dateInput.slice(8,10) + "/" + dateInput.slice(0,4);
    
    if($("#new-reminder-input-priority").is(':checked')) {
        $("#priority-to-do-list").append("<li><div>" + dateFormatted + "</div><p>" + textInput + "</p><button class='invisible'>Mark Complete</button></li>");
    } else {
        $("#to-do-list").append("<li><div>" + dateFormatted + "</div><p>" + textInput + "</p><button class='invisible'>Mark Complete</button></li>");
    }
    
    $("li>button").on("mouseenter", function(event) {
        $(event.target).removeClass("invisible");
    })
    $("li>button").on("mouseleave", function(event) {
        $(event.target).addClass("invisible");
    })
}

$("#new-reminder-button").on("click", function() {
    var reminderText = $("#new-reminder-input-text").val();
    var reminderDate = $("#new-reminder-input-date").val();
    addReminder(reminderText, reminderDate);
 
    $("#new-reminder-input-text").val("");
    $("#new-reminder-input-date").val("");
    $("#new-reminder-input-priority").prop('checked', false);
    
    $("li>button").on("click", function(event) {
        $(event.target).parent().children("p").html("Done!");
        $(event.target).parent().children("p").addClass("done-text");
        $(event.target).parent().children("button").hide();
        $(event.target).parent().fadeOut(1200);
    })
})