(function (window) {
    'use strict';
    angular.module('Cric-Card')
        .controller('CricCardController', CricCardController);
    CricCardController.$inject = [];
    function CricCardController()
    {
        var CCntrl = this;
		CCntrl.shw=true;
		CCntrl.run=0;
		CCntrl.Checker=function()
		{
			CCntrl.shw=false;
		if(document.getElementById('RadioButton1').checked)
		{
			debugger;
			CCntrl.batter=CCntrl.firstcountry;
			CCntrl.bowler=CCntrl.secondcountry;
		}
		else
		{
			CCntrl.batter=CCntrl.secondcountry;
			CCntrl.bowler=CCntrl.firstcountry;
		}
	}

    }

})(window);
