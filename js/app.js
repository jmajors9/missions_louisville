(function (){
	var app = angular.module('region', []);

	app.controller('RegionEvents', function () {
		this.event = events;
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
            start: 20160615,
            end: 20160815,
            annual: true,
            description: "Come join us as we engage the people of Albania.",
            sender: 1,
            churches: 1

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