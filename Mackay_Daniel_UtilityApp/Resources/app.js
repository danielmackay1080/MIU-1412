var bgImage = ['rectangle_1.png'];
var inputFields = require('utility');

var win1 = Ti.UI.createWindow({
	backgroundImage: 'backgroundimage/'+bgImage
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
win1.add(view1);
view1.addEventListener('click', inputFields.inputWin );
