var NOTE;

$(document).ready(function() {
	newNotebook();
	//NOTE = new Notify();
	//new Config();
	//NOTE.alert("lol", "text");
});

function newNotebook() {
	$("#newNotebook").keypress(function(event) {
		if (event.which == 13) {
			if ($(this).val() == "")
				return;
			$("<li><a href=''>" + $(this).val() + "</a></li>").appendTo("#notebooks");
			$(this).val("");
		}
	});
}

Config = function() {
	var filesystem	= require("fs");
	var configDir 	= process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
	configDir 		= configDir + "/.Springseed";
	filesystem.exists(configDir, function(exists) {
		if (!exists)
			filesystem.mkdir(configDir);
	});
	filesystem.exists(configDir + "/config.json", function(exists) {
		if (!exists)
			filesystem.writeFile(configDir + "/config.json", " ", function(error) {
				if (error)
					alert("Ein Fehler ist aufgetreten: \n\n" + error);
				});
	})

};

Notify = function() {
	this.nwNotify = require('nw-notify');
	this.nwNotify.setConfig({
		appIcon: this.nwNotify.getAppPath() + 'appIcon.png',
		displayTime: 6000
	});
};
Notify.prototype.alert = function(title, text) {
	this.nwNotify.notify(title, text);
};