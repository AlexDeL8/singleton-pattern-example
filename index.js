import televisionOne from "./televisionOne.js";
import televisionTwo from "./televisionTwo.js";

let tv1 = new televisionOne(1);
let tv2 = new televisionTwo(2);

tv1.turnOn();
tv1.changeChannel(58);

tv2.turnOn();
tv2.changeChannel(37);
tv2.changeChannel(12);
tv2.changeChannel(72);

tv1.changeChannel(91);
