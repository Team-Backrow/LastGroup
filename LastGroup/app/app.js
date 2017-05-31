var app = angular.module("LastGroup", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/login.html",
            controller: "LoginController"
        })
            .when("/home", {
                templateUrl: "app/home.html",
                controller: "HomeController"
            })
    .when("/signup", {
        templateUrl: "app/add.html",
        controller: "AddController"
    });
}
])
app.run(["$http", function ($http) {

    var token = sessionStorage.getItem("token");

    if (token)

        $http.defaults.headers.common["Authentication"] = `bearer ${token}`;
}
]);