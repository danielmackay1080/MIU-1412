var bgImage = ['rectangle_1.png'];
var inputFields = require('utility');

// This is the display for my main window

var win1 = Ti.UI.createWindow({
	backgroundImage: 'backgroundimage/'+bgImage
});

var title = Ti.UI.createLabel({
	top: 25,
	text: 'The Budget App',
	font: {fontSize:28, fontFamily: 'Cooper Black'},
	color: '#f0f6f4'
});

var nav = Ti.UI.iOS.createNavigationWindow({
	window: win1
});

var view1 = Ti.UI.createView({
	top: 180,
	height: 200,
	left:10,
	right:10,
	borderRadius: 12,
	backgroundColor: '#ccded7'
});

var label1 = Ti.UI.createLabel({
	text: 'Create a Budget',
	font: {fontSize:22, fontFamily: 'Cooper Black'},
	color: '#167554',
	textAlign: 'center'
});

nav.open();
view1.add(label1);
win1.add(view1, title);
view1.addEventListener('click', inputFields.inputWin );
