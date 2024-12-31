var lastfmData = {
    baseURL:
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
    user: "Woodsiii",
    api_key: "399ffcb30ce26e822e1b76e5e1f9e2c0",
    additional: "&format=json&limit=1"
  };

  let trackArtImg = document.getElementById("trackart");
  let trackTitleLink = document.getElementById("tracktitle");
  let trackArtistLink = document.getElementById("trackartist");

  var getSetLastFM = function() {
    $.ajax({
      type: "GET",
      url:
        lastfmData.baseURL +
        lastfmData.user +
        "&api_key=" +
        lastfmData.api_key +
        lastfmData.additional,
      dataType: "json",

      success: function(resp) {
        const currPlaying = resp.recenttracks.track["0"];

        // manipulate the dom
        trackArtImg.src = currPlaying.image[2]['#text']; // 0-3 for various sizes. Curr medium.
        
        trackTitleLink.href = currPlaying.url;
        trackTitleLink.innerHTML = currPlaying.name;

        trackArtistLink.href = currPlaying.url
        trackArtistLink.innerHTML = currPlaying.artist['#text']

      }, 
      error: function(resp) {
        console.log('failure....')
        console.log(resp)
      }
    });
  };
  
  // Get the new one.
  getSetLastFM();
  // Start the countdown.
  setInterval(getSetLastFM, 900000);