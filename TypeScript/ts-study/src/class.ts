// 抽象类

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming this earch...')
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('miao miao')
  }
}

const cat = new Cat()
cat.move()
cat.makeSound()

// 访问限定符

class Bird {
  public run() {
    console.log('飞起来...')
  }
  private eat() {
    console.log('吃虫')
  }
  public getEat() {
    this.eat()
  }
  protected sleep() {
    console.log('睡觉')
  }
}

const bird = new Bird()
bird.getEat()
// bird.sleep()

class Pigeon extends Bird {
  init() {
    this.sleep()
  }
}
const pigeon = new Pigeon()
pigeon.init()

// class 可以作为接口
