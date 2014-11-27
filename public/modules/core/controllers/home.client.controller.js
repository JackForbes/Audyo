'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', '$modal', '$log', 'Authentication', 'Users', 'PlaylistsModel',
	function($scope, $http, $modal, $log, Authentication, Users, PlaylistsModel) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
    $scope.showPlaylist = false;

    if ($scope.authentication.user) {
      $scope.playlists = PlaylistsModel.getPlaylists($scope.authentication.user.interests);
    } else {
      $scope.playlists = PlaylistsModel.getPlaylists(['mood', 'party', 'pop']);
    }

    $scope.streamPlaylist = function(playlistIndex) {
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
        var dataset = data.searchResults.searchResult;
        for (var i = 0; i < dataset.length; ++i) {
          $scope.songs.push(dataset[i].track);
        }
      }).error(function(data) {
      });
    }

    // Interests Modal
    $scope.editInterests = function (size, interest, userInterests) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/core/views/edit-interest.client.view.html',
        controller: function ($scope, $modalInstance, allInterests) {
          $scope.allInterests = allInterests;
          $scope.selectedInterest = interest;

          $scope.getClass = function(interestItem) {
            if (interestItem == $scope.selectedInterest) {
              return 'active';
            } else if (userInterests.indexOf(interestItem) != -1 && interestItem != interest) {
              return 'disabled';
            }
            return 'interestListItem';
          }

          $scope.selectInterest = function(newInterest) {
            if (userInterests.indexOf(newInterest) == -1 || newInterest == interest) {
              $scope.selectedInterest = newInterest;
            }
          }

          $scope.ok = function () {
            $modalInstance.close($scope.selectedInterest);
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        size: size,
        resolve: {
          allInterests: function () {
            return PlaylistsModel.getAllInterests();
          }
        }
      });

      modalInstance.result.then(function (selectedInterest) {
        var index = userInterests.indexOf(interest);
        if (index !== -1) {
            userInterests[index] = selectedInterest;
        }
        $scope.updateUserInterests(userInterests);
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    };

    // Update user interests
    $scope.updateUserInterests = function(userInterests) {
      $scope.authentication.user.interests = userInterests;
      $scope.success = $scope.error = null;
      var user = new Users($scope.authentication.user);

      user.$update(function(response) {
        $scope.success = true;
        Authentication.user = response;
      }, function(response) {
        $scope.error = response.data.message;
      });
    };

    // Numerical keystrokes that make up the konami code
    var secret = "38384040373937396665";
    var input = "";
    var timer;

    document.onkeyup = function(e) {
      input += e.which;
      console.log(input);
      clearTimeout(timer);
      timer = setTimeout(function() { input = ""; }, 500);
      check_input();
    };

    function check_input() {
      if(input == secret) {
        console.log('input matches secret');
        $scope.konami = true;
      }
    };

	}
]);

