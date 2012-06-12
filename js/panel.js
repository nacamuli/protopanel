/*
This makes the panel and draws each control that you initiate
*/

$(function() {
	makePanel()
	addSlider(["var1"],[]);
	addColumn();
	addSlider(["var2","Has a Callback"],[0,100,2],"specificCallback");
	addSlider(["var3"],[0,100,2]);
	addColumn();
	addSlider(["var4"],[0,100,2]);
});


