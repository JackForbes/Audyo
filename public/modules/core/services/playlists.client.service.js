'use strict';

angular.module('core').factory('PlaylistsModel',
function() {
  var interestPlaylistMap = {
    'mood': [{
        name: 'Giraffe',
        playlist: 'Have a Great Day',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:2PXdUld4Ueio2pHcB6sM8j',
        color: '#CF000F'
      },
      {
        name: 'Banana',
        playlist: 'Mood Booster',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:6uTuhSs7qiEPfCI3QDHXsL',
        color: '#F9690E'
      },
      {
        name: 'Space',
        playlist: 'Your Favorite Coffeehouse',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:4BKT5olNFqLB1FAa8OtC8k',
        color: '#19B5FE'
    }],
    'party': [{
        name: 'Panda',
        playlist: 'Viral 50',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:0CoQk8bVPF1famEAZ5BYE4',
        color: '#e67e22'
      },
      {
        name: 'Yo',
        playlist: 'Girls Night',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:7uDoSz5VxK5lbXgj7tBMG9',
        color: '#9A12B3'
      },
      {
        name: 'Velvet',
        playlist: 'Weekend Hangouts',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5Oo5QuAOjjXMMXphFqC6eo',
        color: '#c0392b'
    }],
    'pop': [{
        name: 'Hawk',
        playlist: 'Indie Pop',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:2ikvjqFDwalfKdCHkxn79O',
        color: '#4ECDC4'
      },
      {
        name: 'Forever',
        playlist: 'Top Hits',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5FJXhjdILmRA2z5bvz4nzf',
        color: '#F64747'
      },
      {
        name: 'Baguette',
        playlist: 'Top Of The Charts',
        src: 'https://embed.spotify.com/?uri=spotify:user:myplay.com:playlist:4ANVDtJVtVMVc2Nk79VU1M',
        color: '#16a085'
    }],
    'workout': [{
        name: 'Blueberry',
        playlist: 'Cardio',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:7cOO30bzxMm4tO34C9UalD',
        color: '#34495E'
      },
      {
        name: 'Sour',
        playlist: 'Power Workout',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5p9ILyu1wb4KKHORoXU8nb',
        color: '#6C7A89'
      },
      {
        name: 'Steep',
        playlist: 'House Workout',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:4jCr1WuRoFiUbcqlja4dWR',
        color: '#4DAF7C'
    }],
    'sleep': [{
        name: 'Glory',
        playlist: 'Sleep',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5UMleIsaNDK5LzZRbrbcXr',
        color: '#BE90D4'
      },
      {
        name: 'Rhinoceros',
        playlist: 'Peaceful Piano',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:63dDpdoVHvx5RkK87g4LKk',
        color: '#F9BF3B'
      },
      {
        name: 'Surrender',
        playlist: 'Evening Acoustic',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:2yQuxmP152cS0MFKgnDP2U',
        color: '#9A12B3'
    }],
    'travel': [{
        name: 'Eleven',
        playlist: 'Morning Commute',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:2lDJ2xtmpCSN9CO7ZBkIVc',
        color: '#22313F'
      },
      {
        name: 'Purple',
        playlist: 'Evening Commute',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:2dcOG6Snw5DbCvGVr1V03p',
        color: '#D35400'
      },
      {
        name: 'Canada',
        playlist: 'The Perfect Roadtrip',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:3H6iUT3aAidG72DboaikBC',
        color: '#26C281'
    }]
  };

  var getPlaylists = function(interests) {
    var playlists = [];
    for (var i = 0; i < interests.length; ++i) {
      playlists.push(interestPlaylistMap[interests[i]]);
    }
    return playlists;
  };

  return {
    getPlaylists: function(interests) {
      var playlists = [];
      for (var i = 0; i < interests.length; ++i) {
        playlists.push(interestPlaylistMap[interests[i]]);
      }
      var flattenedArray = playlists.reduce(function(a, b) {
        return a.concat(b);
      });
      return flattenedArray;
    },
    getAllInterests: function() {
    	return ['mood', 'party', 'pop', 'workout', 'sleep', 'travel'];
    }
  };
});
