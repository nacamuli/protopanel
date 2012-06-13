/*****************

THIS IS THE ENGINE, NO NEED TO EDIT

*****************/


//Are we using a sokcet server
remote=false;

//How Many Columns?
columnCount=0;


/*****************

INIT and LAYOUT DIVS

*****************/


function makePanel(){

	console.log("var1:",window["var1"]);
	$('<div id="protoPanel"></div>',{}).appendTo('#main');
	addColumn();
}

function addColumn(){
	columnCount++;
	$('<div class="protoColumn" id="column'+columnCount+'"></div>',{}).appendTo('#protoPanel');
	
}


/*****************

WIDGET BUILDERS

*****************/

/**
Adds the generic divs and label for each widget
**/
function addWidget(varName,widgetTitle){
	 	$('<div class="protoWidget" id="'+varName+'"></div>',{}).appendTo('.protoColumn#column'+columnCount);
	 	$('<div class="protoLabel"/></div>',{}).appendTo('.protoWidget#'+varName);
		$( ".protoWidget#"+varName+" .protoLabel").text(widgetTitle+":"+window[varName]);
	
}

function addSlider(titles,sliderValues,callback){
		 var varName=titles[0];
		 console.log(varName);
		 var widgetTitle=titles[1]||varName;
		 var minval=sliderValues[0]||0;
		 var maxval=sliderValues[1]||1000;
		 var stepval=sliderValues[2]||100; 
		 var callback=callback||"genericCallback";
		 addWidget(varName,widgetTitle)
		 $('<div class="slider"></div>',{}).appendTo('.protoWidget#'+varName);
		 $( ".protoWidget#"+varName+" .slider").slider({
			value:window[varName],
			min: minval,
			max: maxval,
			step: stepval,
			slide: function( event, ui ) {	
				checkUpdateMethod(varName,ui.value,widgetTitle)
			},
			stop: function(event, ui) {
					checkCallbackMethod(callback)
			}
		});
}


/*****************

WIDGET EVENTS

*****************/


/**
Test if variable update and callback should be called immediately (single page use) or via a server (multiple connection via node.js)
**/
function checkUpdateMethod(varName,value,widgetTitle){
	if(remote){
		//Call udpateVar on server, it will then "broadcast.emit" updateVar on interface
		//Look into how to make it also call on the remote also
	}else{
		updateVar(varName,value,widgetTitle)
	}
}

function checkCallbackMethod(callback){
	if(remote){
		//Call doCallback on server, it will then "broadcast.emit" doCallback on interface
		//Look into how to make it also call on the remote also
	}else{
		doCallback(callback)
	}
	
}

/**
Update the variable
**/

function updateVar(varName,value,widgetTitle){
	window[varName]=value;
	$( ".protoWidget#"+varName+" .protoLabel").text(widgetTitle+":"+window[varName]);
}

/**
Call a callback
**/

function doCallback(callback){
	if(callback!="genericCallback"){
		window[callback]()
	}
}
