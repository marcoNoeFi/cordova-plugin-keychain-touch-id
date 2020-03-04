window.touchid = {
	isAvailable: function (successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "TouchID", "isAvailable", []);
	},
	save: function (key, password, message, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "TouchID", "save", [key, password, message]);
	},
	verify: function (key, message, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "TouchID", "verify", [key, message]);
	},
	has: function (key, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "TouchID", "has", [key]);
	},
	delete: function (key, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "TouchID", "delete", [key]);
	},
	setLocale: function (locale, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "TouchID", "setLocale", [locale]);
	}
};
