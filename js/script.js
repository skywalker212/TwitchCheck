console.log("ready!");

var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "brunofinX", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404"];
var maincontent = "";
for (var i = 0; i < streamers.length; i++) {
  maincontent += "<div class='stms'><a class='link' href='https://www.twitch.tv/" +streamers[i] +"' target='_blank'>" +streamers[i] +"</a></div>";
}

$(".mainresults").html(maincontent);

$(".text-content").keyup(function () {
  maincontent="";
  console.log("pressing the key");
  var value = $(this).val();
  for (var i = 0; i < streamers.length; i++) {
    if(streamers[i].toLowerCase().indexOf(value)!=-1)
    maincontent += "<div class='stms'><a class='link' href='https://www.twitch.tv/" +streamers[i] +"' target='_blank'>" +streamers[i] +"</a></div>";
  }
  $(".mainresults").html(maincontent);
});

$(".src-btn").on("click", function(event) {
  event.preventDefault();
  console.log("search button was clicked");
  var query = $(".text-content").val();
  console.log(query);
});
