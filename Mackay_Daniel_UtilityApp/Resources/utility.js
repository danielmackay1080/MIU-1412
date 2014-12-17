var bgImage2 = ['rectangle_1.png'];

// This function opens my new window and lays out all the text fields

var newWin = function(){
	var win2 = Ti.UI.createWindow({
			backgroundImage: 'backgroundimage/' + bgImage2
		});
		
		var label2 = Ti.UI.createLabel({
			top : 10,
			text: 'Create your Budget',
			font: {fontSize:22, fontFamily: 'Cooper Black'},
			color: '#f0f6f4'
		});
		
		var textField1 = Ti.UI.createTextField({
			height : 35,
			top : 50,
			left : 40,
			width : 240,
			hintText : 'First Name',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});
		textField1.addEventListener('return', function(e) {
			textField1.blur();
		});
		var textField2 = Ti.UI.createTextField({
			height : 35,
			top : textField1.height+textField1.top+20,
			left : 40,
			width : 240,
			hintText : 'Last Name',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});
		textField2.addEventListener('return', function(e) {
			textField2.blur();
		});
		
		var textField3 = Ti.UI.createTextField({
			height : 35,
			top : textField2.height+textField2.top+20,
			left : 40,
			width : 240,
			hintText : 'Salary',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});
		textField3.addEventListener('return', function(e) {
			textField3.blur();
		});
		
		var textField4 = Ti.UI.createTextField({
			height : 35,
			top : textField3.height+textField3.top+20,
			left : 40,
			width : 240,
			hintText : "Money you'd like to save",
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});
		textField4.addEventListener('return', function(e) {
			textField4.blur();
		});
		
		var textField5 = Ti.UI.createTextField({
			height : 35,
			top : textField4.height+textField4.top+20,
			left : 40,
			width : 240,
			hintText : 'No. of days in month',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});
		textField5.addEventListener('return', function(e) {
			textField5.blur();
		});
		
		var view2 = Ti.UI.createView({
			top: 340,
			backgroundColor: '#44586f',
			height: 100
		});
		
		var label3 = Ti.UI.createLabel({
			font: {fontSize:28, fontFamily: 'Arial Black'},
			color: '##f0f6f4',
			textAlign: 'center',
			text: 'Done'
		});
		
		// This function makes the budget out of the figure you entered. It also has a display for my final window.
		
		var budget = function(){
			//var myPrompt = prompt('Would you like to continue?');
			var num1 = textField3.value - textField4.value;
			var num2 = num1 / textField5.value;
			var win3 = Ti.UI.createWindow({
			backgroundImage: 'backgroundimage/' + bgImage2
		});
	var label4 = Ti.UI.createLabel({
		left: 10,
		right: 10,
		text: textField1.value + ' you can spend $' + num2 + ' per day and you will save $'+ textField4.value+ ' per month',
		font: {fontSize:28, fontFamily: 'Cooper Black'},
		color: '#f0f6f4'
	});
	var label5 = Ti.UI.createLabel({
		top: 30,
		text: 'Your Budget',
		font: {fontSize:32, fontFamily: 'Cooper Black'},
		color: '#f0f6f4'
	});
		win3.add(label4, label5);
		nav.openWindow(win3);
		};

		view2.add(label3);
		win2.add(textField1, label2, textField2, textField3, textField4, textField5, view2 );
		view2.addEventListener('click', budget);
		
		nav.openWindow(win2);
};

exports.inputWin = newWin;
