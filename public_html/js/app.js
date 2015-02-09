var treeManager = angular.module("treeManager", ["ngStorage"]);

treeManager.controller("treeManagerController", function ($scope, $localStorage) {

    $scope.form = {
        parentNodeId: ""
    };

    $scope.nodes = [];
    
    //insert root of tree
    addNode(null);
    addNode(1);

    // ---
    // PUBLIC METHODS //
    // ---
    $scope.childerns = function (){
        $scope.form.parentNodeId;
    };
    
    $scope.submitNode = function () {
        // Ignore empty form submissions.
        if (!$scope.form.parentNodeId) {
            return;
        }
        addNode($scope.form.parentNodeId);
        $scope.form.parentNodeId = "";
    };
   
    $scope.saveToLocalStorage = function () {
        $localStorage.localNodes = $scope.nodes;
        alert('Saved to local storage.');
        return;
    };

    $scope.loadFromLocalStorage = function () {
    console.log('loading');
     console.log($localStorage.localNodes);
        $scope.localNodes = $localStorage.localNodes;
    };

    $scope.clearData = function () {
        console.log('clearing local storage');
        $localStorage.$reset();
        alert('Local Storage Cleared');
        return location.reload();
    };
    
    // ---
    // PRIVATE METHODS //
    // ---
    function addNode(parentNodeId) {    
        $scope.nodes.push({
            id: ($scope.nodes.length +1),
            pid: parentNodeId,
            createdAt: new Date()
        });
    };
  
});
