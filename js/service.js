(function(window){
	'use strict';
	angular.module('Cric-Card')
	.service('CricService',CricService);
	CricService.$inject=[];
	function CricService()
	{
		var detail={};
		this.TossDetail=function(batter,bowler)
		{
			detail.bat=batter;
			detail.bowl=bowler;
		}
		this.TakeDetail=function()
		{
			return detail;
		}
		
		
		
	}	
	
})(window);