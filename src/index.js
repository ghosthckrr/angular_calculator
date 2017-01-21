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
  let dvalue;
  let fdvalue;
  var decimal = false;
  $scope.display = value;
  $scope.btnclick = (e)=>{
    value = value*10+e;
  	if(!decimal){
  	$scope.display = value;
  }else{
    fdvalue = dvalue+value;
    $scope.display = fdvalue;
  }
  };
  $scope.opt = (o) =>{
  	op = o;
    if(decimal){
      tvalue = parseFloat(fdvalue);
      fdvalue = '';
      value =0;
      decimal = false;
    }else{
      tvalue = value;
      value = 0;
    }

  };
  $scope.equal = () =>{

    if(decimal){
      value = parseFloat(fdvalue);
      console.log(value);
    }

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
  $scope.decimal =()=>{
    decimal = true;
  	dvalue = value + ".";
    value=0;
    $scope.display = dvalue;
  };
  $scope.clear =()=>{
  	value = 0;
  	tvalue = 0;
    dvalue =0;
    decimal = false;
  	$scope.display = value;
  };

});
