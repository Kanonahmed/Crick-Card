(function (window) {
    'use strict';
    angular.module('Cric-Card')
        .controller('CricCardController', CricCardController);
    CricCardController.$inject = ['CricService'];
    function CricCardController(CricService)
    {
        var CCntrl = this;
		CCntrl.shw=true;
		CCntrl.run=0;
		CCntrl.Checker=function()
		{
			CCntrl.shw=false;
		if(document.getElementById('RadioButton1').checked)
		{
			//debugger;
			CCntrl.batter=CCntrl.firstcountry;
			CCntrl.bowler=CCntrl.secondcountry;
			CricService.TossDetail(CCntrl.batter,CCntrl.bowler);
		}
		else
		{
			CCntrl.batter=CCntrl.secondcountry;
			CCntrl.bowler=CCntrl.firstcountry;
			CricService.TossDetail(CCntrl.batter,CCntrl.bowler);
		}
	}

    }

})(window);
