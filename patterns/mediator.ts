/* 
Медиатор содержит в себе связи между различными элементами, классами, 
что позволяет инкапсулировать специфическую логику и переиспользовать компоненты
*/
interface Mediator {
    send(msg: String, sender: User): void;
  }
  
  class User {
    public mediator: Mediator;
  
    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }
  
    send(msg: String): void {
      this.mediator.send(msg, this);
    };
  
    receiveMsg(msg: String): void {
      console.log(msg);
    };
  }
  
  class ConcreteMediator implements Mediator {
    public First: User;
    public Second: User;
  
    send(msg: String, sender: User): void {
      if (sender === this.First) {
        this.First.receiveMsg(msg);
        this.Second.receiveMsg(msg);
      } 
  
      if (sender === this.Second) {
        this.Second.receiveMsg(msg);
      }
    }
  }
  
  class ClassFirstUser extends User {
    constructor(mediator: Mediator) {
      super(mediator);
    }
  
    send(msg: String) {
      console.log('First');
      super.send(msg);
    }
  }
  
  class ClassSecondUser extends User {
    constructor(mediator: Mediator) {
      super(mediator);
    }
  
    send(msg: String) {
      console.log('Second');
      super.send(msg);
    }
  }
  
  (function main() {
    const mediator = new ConcreteMediator();
    const first = new ClassFirstUser(mediator);
    const second = new ClassSecondUser(mediator);
  
    mediator.First = first;
    mediator.Second = second;
  
    first.send('First user sends message to second.');
    second.send('Second user sends message to first.');
  
  })();