var answers = {'myAnswers':{
	'answerList':[
		{
			'description': 'My name is Daniel David Mackenzie Mackay.'
		},
		{
			'descritpion': 'My chat username for games and so forth is The Great D Man'
		},
		{
			'description': 'I reside in the Atlantic Standard Time Zone'	
		},
		{
			'description': 'I am in the mobile Development program because i have alwyas had a passion for technology and I would likt to be apart of that filed.'
		},
		{
			'description': 'I am atill getting used to it. I am a little confortable but there is still a lot of learning to do.'
		},
		{
			'description': 'I am very comfortable with Titanium, I think is a great program. Of course everything has it pros and cons.'
		},
		{
			'description': 'My favorite color is blue.'
		},
		{
			'description': 'My favorite sport is football (soccer). '
		},
		{
			'description': 'I have my own Janitorial business. We privide service such as Power Washing, Floor Cleaning, Furniture Cleaning and Carpet Cleaning.'
		},
		{
			'description': 'I have a pet parrot named Pollo and some fish.'
		},
		{
			'description': 'At the moment my favorite TV shows are Game of Thrones, Walking Dead, Breaking Bad and Shark Tank.'
		}
		]
	}
};

var info = function(){
	var newWin = Ti.UI.createWindow({
		backgroundColor: '#1c1b20'
	});
	nav.openWindow(newWin);

for (var i=0, z= answers.length; i<z; i++){
		
		var aLabel = Ti.UI.createLabel({
			top:i+10,
			text: answer.description[i],
			font: {fontSize:20, fontFamily: 'Arial' },
			color: '#fff'
		});
		newWin.add(aLabel);
};
};

exports.newInfo = info;