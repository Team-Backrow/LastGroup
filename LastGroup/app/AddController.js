app.controller("AddController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
    $scope.netTask = "";

    $scope.addNewItem = function () {
        $http({
            method: 'POST',
            url: "/add",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            
        })
            .then(function (result) {
                console.log("result=", result);

                sessionStorage.setItem("token", result.data.access_token);

                $http.defaults.headers.common["LastGroup"] = `bearer ${result.data.access_token}`;

                $location.path("/home");
            });
    }
}])