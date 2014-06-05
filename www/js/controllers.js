angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('AccelCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('CompassCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})

.controller('CameraCtrl', function($scope){
 ionic.Platform.ready(function() {
    var device = ionic.Platform.device();
    
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
            $scope.capturePhoto = function () {
      
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(function(imageData){$scope.image.small = "data:image/jpeg;base64," + imageData;}, function(){}, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

  });

/*
    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }
*/
    // A button will call this function
    //
/*
    // A button will call this function
    //
    $scope capturePhotoEdit = function () {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    $scope.getPhoto = function (source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }

*/    
});
