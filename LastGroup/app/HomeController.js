app.controller("HomeController", ["$scope", "$http", function ($scope, $http) {
    $scope.values = [];

    $http.get("/api/values")
        .then(function (result) {
            $scope.values = result.data;
        });
}])