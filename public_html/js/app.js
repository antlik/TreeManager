var treeManager = angular.module("treeManager", ["ngStorage"]);

treeManager.controller("treeManagerController", function ($scope, $localStorage) {

    $scope.form = {
        parentNodeId: ""
    };

    $scope.nodes = [];

    //insert root of tree
    addNode(0);
    addNode(1);
    addNode(1);
    addNode(1);
    
    // ---
    // PUBLIC METHODS //
    // ---
    $scope.childerns = function () {
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
        alert('Nodes are saved to local storage.');
        return;
    };

    $scope.loadFromLocalStorage = function () {
        console.log('loading');
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
        var new_node_id = $scope.nodes.length + 1;
        
        $scope.nodes.push({
            id: new_node_id,
            pid: parentNodeId,
            childs: [],
            createdAt: new Date()
        });
        //add new node to child array for its parent
        if (parentNodeId > 0){
          $scope.nodes[parentNodeId-1].childs.push(new_node_id);
        }
    };
});
