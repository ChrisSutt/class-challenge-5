
$(document).ready(function () {

  dayjs.extend(window.dayjs_plugin_advancedFormat)

  let currentDay = dayjs();
    $('#currentDay').text(currentDay.format('dddd MMM, Do'));

 
  
    let textSave = $('.saveBtn');


    textSave.on('click', function () {
    var divId = $(this).closest('div').attr('id');
    let x = $('#' + divId).find('textarea').val();

    localStorage.setItem(divId, x);
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
        
      
      }
      time[i].find('textarea').val(loadLocalData(hour));
    }
   
      

      
    
    
});


