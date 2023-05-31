



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.





$(document).ready(function () {

  dayjs.extend(window.dayjs_plugin_advancedFormat)

  let currentDay = dayjs();
    $('#currentDay').text(currentDay.format('dddd MMM, Do'));

 
  
    let textSave = $('.saveBtn');


    textSave.on('click', function () {
    var divId = $(this).closest('div').attr('id');
    let x = $('#' + divId).find('textarea').val();

    localStorage.setItem(divId, x);
    console.log(divId);
    console.log(x);
    })

    function loadLocalData(t) {
      let loadText = localStorage.getItem('hour-' + t);

      return loadText;
    }

    
   
    
    let time = [
      $('#hour-9'),
      $('#hour-10'),
      $('#hour-11'),
      $('#hour-12'),
      $('#hour-13'),
      $('#hour-14'),
      $('#hour-15'),
      $('#hour-16'),
      $('#hour-17'),

    ]

    for (let i = 0; i < time.length; i++){
    
       let hour = time[i].attr('id');
       hour = hour.replace('hour-', '');
      
        if (hour < dayjs().hour()) {
        time[i].removeClass('future');
        time[i].removeClass('present');
        time[i].addClass('past');
        console.log('past');
  
      } else if (hour == dayjs().hour())
      {
        time[i].removeClass('future');
        time[i].removeClass('past');
        time[i].addClass('present');
        console.log('present')
        
      } else if (hour > dayjs().hour())
      {
        time[i].removeClass('past');
        time[i].removeClass('present');
        time[i].addClass('future');
        console.log('future');
  
      } else {
        console.log('didnt work');
      
      }
      time[i].find('textarea').val(loadLocalData(hour));
    }
   
      

      
    
     
   


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


