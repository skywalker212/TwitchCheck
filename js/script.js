var streamers = ["OgamingSC2", "cretetion", "freecodecamp", "storbeck", "brunofinX", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW", "comster404"];


function getStreamers() {
  streamers.forEach(function functionName(strm) {
    var status;
    var logo;
    var onoff;
    var html;
    $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/" + strm + "?callback=?", function(data) {
      status = data.status;
      logo = data.logo;
      if (status == 404) {
        status = "Channel has been Closed";
        onoff = "Account Closed";
      } else if (status == null) status = "Details not Available";
      $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + strm + "?callback=?", function(data) {
        if (onoff == "Account Closed") onoff = "N/A"
        if (data.stream == null) onoff = "offline";
        else onoff = "online";
        link = "https://www.twitch.tv/" + strm;
        if(status.indexOf("Closed") != -1) status = "N/A";
        else if(onoff=="offline") status = "offline";
        html = "<div class = 'row result " +
          onoff + " " + strm + "'><img class='col-md-4 image img-circle img-responsive' src='" +
          logo + "' alt='Image not Available' ><a class = 'col-md-4 link' target = '_blank' href = '" +
          link + "'>" + strm + "</a><span class='col-md-4 description hidden-xs'>" +
          status + "</span></div>";
        $(".mainresults").append(html);
      });

    });
  });
}


getStreamers();


$(".selector").click(function() {
  $(".selector").removeClass("active");
  $(this).addClass("active");
  var status = $(this).attr('id');
  if (status === "all") {
    $(".online, .offline").removeClass("hidden");
  } else if (status === "online") {
    $(".online").removeClass("hidden");
    $(".offline").addClass("hidden");
  } else {
    $(".offline").removeClass("hidden");
    $(".online").addClass("hidden");
  }
});

$(".selector").hover(function () {
  $(".selector").removeClass("active");
  $(this).addClass("active");
  var status = $(this).attr('id');
  if (status === "all") {
    $(".online, .offline").removeClass("hidden");
  } else if (status === "online") {
    $(".online").removeClass("hidden");
    $(".offline").addClass("hidden");
  } else {
    $(".offline").removeClass("hidden");
    $(".online").addClass("hidden");
  }
});
