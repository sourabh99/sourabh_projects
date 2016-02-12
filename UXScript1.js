/**
 * Created by Sourabh on 6/16/2015.
 */
(function (){
    'use strict'
    angular.module('UXsample',[]);
    angular.module('UXsample').controller('UXCtrl',UXcontroller);
    function UXcontroller($rootScope,$http){
        var mem=this;
        $http({
            method: 'GET',
            url: 'http://private-a73e-aquentuxsociety.apiary-mock.com/members'
        }).success(function(data){mem.members=data});

    }
})();
