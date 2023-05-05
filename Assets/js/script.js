$(function () {
  // added a listener that retrives info needed to be saved to local storage
  $(".saveBtn").on("click", function () {
    var $timeBlock = $(this).closest(".time-block");
    var hour = $timeBlock.attr("id");
    var description = $timeBlock.find(".description").val();
    localStorage.setItem(hour, description);
  });
  // Apply past, present, or future class to each time block
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id"));
    var currentHour = dayjs().hour();
    if (hour < currentHour) {
      $(this).children(".description").addClass("past");
    } else if (hour === currentHour) {
      $(this).children(".description").addClass("present");
    } else {
      $(this).children(".description").addClass("future");
    }
  });
  // getItem from the localStorage
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var event = localStorage.getItem(id);
    if (event !== null) {
      $(this).children(".description").val(event);
    }
  });
  // variables to include current date and time
  function updateTime() {
    var timeDisplay = dayjs().format("dddd, MMM DD, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(timeDisplay);
  }
  updateTime();
  setInterval(updateTime, 1000);
});
