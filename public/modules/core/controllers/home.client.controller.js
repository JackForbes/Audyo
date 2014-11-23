'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', 'Authentication',
	function($scope, $http, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
    $scope.showPlaylist = false;
    //$scope.currentPlaylist = 0;

    $scope.playlists = [
      {
        name: 'Giraffe',
        playlist: 'Have a Great Day',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:2PXdUld4Ueio2pHcB6sM8j',
        color: '#1abc9c'
      },
      {
        name: 'Panda',
        playlist: 'Viral 50',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:0CoQk8bVPF1famEAZ5BYE4',
        color: '#e67e22'
      },
      {
        name: 'Banana',
        playlist: 'Mood Booster',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:6uTuhSs7qiEPfCI3QDHXsL',
        color: '#f1c40f'
      },
      {
        name: 'Space',
        playlist: 'Your Favorite Coffeehouse',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:4BKT5olNFqLB1FAa8OtC8k',
        color: '#bdc3c7'
      },
      {
        name: 'Yo',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:0CoQk8bVPF1famEAZ5BYE4',
        color: '#2ecc71'
      },
      {
        name: 'Velvet',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:0CoQk8bVPF1famEAZ5BYE4',
        color: '#2980b9'
      },
      {
        name: 'Hawk',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:0CoQk8bVPF1famEAZ5BYE4',
        color: '#9b59b6'
      },
      {
        name: 'Forever',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:0CoQk8bVPF1famEAZ5BYE4',
        color: '#95a5a6'
      },
      {
        name: 'Baguette',
        src: 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:0CoQk8bVPF1famEAZ5BYE4',
        color: '#16a085'
      }

    ];

    $scope.streamPlaylist = function(playlistIndex) {
      console.log('inside stream');
      $scope.currentPlaylist = playlistIndex;
    }

    $scope.streamSong = function() {
      var term = $scope.searchTerm;

      var url='http://api.7digital.com/1.2/track/search';
      var searchParams = {
        q: term,
        oauth_consumer_key: "7dkr2wrg7j3g",
        pageSize: 4,
        jsonp: "JSON_CALLBACK"
      }
      $http({
        url: url,
        method: "jsonp",
        params: searchParams
      }).success(function(data) {
        console.log(data);
        var dataset = data.searchResults.searchResult;
        for (var i = 0; i < dataset.length; ++i) {
          $scope.songs.push(dataset[i].track);
        }
      }).error(function(data) {
      });
    }
	}
])
.filter('trustAsResourceUrl', ['$sce',
  function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
  }
]);
