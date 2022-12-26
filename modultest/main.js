/*main.js*/
//import * as md from "./module.js"; // * as참조변수가 만들어진다
import { module as mod, area } from "./module.js";
import sq, { circle } from "./moduleone.js";
mod("test"); //md.module("test");
area(10, 20); //md.area(10, 20);
sq();
circle();
