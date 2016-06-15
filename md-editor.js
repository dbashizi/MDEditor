angular.module('MDEditorApp', [])
   .controller('EditorController', function($scope, $http, $sce) {

   		$scope.testSomething = function() {
   			console.log("testSomething()");
   			$scope.name = "James";

            if (false) {
                $http.get("/games.json")
                    .then(
                        function successCallback(response) {
                            console.log(response.data);
                            console.log("Adding data to scope");
                            $scope.games = response.data;
                        },
                        function errorCallback(response) {
                            console.log("Unable to get data");
                        });
            }
   		};

      $scope.renderText = function() { 
        $scope.formattedText = $sce.trustAsHtml($scope.md.render($scope.testContent));
      }

   		console.log("EditorController ...");
    	$scope.name = "James";

      $scope.testContent = "## Some initial value for the text content of the text area \n";
      $scope.testContent += "### Here is a smaller heading\n"; 
      $scope.testContent += "Here is a list\n"; 
      $scope.testContent += "* Item 1\n"; 
      $scope.testContent += "* Item 2\n"; 
      $scope.testContent += "* Item 3\n"; 
      $scope.md = window.markdownit();
      // $scope.formattedText = md.render('# markdown-it rulezz!');
      $scope.formattedText = $sce.trustAsHtml($scope.md.render($scope.testContent));
      // alert(formattedText); 

    	console.log("Initializing EditorController ...");
	});

