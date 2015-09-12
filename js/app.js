(function (){
	var app = angular.module('region', []);

	app.controller('PanelController', function(){
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller('MissionsEvents', function () {
        this.event = missions;
    });

    app.controller('AllEvents', function ($scope, $http) {
        $http.get('data.json').
        then(function(data){
            $scope.missions = data;
            console.log(data);
        });
    });

    //I need to set the "churches" to whichever number it is in the id under events.
    // so get region.events.churches[#] and then retrieve
    // retrieving all of the church information in that number of the json file.
    // don't have to get the "id" for the churches, just use it for the json reference.
    // so each thing will go "data.foo.event.longterm"...?

    var missions = {
        "journeys":
        {
            "id": 1,
            "longterm": false,
            "name": "engage",
            "country": "Albania",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": "June 15, 2015",
            "end": "August 15, 2015",
            "annual": true,
            "description": "Come join us as we engage the people of Albania.",
            "sender": 1,
            "churches": 1
        },
        "church":
        {
            "id": 1,
            "name": "Primero Iglesia del Louisville",
            "minister": "Julio Diaz",
            "email": "jdiaz@example.org",
            "address": "123 Any Street",
            "city": "Louisville",
            "state": "Kentucky",
            "zipcode": 40214,
            "website": "primeroiglesia.example.org"
        },
        "sendingOrg":
        {
            "id": 1,
            "name": "SuperNational Workers Board",
            "email": "director@example.com",
            "address": "1 This Place",
            "city": "",
            "state": "",
            "zipcode": 0,
            "website": "snwb.example.com"
        }
    };

    app.directive("reachingWorld", function(){
        return {
            restrict: 'E',
            template: '<h1>Reaching the World</h1>'
        };
    });
    app.directive("manyChurches", function(){
        return {
            templateUrl: 'many-churches.html'
        };
    });
})();


