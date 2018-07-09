

function cat(data) {                           // Callback when JSON loads
  var newContent = '';                                // Variable to hold HTML

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    // for (var i = 0; i < data.events.length; i++) {    // Loop through object
     newContent += '<div class="event">';
     // newContent += '<h1><p><span>Todays forecast for   </span>' + data.name + '</p></h1>';
     //newContent += '<h1><p><span>Todays forecast for   ' + data.name + '</span></p></h1>' + '<img src="' + 'http://openweathermap.org/img/w/10d.png' + '" ';
     newContent += '<h1><p><span>Todays forecast for   ' + data.name + '<img src="' + 'http://openweathermap.org/img/w/10d.png' + '" '+ '</span></p></h1>';
     //newContent += '<img src="' + 'http://openweathermap.org/img/w/10d.png' + '" ';

     newContent += '<p><span>Cloudiness   : </span>' + data.weather[0].main + '</p>';//(An Array specified here)
     //newContent += '<p><span>Weather condition within the group   : </span>' + data.weather[0].description + '</p>';

     newContent += '<p><span>Temperature  : </span>' + data.main.temp + '<span> C</span></p>';
     // ************my addition**************
     newContent += '<p><span> Humidity  : </span>' + data.main.humidity + '<span> %</span></p>';
     newContent += '<p><span> Minimum temperature at the moment  : </span>' + data.main.temp_min + '<span> C</span></p>';
     newContent += '<p><span> Maximum temperature at the moment  : </span>' + data.main.temp_max + '<span> C</span></p>';
     //*****
     newContent += '<p><span> Wind speed : </span>' + data.wind.speed + '</p>';
     //*****
     newContent += '<p><span> Country code : </span>' + data.sys.country + '</p>';
     //*************my addition ends****************

     newContent += '</div>';
    // }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
}
