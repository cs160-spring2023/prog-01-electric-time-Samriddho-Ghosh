function calculateTime() {
  var mode = document.getElementById("mode").value;
  var distance = document.getElementById("distance").value;
  var time = null;
  
  var walkingTime = distance / 3.1
  walkingTime = walkingTime.toFixed(2);
  
  var geobladeTime = distance / 15
  geobladeTime = geobladeTime.toFixed(2);
  
  switch(mode) {
    case "Walking":
      time = timeComputation(30, distance, 3.1);
      break;
    case "Boosted Mini S Board":
      time = timeComputation(7, distance, 18);
      break;
    case "Evolve Bamboo GTR 2in":
      time = timeComputation(31, distance, 24);
      break;
    case "OneWheel XR":
      time = timeComputation(18, distance, 19);
      break;
    case "MotoTec Skateboard":
      time = timeComputation(30, distance, 22);
      break;
    case "Segway Ninebot S":
      time = timeComputation(13, distance, 10);
      break;
    case "Segway Ninebot S-PLUS":
      time = timeComputation(22, distance, 12);
      break;
    case "Razor Scooter":
      time = timeComputation(15, distance, 18);
      break;
    case "GeoBlade 500":
      time = timeComputation(8, distance, 15);
      break;
    case "Hovertrax Hoverboard":
      time = timeComputation(6, distance, 9);
      break;
    default:
      time = 0;
  }

  if(time != null) {
    time = time.toFixed(2);
    if(time == walkingTime)
    {
      document.getElementById("output").innerHTML = "Time taken by Walking: " + time + " hours";
      document.getElementById("output2").innerHTML = "Comparison: Time taken by GeoBlade: " + geobladeTime + " hours";
      }
    else{
      document.getElementById("output").innerHTML = "Time taken: " + time + " hours";
      document.getElementById("output2").innerHTML = "Comparison: Time taken by Walking: " + walkingTime + " hours";
    }
  }
}

function timeComputation (maxDistance, currentDistance, speed)
{
  if(currentDistance > maxDistance ){
    document.getElementById("output").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
    alert("The input distance is out of range for the selected transportation option");
    return null;
  }
  var timeNew = currentDistance / speed;
  return timeNew;
}
