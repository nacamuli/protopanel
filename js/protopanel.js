/*
This is the engine
*/




function makePanel(){
	console.log("var1:",window["var1"]);
	window["var1"]=100;
	console.log("var1:",window["var1"]);
	$('<div id="protopanel">Protopanel UI</div>',{}).appendTo('#main');
}

function addSlider(varName,minval,maxval,stepval){
		 minval=minval||0;
		 maxval=maxval||1000;
		 stepval=stepval||100;
		$('<input type="text" id="amount'+varName+'" />',{}).appendTo('#main');
		$('<div id="slider'+varName+'"></div>',{}).appendTo('#main');
		$("#amount"+varName).val(varName+":"+window[varName]);
		$( "#slider"+varName).slider({
			value:window[varName],
			min: minval,
			max: maxval,
			step: stepval,
			slide: function( event, ui ) {	
			window[varName]=ui.value;
			$("#amount"+varName).val(varName+":"+window[varName]);
			console.log(varName,":",window[varName]);
			}
		});
	
}