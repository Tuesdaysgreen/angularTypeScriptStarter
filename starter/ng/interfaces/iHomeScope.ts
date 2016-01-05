'use strict'

import HomeCtrl = require("../controllers/HomeController");

export = IHomeScope;
interface IHomeScope extends ng.IScope {
    location: ng.ILocationService;
    vm: HomeCtrl;
    greeting: string;
}    
