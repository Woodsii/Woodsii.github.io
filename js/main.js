var lastfmData = {
    baseURL:
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
    // Your Last.fm Username
    user: "Woodsiii",
    // Your API key
    api_key: "399ffcb30ce26e822e1b76e5e1f9e2c0",
    additional: "&format=json&limit=1"
  };
  
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
        console.log(resp);
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
  setInterval(getSetLastFM, 10 * 1000);
  