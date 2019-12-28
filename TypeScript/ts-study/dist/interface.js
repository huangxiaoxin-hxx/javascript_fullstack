"use strict";
var getUsername = function (user) {
    user.name;
    user.say = function (wrods) {
        return 'hello';
    };
};
function CalculateAreas(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
var mySquare = CalculateAreas({ width: 5 });
console.log(mySquare);
//# sourceMappingURL=interface.js.map