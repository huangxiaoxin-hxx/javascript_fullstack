"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "Dowm";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Down);
var yg;
(function (yg) {
    yg[yg["No"] = 0] = "No";
    yg["Yes"] = "Yes";
})(yg || (yg = {}));
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1[Direction1['Up']]);
//# sourceMappingURL=enum.js.map