import angular from 'angular';
import './css/main.scss';

const app = angular.module('myapp',[]);
app.controller('mycontroller',($scope)=>{
  $scope.name = "Working!!";
});
