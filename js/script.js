var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "brunofinX", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW", "comster404"];

var maincontent = "";
var avail;
var status;
var imageLink;
var description;

for (var i = 0; i < streamers.length; i++) {

  $.ajax({

    url: "https://wind-bow.glitch.me/twitch-api/channels/" + streamers[i],
    dataType: 'json',
    type: 'GET',
    success: function(reply) {
      if (reply.status == 404) {
        avail = 404;
      } else {
        avail = "Active Account";
        $.ajax({
          url: "https://wind-bow.glitch.me/twitch-api/streams/" + streamers[i],
          dataType: 'json',
          type: 'GET',
          success: function(data) {
            if (data.stream == null) {
              status = "offline";
            } else {
              imageLink = data.channel.logo;
              description = data.channel.status;

            }
          }
        });
      }
    }
  });
  maincontent += "<div class='stms'><a class='link' href='https://www.twitch.tv/" + streamers[i] + "' target='_blank'>" + streamers[i] + "</a></div>";
}

$(".mainresults").html(maincontent);

$(".text-content").keyup(function() {
  maincontent = "";
  var value = $(this).val();
  for (var i = 0; i < streamers.length; i++) {
    if (streamers[i].toLowerCase().indexOf(value) != -1) {
      maincontent += "<div class='stms'><a class='link' href='https://www.twitch.tv/" + streamers[i] + "' target='_blank'>" + streamers[i] + "</a></div>";
    }
  }
  $(".mainresults").html(maincontent);
});

$(".src-btn").on("click", function(event) {
  event.preventDefault();
  console.log("search button was clicked");
  var query = $(".text-content").val();
  console.log(query);
});
