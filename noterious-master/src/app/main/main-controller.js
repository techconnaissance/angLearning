'use strict';

angular.module('noterious')
  .controller('MainCtrl', function (UserModel, Auth, $state) {
    var main = this;
    main.auth = Auth;
    main.currentUser = null;
    main.currentColor = 'blue';

    main.colors = [
      'blue',
      'green',
      'orange',
      'red',
      'yellow'
    ];

    main.setCurrentColor = function(color) {
      main.currentColor = color;
    };

    main.logout = function () {
      UserModel.logout();
      $state.go('login');
    };

    main.auth.$onAuthStateChanged(function(authData) {
        if (authData) {
            // User signed in!
            UserModel.setCurrentUser(authData.uid);
            main.currentUser = authData.uid;
        } else {
            // User logged out
            main.currentUser = null
        }
    });
  });
