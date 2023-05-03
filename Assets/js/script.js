$(function () {
  // added a listener that retrives info needed to be saved to local storage
  $('.saveBtn').on('click', function() {
  var $timeBlock = $(this).closest('.time-block');
  var hour = $timeBlock.attr('id').replace('hour-', '');
  var description = $timeBlock.find('.description').val();
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
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
// variables to include current date and time
  var timeDisplay = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $('#currentDay').text(timeDisplay);
  function updateTime() {
    var timeDisplay = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    $('#currentDay').text(timeDisplay);
  }
  updateTime();
  setInterval(updateTime, 1000);
});
