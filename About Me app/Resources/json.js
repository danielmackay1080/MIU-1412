var answers = {'myAnswers':{
	'answerList':[
		{
			']answer': 'My name is Daniel David Mackenzie Mackay.'
		},
		{
			'answer': 'My chat username for games and so forth is The Great D Man'
		},
		{
			'answer': 'I reside in the Atlantic Standard Time Zone'	
		},
		{
			'answer': 'I am in the mobile Development program because i have alwyas had a passion for technology and I would likt to be apart of that filed.'
		},
		{
			'answer': 'I am atill getting used to it. I am a little confortable but there is still a lot of learning to do.'
		},
		{
			'answer': 'I am very comfortable with Titanium, I think is a great program. Of course everything has it pros and cons.'
		},
		{
			'answer': 'My favorite color is blue.'
		},
		{
			'answer': 'My favorite sport is football (soccer). '
		},
		{
			'answer': 'I have my own Janitorial business. We privide service such as Power Washing, Floor Cleaning, Furniture Cleaning and Carpet Cleaning.'
		},
		{
			'answer': 'I have a pet parrot named Pollo and some fish.'
		},
		{
			'answer': 'At the moment my favorite TV shows are Game of Thrones, Walking Dead, Breaking Bad and Shark Tank.'
		}
		]
	}
};

var info = function(){
	var newWin = Ti.UI.createWindow({
		backgroundColor: '#1c1b20'
	});

for (var i=0, z= answers.length; i<z; i++){
		
		var aLabel = Ti.UI.createLabel({
			top:i+10,
			text: answers.myAnswers.answerList[i].answer,
			font: {fontSize:20, fontFamily: 'Arial' },
			color: '#fff'
		});
		newWin.add(aLabel);
	};
	nav.openWindow(newWin);
};

exports.newInfo = info;