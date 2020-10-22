function clock() {


  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  if(hours<10){
    hours = "0"+hours;
  }
  if(minutes<10){
    minutes = "0"+minutes;
  }

  var timeString = ""+hours+":"+minutes;
  uhr.innerHTML = timeString;


window.setTimeout("clock();", 1000);
}