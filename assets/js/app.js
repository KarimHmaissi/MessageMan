(function() {
	

	// 1. Check if user is tracked
	var getUserId = function () {
		return true;
	};


	// 2. send to server for a settings object
	var getSettings = function (isNewUser, acessId, userId) {
		return {
			messageType: "popup",
			options: {
				hook: "scroll-bottom-article"
			}
		};	
	};

	
	// 3 add markup to dom
	var buildMessage = function (messageType, contentType, options) {
			


		//Position

		//traditional popup
 
		//slide out pushes content

		//embed  article

		//sticky 

		//multi step





		//CONTENT TYPE

		//sales page

		//email optin

		//content promote

		//social share prompt.

		//app download

		//questions answer



		attachEvents(options.hook);
	};

	// 4. add events
	var attachEvents = function (hook) {

		//user scrolls to bottom of article


		//exit intent - after article


		//exit intent - before article


		//skimmed article -> fast scroll through article


		//finishes article scrolls up quickly


		//User inactivity



	};
 

	// main
	var main = function () {
		var userId = getUserId();
		var acessId = "duiofsh8y343tr4e8fs7dy9fidud7gv"
		var settings = getSettings(acessId, userId);

		buildMessage(settings.messageType, settings.contentType , settings.options);

	};
})();