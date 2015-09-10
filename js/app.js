(function (){
	var app = angular.module('region', []);

	app.controller('RegionEvents', function () {
		this.event = events;
	});

    app.controller('PanelController', function(){
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller('churchEvents', function () {
        this.church = churches;
    });

    app.controller('sendingOrganization', function () {
        this.sender = sendingOrg;
    });


    var events = {
            id: 1,
            longterm: false,
            name: "engage",
            country: "Albania",
            email: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            website: "",
            start: "June 15, 2015",
            end: "August 15, 2015",
            annual: true,
            description: "Come join us as we engage the people of Albania.",
            sender: 1,
            churches: 1
        };

    var churches = {
            id: 1,
            name: "Primero Iglesia del Louisville",
            minister: "Julio Diaz",
            email: "jdiaz@example.org",
            address: "123 Any Street",
            city: "Louisville",
            state: "Kentucky",
            zipcode: 40214,
            website: "primeroiglesia.example.org"
        };

    var sendingOrg = {
            id: 1,
            name: "SuperNational Workers Board",
            email: "director@example.com",
            address: "1 This Place",
            city: "",
            state: "",
            zipcode: 0,
            website: "snwb.example.com"
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