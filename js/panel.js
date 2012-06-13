/*****************

THIS FILE IS FOR BUILDING AND POPULATING THE PANEL

*****************/


function newProtopanel(){
	makePanel()
	addSlider(["var1"],[]);
	addColumn();
	addSlider(["var2","Has a Callback"],[0,100,2],"specificCallback");
	addSlider(["var3"],[0,100,2]);
	addColumn();
	addSlider(["var4"],[]);
}

