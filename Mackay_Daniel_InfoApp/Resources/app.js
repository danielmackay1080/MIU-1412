var background = ['rectangle_1.png','Ellipse_1.png'];
var pList = require('json');

// The opening widnow for my application

var win1 = Ti.UI.createWindow({
	backgroundImage: 'background/' + background[0]
});

// The rest of the code is the display for my main page

var nav = Ti.UI.iOS.createNavigationWindow({
	window: win1
});

var mainView = Ti.UI.createView({
	left: 10,
	right: 10,
	height: 300,
	width: 300,
	borderRadius: 12,
	backgroundColor: '#eef3f8'
});

var title = Ti.UI.createLabel({
	top: 30,
	text: 'Chelsea F.C',
	color: '#1c1b20'
});

var label = Ti.UI.createLabel({
	textAlign: 'center',
	font: {fontSize:20, fontFamily: 'Brush Script Std' },
	text: 'Football Players'
});

nav.add(title);
nav.open();
mainView.add(label);
win1.add(mainView);
mainView.addEventListener('click', pList.listWin);
