// Daniel Mackay MIU 1412
// My list of questions

var questions = ['What is your name?',
 'What is your chat usernam, including the host',
'In which timezone do you reside?',
'Why are you in the Mobile Development Program?',
'How confortable are you with Javascript?',
'How comfortable are you with Titanium?',
'What is your favourite color?',
'What is your favorite sport?',
'What kind of work do you do?',
'Do you have any pets?',
'What is your favorite TV show?'];

// This is the display for my main window

var mainWin = Ti.UI.createWindow({
	backgroundColor: 'bed6f2'
});

var title = Ti.UI.createLabel({
	top: 30,
	text: 'About Me',
	color: '#1c1b20'
});

var nav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var mainView = Ti.UI.createScrollableView({
	top: 80,
	left: 10,
	right:10,
	width: 300,
	height: 600,
	borderRadius: 5,
	backgroundColor: '#24364b'
});

for (var i=0, x= questions.length; i<x; i++){
		
		var qLabel = Ti.UI.createLabel({
			top:20,
			text: questions[i],
			font: {fontSize:20, fontFamily: 'Arial' },
			color: '#fff'
		});
		mainView.add(qLabel);
		console.log(questions[i]);
};



nav.open();
nav.add(title);
mainWin.add(mainView);

