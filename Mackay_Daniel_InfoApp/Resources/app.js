var background = ['rectangle_1.png','Elipse_1.png'];

var win1 = Ti.UI.createWindow({
	backgroundImage: 'background/' + background[0]
});

var nav = Ti.UI.iOS.createNavigationWindow({
	window: win1
});

var mainView = Ti.UI.createView({
	left: 10,
	right: 10,
	height: 300,
	width: 300,
	borderRadius: 12
});

nav.open();
win1.add(mainView);