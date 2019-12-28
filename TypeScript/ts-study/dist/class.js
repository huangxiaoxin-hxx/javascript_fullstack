"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('roaming this earch...');
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('miao miao');
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.move();
cat.makeSound();
var Bird = (function () {
    function Bird() {
    }
    Bird.prototype.run = function () {
        console.log('飞起来...');
    };
    Bird.prototype.eat = function () {
        console.log('吃虫');
    };
    Bird.prototype.getEat = function () {
        this.eat();
    };
    Bird.prototype.sleep = function () {
        console.log('睡觉');
    };
    return Bird;
}());
var bird = new Bird();
bird.getEat();
var Pigeon = (function (_super) {
    __extends(Pigeon, _super);
    function Pigeon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pigeon.prototype.init = function () {
        this.sleep();
    };
    return Pigeon;
}(Bird));
var pigeon = new Pigeon();
pigeon.init();
//# sourceMappingURL=class.js.map