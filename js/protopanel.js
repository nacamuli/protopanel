/*
This is the engine
*/

columnCount=0;


function makePanel(){
	console.log("var1:",window["var1"]);
	window["var1"]=100;
	console.log("var1:",window["var1"]);
	$('<div id="protoPanel"></div>',{}).appendTo('#main');
	addColumn();
}

function addColumn(){
	columnCount++;
	$('<div class="protoColumn" id="column'+columnCount+'"></div>',{}).appendTo('#protoPanel');
	
}

function addSlider(titles,sliderValues,callback){
		 varName=titles[0]
		 console.log(varName)
		 widgetTitle=titles[1]||varName
		 minval=sliderValues[0]||0;
		 maxval=sliderValues[1]||1000;
		 stepval=sliderValues[2]||100;
		 
		 callback=callback||"genericCallback";
		 $('<div class="protoWidget" id="'+varName+'"></div>',{}).appendTo('.protoColumn#column'+columnCount);
		 $('<div class="protoLabel"/></div>',{}).appendTo('.protoWidget#'+varName);
		 $('<div class="slider"></div>',{}).appendTo('.protoWidget#'+varName);
		
		//$("#amount"+varName).val(varName+":"+window[varName]);
		$( ".protoWidget#"+varName+" .protoLabel").text(widgetTitle+":"+window[varName]);
		$( ".protoWidget#"+varName+" .slider").slider({
			value:window[varName],
			min: minval,
			max: maxval,
			step: stepval,
			slide: function( event, ui ) {	
				window[varName]=ui.value;
				$( ".protoWidget#"+varName+" .protoLabel").text(widgetTitle+":"+window[varName]);
				//console.log(varName,":",window[varName]);
			},
			stop: function(event, ui) {window[callback]()}
		});
	
}