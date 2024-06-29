"use strict";
import './modules/languageChanger.js';
import './modules/hideShow.js';
import './modules/headerFixed.js';
import mailSender from "./modules/mailsender.js";

document.addEventListener("DOMContentLoaded", mailSender());
