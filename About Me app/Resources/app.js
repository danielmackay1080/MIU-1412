// Daniel Mackay MIU 1412
// My list of questions

var questions = ['What is your name?',
 'What is your chat username, including the host',
'In which timezone do you reside?',
'Why are you in the Mobile Development Program?',
'How comfortable are you with Javascript?',
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

var mainView = Ti.UI.createScrollView({
	top: 80,
	left: 10,
	right:10,
	width: 300,
	height: 600,
	borderRadius: 5,
	backgroundColor: '#24364b'
});

var loadAnswer = require('json');



//var info = function(){
	//var newWin = Ti.UI.createWindow({
		//backgroundColor: '#1c1b20'
	//});
	//nav.openWindow(newWin);
//};

for (var i=0, x= questions.length; i<x; i++){
		
		var qLabel = Ti.UI.createLabel({
			top: 10,
			text: questions[i],
			font: {fontSize:20, fontFamily: 'Arial' },
			color: '#fff'
		});
		qLabel.addEventListener('click', loadAnswer.newInfo);
		//console.log(questions[i]);
		mainView.add(qLabel);
};



nav.open();
nav.add(title);
mainWin.add(mainView);