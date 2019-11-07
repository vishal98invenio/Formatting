/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Format/Formatter/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});