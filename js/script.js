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
        if (status.indexOf("Closed") != -1) {
          status = "N/A";
          logo = "https://dummyimage.com/100x100/686cf0/000000.png&text=N/A";
        } else if (onoff == "offline") status = "offline";
        if (logo == null) logo = "https://dummyimage.com/100x100/000/fff.png&text=LOGO";
        html = "<div class = 'row result " +
          onoff + " " + strm + "'><div class='col-md-4 divimg'><img class='image img-circle img-responsive' src='" +
          logo + "' alt='Image not Available' ></div><a style='text-decoration:none' class = 'col-md-4 link' target = '_blank' href = '" +
          link + "'>" + strm + "</a><span class='col-md-4 description hidden-xs'>" +
          status + "</span></div>";
        $(".mainresults").append(html);
        if(strm=="freecodecamp"){
          var fcchtml = "<p class='fccp'><a style='text-decoration:none' target = '_blank' href = 'https://www.twitch.tv/freecodecamp'>FreeCodeCamp is " +status +"!</p>";
          $(".fccstatus").append(fcchtml);
        }
      });

    });
  });
}


getStreamers();

$(".selector").hover(function() {
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
