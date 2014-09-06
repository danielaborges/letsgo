'use strict';

/* Controllers */

appControllers.controller('EventDataCtrl', ['$scope', '$routeParams', 'EventFactory',                                            function($scope, $routeParams, EventFactory) {

    $scope.eventId = $routeParams.eventId;
    $scope.eventData = '';

    function initialize(){
        EventFactory.getEventData($scope.eventId).then(function(result) {
            $scope.eventData =  result.data.eventData;
        });
    }
    
    $scope.form = {
        'formStructure' : [
            {
                'formGroupNgClass' : '{ "has-error" : userNameForm.userName.$invalid && !userNameForm.userName.$pristine }',
                'ngFormName' : 'userNameForm',
                'labelFor' : 'userName',
                'labelClass' : 'col-md-2 control-label',
                'labelText' : 'Nome',
                'inputType' : 'text',
                'inputId' : 'userName',
                //'inputValidate' : '',
                'inputName' : 'userName', 
                'inputPlaceHolder' : 'Nome Contribuinte',
                'inputClass' : 'form-control col-md-offset-1',
                'inputNgModel' : 'user.name',
                'otherAttributes' : 'required',
                'errorNgShow' : 'userFieldForm.userName.$invalid && !userFieldForm.userName.$pristine',
                'errorText' : 'Campo obrigatório'
            }/*,
            {
                'formGroupNgClass' : '{ "has-error" : userEmailForm.userEmail.$invalid && !userEmailForm.userEmail.$pristine }',
                'ngFormName' : 'userEmailForm',
                'labelFor' : 'userEmail',
                'labelClass' : 'col-md-2 control-label',
                'labelText' : 'Email',
                'inputType' : 'email',
                'inputId' : 'userEmail',
                //'inputValidate' : '',
                'inputName' : 'userEmail', 
                'inputPlaceHolder' : 'myEmail@emailHost.com',
                'inputClass' : 'form-control col-md-offset-1',
                'inputNgModel' : 'user.email',
                'otherAttributes' : 'required',
                'errorNgShow' : 'userFieldForm.userEmail.$invalid && !userFieldForm.userEmail.$pristine',
                'errorText' : 'Email inválido'
            }*/
        ]
    }

    initialize();

}]);
