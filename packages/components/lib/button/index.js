"use strict";
const button = require("./button.js");
const install = require("../utils/install.js");
const Button = install.withInstall(button);
module.exports = Button;
