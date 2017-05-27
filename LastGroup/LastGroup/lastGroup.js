var lastGroup = angular.module("Authentication", ["ngRoute"]);

lastGroup.config([
    "$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/",
            {
                templateUrl: "lastGroup/login.html",
                controller: "loginController"
            })
            .when("/home",
            {
                templateUrl: "lastGroup/home.html",
                controller: "homeController"
            });

    }
])

lastGroup.run(["$http", function ($http) {

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;

}
]);