'use strict';

/* Controllers */

appControllers.controller('EventDataCtrl', ['$scope', '$routeParams', 'EventFactory', function($scope, $routeParams, EventFactory) {

    $scope.eventId = $routeParams.eventId;
    $scope.eventData = '';
    
    //the object that will store the form data aka ng-model
    $scope.user = {};

    function initialize(){
        EventFactory.getEventData($scope.eventId).then(function(result) {
            $scope.eventData =  result.data.eventData;
        });
    }
    
    
    
    $scope.form = [
            {
                'formGroupNgClass' : '{ "has-error" : userFieldForm.field.$invalid && !userFieldForm.field.$pristine }',
                'labelFor' : 'userName',
                'labelClass' : 'col-md-2 control-label',
                'labelText' : 'Nome',
                'inputType' : 'text',
                'inputId' : 'userName',
                'inputValidate' : 'empty',
                'inputName' : 'userName', 
                'inputPlaceholder' : 'Nome Contribuinte',
                'inputClass' : 'form-control',
                'inputNgModel' : 'name',
                'inputRequired' : true,
                'otherAttributes' : 'required novalidate',
                'errorNgShow' : 'userFieldForm.field.$invalid && !userFieldForm.field.$pristine',
                'errorText' : 'Campo obrigatório'
            },
            {
                'formGroupNgClass' : '{ "has-error" : userFieldForm.field.$invalid && !userFieldForm.field.$pristine }',
                'labelFor' : 'userEmail',
                'labelClass' : 'col-md-2 control-label',
                'labelText' : 'Email',
                'inputType' : 'email',
                'inputId' : 'userEmail',
                'inputValidate' : 'empty',
                'inputName' : 'userEmail', 
                'inputPlaceholder' : 'myEmail@emailHost.com',
                'inputClass' : 'form-control',
                'inputRequired' : false,
                'inputNgModel' : 'email',
                'otherAttributes' : 'required',
                'errorNgShow' : 'userFieldForm.field.$invalid && !userFieldForm.field.$pristine',
                'errorText' : 'Email inválido'
            }
        ];

    initialize();

}]);
