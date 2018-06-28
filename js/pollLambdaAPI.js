// Spotify "what's playing". Written by Josh Spicer."
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    res = JSON.parse(this.response);

    // Hide our shame when it all goes wrong.
    if (!res.songName) {
      return;
    }

    let songStatus,
      songName,
      filler1,
      artistName,
      filler2,
      spotifyStar = "";

    // Detect if i'm actively listening to music.
    if (res.isPlaying) {
      songStatus = "Josh is currently listening to ";
    } else {
      songStatus = "Josh last listened to ";
    }
    // Song name and artist.
    songName = res.songName;
    filler1 = " by ";
    artistName = res.artistName;
    filler2 = " on spotify.";
    spotifyStar = "<a style=href='#'>*</a>";

    document.getElementById("spotify").innerHTML =
      songStatus +
      "<span id='spotifyGreen'>" +
      songName +
      "</span>" +
      filler1 +
      "<span id='spotifyGreen'>" +
      artistName +
      "</span>" +
      filler2;
      // + spotifyStar;
  }
};
xhttp.open("GET", "https://api.joshspicer.com/spotify/current", true);
xhttp.send();