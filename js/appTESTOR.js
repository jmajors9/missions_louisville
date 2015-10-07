(function (){
	var app = angular.module('region', []);

    app.directive('journeyPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'journey-panels.html',
            controller: function(){
                this.tab = 1;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panels'
        };
    });


	// app.controller('PanelController', function(){
 //        this.tab = 1;
 //        this.selectTab = function(setTab) {
 //            this.tab = setTab;
 //        };
 //        this.isSelected = function(checkTab) {
 //            return this.tab === checkTab;
 //        };
 //    });
    
    //trying to remote call the panels
    

    //hopefully this can let me call the data.json file...
    // app.controller('MainCtrl', function($scope, $http) {
    //    $http.jsonp('/data.json').success(function(data){
    //      $scope.missionsData = data;
    //   });
    // });
        // it didn't work, but I'm not going to give up!

    app.controller('MissionsEvents', ['$http', function ($http) {
        var missions = this;
        $http.get('/data.json').success(function(data){
			missions.store = data;
        });
    }]);
    
    

    

// ****************
    //I need to set the "churches" to whichever number it is in the id under events.
    // so get region.events.churches[#] and then retrieve
    // retrieving all of the church information in that number of the json file.
    // don't have to get the "id" for the churches, just use it for the json reference.
    // so each thing will go "data.foo.event.longterm"...?

    app.factory('AllEvents', function ($scope, $http) {
        
    });

    // var missions = {
    //     "journeys":
    //     [
    //         {
    //         "id": 3,
    //         "long-term": true,
    //         "name": "Jennifer Lindsay",
    //         "country": "India",
    //         "email": "jenlin@example.org",
    //         "address": "123 Any Street",
    //         "city": "Louisville",
    //         "state": "Kentucky",
    //         "zipcode": "40214",
    //         "website": "jennifer.india.example.com",
    //         "start": "20160615",
    //         "end": "20180815",
    //         "annual": false,
    //         "description": "Dr. Jennifer Lindsay is moving to India to work in a leper colony.",
    //         "sender": 0,
    //         "churches": 0
    //         },
    //         {
    //         "id": 2,
    //         "long-term": false,
    //         "name": "ESL in East Asia",
    //         "country": "East Asia",
    //         "email": "",
    //         "address": "",
    //         "city": "",
    //         "state": "",
    //         "zipcode": "",
    //         "website": "",
    //         "start": "20160615",
    //         "end": "20160815",
    //         "annual": true,
    //         "description": "Come join us as we teach English as a Second Language to the people of East Asia.",
    //         "sendingOrg": 1,
    //         "church": 1
    //         }
    //     ],
    //     "church":
    //     [
    //         {
    //             "id": 1,
    //             "name": "Primero Iglesia del Louisville",
    //             "minister": "Julio Diaz",
    //             "email": "jdiaz@example.org",
    //             "address": "123 Any Street",
    //             "city": "Louisville",
    //             "state": "Kentucky",
    //             "zipcode": "40214",
    //             "website": "primeroiglesia.example.org"
    //         },
    //         {
    //             "id": 2,
    //             "name": "View of the Valley Baptist Church",
    //             "minister": "Jamal Warner",
    //             "email": "jamal@example.com",
    //             "address": "123 Other Avenue",
    //             "city": "New Albany",
    //             "state": "Indiana",
    //             "zipcode": "40202",
    //             "website": "vvbc.example.org"
    //         }
    //     ],
    //     "sendingOrg":
    //     [
    //         {
    //             "id": 1,
    //             "name": "SuperNational Workers Board",
    //             "email": "director@example.com",
    //             "address": "1 This Place",
    //             "city": "",
    //             "state": "",
    //             "zipcode": 0,
    //             "website": "snwb.example.com"
    //         },
    //         {
    //             "id": 2,
    //             "name": "Board of North American Ministers",
    //             "email": "director@example.com",
    //             "address": "",
    //             "city": "",
    //             "state": "",
    //             "zipcode": "00000",
    //             "website": "bnam.example.com"
    //         }
    //     ]
    // };

})();