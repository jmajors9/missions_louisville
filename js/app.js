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

    

// ****************
    //I need to set the "churches" to whichever number it is in the id under events.
    // so get region.events.churches[#] and then retrieve
    // retrieving all of the church information in that number of the json file.
    // don't have to get the "id" for the churches, just use it for the json reference.
    // so each thing will go "data.foo.event.longterm"...?

    app.factory('AllEvents', function ($scope, $http) {
        
    });

    var missions = {
    "churches": [
        {
            "id": "",
            "name": "",
            "minister": "",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": ""
        },
        {
            "id": 1,
            "name": "Primero Iglesia del Louisville",
            "minister": "Julio Diaz",
            "email": "jdiaz@example.org",
            "address": "123 Any Street",
            "city": "Louisville",
            "state": "Kentucky",
            "zipcode": "40214",
            "website": "primeroiglesia.example.org"
        },
        {
            "id": 2,
            "name": "View of the Valley Baptist Church",
            "minister": "Jamal Warner",
            "email": "jamal@example.com",
            "address": "123 Other Avenue",
            "city": "New Albany",
            "state": "Indiana",
            "zipcode": "40202",
            "website": "vvbc.example.org"
        },
        {
            "id": 3,
            "name": "Portland Methodist Church",
            "minister": "Paul Jones",
            "email": "pjones@example.com",
            "address": "789 Xyz Parkway",
            "city": "Louisville",
            "state": "Kentucky",
            "zipcode": "40209",
            "website": "port.methodist.example.com"
        },
        {
            "id": 4,
            "name": "Lutheran Church of St. Matthews",
            "minister": "Stephan Pierce",
            "email": "spierce@example.com",
            "address": "777 Sweet Street",
            "city": "Louisville",
            "state": "Kentucky",
            "zipcode": "40223",
            "website": "luth.matt.example.com"
        },
        {
            "id": 5,
            "name": "Shelby Park Presbyterian",
            "minister": "Caitlyn Stephens",
            "email": "cstephens@example.com",
            "address": "656 Straight Avenue",
            "city": "Louisville",
            "state": "Kentucky",
            "zipcode": "40202",
            "website": "spark.presby.example.com"
        }
    ],
    "journeys": [
        {
            "id": "",
            "long-term": "",
            "name": "",
            "country": "",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": "",
            "end": "",
            "annual": "",
            "description": "",
            "sender": "",
            "churches": ""
        },
        {
            "id": 1,
            "long-term": false,
            "name": "engage",
            "country": "Albania",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": "20160615",
            "end": "20160815",
            "annual": true,
            "description": "Come join us as we engage the people of Albania.",
            "sender": 1,
            "churches": 1
        },
        {
            "id": 2,
            "long-term": false,
            "name": "ESL in East Asia",
            "country": "",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": "20160615",
            "end": "20160815",
            "annual": true,
            "description": "Come join us as we teach English as a Second Language to the people of East Asia.",
            "sender": 3,
            "churches": 1
        },
        {
            "id": 3,
            "long-term": true,
            "name": "Jennifer Lindsay",
            "country": "India",
            "email": "jenlin@example.org",
            "address": "123 Any Street",
            "city": "Louisville",
            "state": "Kentucky",
            "zipcode": "40214",
            "website": "jennifer.india.example.com",
            "start": "20160615",
            "end": "20180815",
            "annual": false,
            "description": "Dr. Jennifer Lindsay is moving to India to work in a leper colony.",
            "sender": 4,
            "churches": 2
        },
        {
            "id": 4,
            "long-term": true,
            "name": "Charity Blackwell",
            "country": "Peru",
            "email": "CBlackwell@example.org",
            "address": "456 This Road",
            "city": "Louisville",
            "state": "Kentucky",
            "zipcode": "40209",
            "website": "charity.peru.example.com",
            "start": "20160615",
            "end": "20170815",
            "description": "Charity is moving to Peru. Due to the sensitive nature of her work, we are unable to provide more information.",
            "sender": 2,
            "churches": 2
        },
        {
            "id": 5,
            "long-term": false,
            "name": "Building Churches in Paraguay",
            "country": "Paraguay",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "iglesias.paraguay.example.com",
            "start": "20161215",
            "end": "20170114",
            "annual": false,
            "description": "Join us as we help local churches in Paraguay.",
            "sender": 5,
            "churches": 3
        },
        {
            "id": 6,
            "long-term": false,
            "name": "",
            "country": "Ukraine",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": 20160604,
            "end": 20160619,
            "annual": true,
            "description": "We will be visiting churches all over the Ukraine to encourage our brothers and sisters. We are also blessed to deliver many gifts on our journey.",
            "sender": 1,
            "churches": 3
        },
        {
            "id": 7,
            "long-term": true,
            "name": "Jedediah Wu",
            "country": "Guatemala",
            "email": "jedi.wu@example.com",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": 201606,
            "end": 201706,
            "annual": "",
            "description": "Jedediah has the unique opportunity of taking his farming knowhow to the people of Guatemala. Through the blessings of many sponsors, Jed will be able to help a few families start their own coffee farms.",
            "sender": 2,
            "churches": 4
        },
        {
            "id": 8,
            "long-term": false,
            "name": "",
            "country": "Nicaragua",
            "email": "nchristian@example.com",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": 20160406,
            "end": 20160427,
            "annual": false,
            "description": "Vamos a Nicaragua para construir los hospitales.",
            "sender": 5,
            "churches": 4
        },
        {
            "id": 9,
            "long-term": true,
            "name": "Isaac Cooke",
            "country": "Morocco",
            "email": "icooke@example.com",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": 201512,
            "end": 201912,
            "annual": "",
            "description": "Many Moroccans leave their home country to work in France. In Casablanca, Isaac will be serving at a local elementary school teaching French.",
            "sender": 3,
            "churches": 5
        },
        {
            "id": 10,
            "long-term": false,
            "name": "",
            "country": "Burkina Faso",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": 20160701,
            "end": 20160720,
            "annual": true,
            "description": "Each year we send a group to work a camp for orphaned children.",
            "sender": 4,
            "churches": 5
        },
        {
            "id": 11,
            "long-term": false,
            "name": "",
            "country": "Papua New Guinea",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "",
            "start": 20151230,
            "end": 20160115,
            "annual": false,
            "description": "Due to the sensitive nature of the work, please contact the sending church for more information.",
            "sender": 2,
            "churches": 5
        },
        {
            "id": 12,
            "long-term": true,
            "name": "Eleazar Isaacs",
            "country": "Fiji",
            "email": "eIsaacs@example.com",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": "IsaacsInFiji.example.com",
            "start": 201406,
            "end": 201806,
            "annual": false,
            "description": "Mr. Isaacs and his family moved to Fiji in 2014. While there they have been ministering to the local people and Dr. Isaacs has been priveleged to teach at a local Seminary.",
            "sender": 1,
            "churches": 3
        }
    ],
    "sender": [
        {
            "id": "",
            "name": "",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "",
            "website": ""
        },
        {
            "id": 1,
            "name": "SuperNational Workers Board",
            "email": "director@example.com",
            "address": "1 This Place",
            "city": "Statesville",
            "state": "State",
            "zipcode": "00000",
            "website": "snwb.example.com"
        },
        {
            "id": 2,
            "name": "Board of North American Ministers",
            "email": "director@example.com",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "00000",
            "website": "bnam.example.com"
        },
        {
            "id": 3,
            "name": "TEFL to the Nations",
            "email": "go@example.com",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "00000",
            "website": "TEFL.international.example.com"
        },
        {
            "id": 4,
            "name": "Worldwide Doctors Consortium",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "00000",
            "website": "wwdrc.example.com"
        },
        {
            "id": 5,
            "name": "Building Hope Abroad",
            "email": "",
            "address": "",
            "city": "",
            "state": "",
            "zipcode": "00000",
            "website": "buildha.example.com"
        }
    ]
};

})();