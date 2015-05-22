angular.module('rangular')
  .controller('QuestionIndexCtrl', ['$scope', '$http', 'Question', function ($scope, $http, Question) {
    // $scope.questions = Question.all();

    $scope.questions = $http.get('/api/questions')
      .success(function (data) {
        console.log(data);
        $scope.questions = data;
      })
      .error(function (data) {
        console.log("error" + data);
      })
  }]);