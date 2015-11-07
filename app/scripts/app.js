/* global Polymer */
(function (document) {
	'use strict';
	var app = document.querySelector('#app');
 
 	app.newUser = function (name,country) {
 		
		 var n = Polymer.dom(document).querySelector('#firebase-users').add({
 			"name": name,
 			"country": country,
			 wins:0
 		});
		 alert(n.key());
 	};
})(document);

