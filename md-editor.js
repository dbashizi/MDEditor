angular.module('MDEditorApp', [])
   .controller('EditorController', function($scope, $http, $sce) {

      $scope.renderText = function() { 
        $scope.formattedText = $sce.trustAsHtml($scope.md.render($scope.testContent));
      }

      console.log("Initializing EditorController ...");

      $scope.testContent = "## Some initial value for the text content of the text area \n";
      $scope.testContent += "### Here is a smaller heading\n"; 
      $scope.testContent += "Here is a list\n"; 
      $scope.testContent += "* Item 1\n"; 
      $scope.testContent += "* Item 2\n"; 
      $scope.testContent += "* Item 3\n"; 

      $scope.md = window.markdownit();
      $scope.formattedText = $sce.trustAsHtml($scope.md.render($scope.testContent));

	});

