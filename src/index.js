import angular from 'angular';
import './css/main.scss';

const app = angular.module('myapp',[]);
app.controller('mycontroller',($scope)=>{

 let buttons =[7,8,9,4,5,6,1,2,3,0];
 let operations = ["/","x","-","+"]; 
  $scope.btns = buttons;
  $scope.display = "89858";
  $scope.operations = operations;

  $scope.btnclick = (e)=>{
  	
  };

});
