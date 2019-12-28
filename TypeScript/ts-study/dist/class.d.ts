declare abstract class Animal {
    abstract makeSound(): void;
    move(): void;
}
declare class Cat extends Animal {
    makeSound(): void;
}
declare const cat: Cat;
declare class Bird {
    run(): void;
    private eat;
    getEat(): void;
    protected sleep(): void;
}
declare const bird: Bird;
declare class Pigeon extends Bird {
    init(): void;
}
declare const pigeon: Pigeon;
