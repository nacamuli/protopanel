/*
This makes the panel and draws each control that you initiate
*/

$(function() {
	makePanel()
	addSlider("var1");
	addSlider("var2",0,100,2);
	});



var connection = new WebSocket('ws://html5rocks.websocket.org/echo', ['soap', 'xmpp']);
// When the connection is open, send some data to the server
connection.onopen = function () {
  connection.send('Ping'); // Send the message 'Ping' to the server
};

// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
  console.log('Server: ' + e.data);
};