sap.ui.define([],
function(){
	return{
		onFormatting : function(date){
			
			var dob = date.substring(0,2) + "-"+ date.substring(2,4)+ "-" +date.substring(4);
			return dob;
		}
		
	};
	
});
