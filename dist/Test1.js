"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const utils = require('./Utils').utils;
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    // test case 1 of unit test
    if (utils.add(2, 2) === 4) {
    }
    else {
        console.log("Test Failed: utils.add(2, 2) === 4");
        process.exit(1);
    }
    if (utils.add(3, 3) === 6) {
    }
    else {
        console.log("Test Failed: utils.add(3, 3) === 6");
        process.exit(1);
    }
    if (utils.add_user("test", "testnoassigning", "password") === false) {
    }
    else {
        console.log("UnitTest Case 3: utils.add_user(\"test\", \"testnoassigning\", \"password\") == false");
        process.exit(1);
    }
});
unit_test();
