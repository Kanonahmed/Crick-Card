(function(window){
	'use strict';
	angular.module('Cric-Card')
	   .controller('SecondController',SecondController);
	   SecondController.$inject=['CricService'];
	   function SecondController(CricService)
	   {
		   var RouterCntrl=this;
		   RouterCntrl.detail=CricService.TakeDetail();
		   RouterCntrl.run=0;
		   RouterCntrl.count=0;
		   RouterCntrl.BowlMachine=function()
		   {
			   RouterCntrl.count++;
			   RouterCntrl.run+=Math.floor((Math.random()*6));
			   //debugger;
		   }
		   
		   
	   }
	
})(window);