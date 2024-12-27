/* Create a cache object */
var cache = new LastFMCache();

/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : '399ffcb30ce26e822e1b76e5e1f9e2c0',
  apiSecret : '2b2c2ec17dfd339b7550e5f238d67d82',
  cache     : cache
});

let displayPlayingTrack = () => {
    /* Load some artist info. */
    const recTracks = lastfm.user.getRecentTracks({
        limit: 1,
        user: 'Woodsiii',
        page: 1,
        api_key: '399ffcb30ce26e822e1b76e5e1f9e2c0'
    })

    console.log(recTracks);
}

setInterval(displayPlayingTrack, 60000)