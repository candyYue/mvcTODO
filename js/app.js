(function (angular) {
	'use strict';

	var app=angular.module("todoAPP",["summer"]);
	app.controller("todosController",["$scope","$location","hot",function($scope,$location,hot){
		
		console.log(hot.do)
		
		$scope.list=[
		{id:1,name:"打豆豆",completed:false},
		{id:2,name:"睡觉",completed:true},
		{id:3,name:"打豆豆",completed:false},
		{id:4,name:"睡觉",completed:true},
		{id:4,name:"吃豆豆",completed:true},
		]
		
		$scope.newTodo="";
		
		//添加
		$scope.add=function(){
			if(!$scope.newTodo){
				return;
			}
			$scope.list.push({
				id:$scope.list.length+1,
				name:$scope.newTodo,
				complate:false
			})
			$scope.newTodo="";
		}
		
		//删除
		$scope.remove=function(index){
//			console.log($index)
//			for(var i=0;i<$scope.list.length;i++){
//				
//				if($scope.list[i].id==id){
//					$scope.list.splice(i,1);
//					return
//				}
//			}
			$scope.list.splice(index,1);
		}
	
	//		编辑
		$scope.isEditingId=-2;
		$scope.edit=function(id){
			$scope.isEditingId=id
		}
		$scope.save=function(){
			$scope.isEditingId=-2;
		}
	
//		选中
		$scope.selectAll=false;
		$scope.toggleAll=function(){
			for(var i=0;i<$scope.list.length;i++){
				$scope.list[i].completed=$scope.selectAll
			}
		}

	
		$scope.left=function(){
			var count=0;
			for(var i=0;i<$scope.list.length;i++){
				if($scope.list[i].completed==false){
					count++
				}
			}
			return count;
		}
	
		$scope.clear=function(){
			for(var i=0;i<$scope.list.length;i++){
				if($scope.list[i].completed==true){
					$scope.list.splice(i,1);
					i--;
				}
			}
		}
		
				//切换不同状态
		$scope.isCompleted={};
//		$scope.active=function(){
//			$scope.isCompleted={completed:false}
//		}
//		$scope.completed=function(){
//			$scope.isCompleted={completed:true}
//		}
//		$scope.all=function(){
//			$scope.isCompleted={}
//		}
		$scope.loca=$location
		$scope.$watch('loca.url()',function(now,old){
			switch(now){
				case '/active':
				$scope.isCompleted={completed:false};
				break;
				case '/completed':
				$scope.isCompleted={completed:true};
				break;
				default:
				$scope.isCompleted={};
			}
		})
		
		
		
		
		
	}])
})(angular);
