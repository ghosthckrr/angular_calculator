import angular from 'angular';
import './css/main.scss';

const app = angular.module('myapp',[]);
app.controller('mycontroller',($scope)=>{

 let buttons =[7,8,9,4,5,6,1,2,3,0];
 let operations = ["/","x","-","+"]; 
  $scope.btns = buttons;
  
  $scope.operations = operations;

  let value = 0;
  let tvalue = 0;
  let op = 'none';
  $scope.display = value;
  $scope.btnclick = (e)=>{
  	value = value*10+e;
  	$scope.display = value;
  };
  $scope.opt = (o) =>{
  	tvalue = value;
  	value = 0;
  	op = o;
  	
  };
  $scope.equal = () =>{
  	switch(op){
  		case '-':
  			$scope.display = tvalue-value;
  			value = 0;
  			tvalue = 0;
  			break;

  		case '+':
  			$scope.display = tvalue+value;
  			value = 0;
  			tvalue = 0;
  			break;	
		case 'x':
			$scope.display = tvalue*value;
			value = 0;
  			tvalue = 0;
			break;

  		case '/':
  			$scope.display = tvalue/value;
  			value = 0;
  			tvalue = 0;
  			break;	

  		case 'none':
  			$scope.display = value;
  			break;		
  	}

  };
  $scope.clear =()=>{
  	value = 0;
  	tvalue = 0;
  	$scope.display = value;
  };

});
