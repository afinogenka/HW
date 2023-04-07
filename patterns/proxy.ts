/*
Proxy(Заместитель) структурный паттерн, который вместо реальных объектов 
предоставляет специальные объекты заменители. Эти объекты перехватывают вызов к оригиналам
и позволяют сделать что-то до или после обращения к оригинальному объекту. Это прослойка, 
которая позволяет провести дополнительные манипуляции, до того как отдать дальнейший контроль.

*/
interface PeopleAtAirportInterface{      
    sendMessage(): void
}

class Airport{
    private people: PeopleAtAirportInterface[];

    constructor(){
        this.people = [];
    }

    addPerson(person: PeopleAtAirportInterface){
        this.people.push(person);
        console.log('Passenger is added.')
    }

    removePerson(person: PeopleAtAirportInterface){
       // const pIndex = this.people.indexOf(person);
        this.people = this.people.filter(p => p !== person);
        console.log('Passenger was removed.');
    }

    notifyPassengers(){
        console.log('Passengers chart flight information to all passengers: ');
        this.people.forEach(person => person.sendMessage());
    } 
}

class Passenger implements PeopleAtAirportInterface{
    name: string;
    gate: number;
    constructor(name: string, gate: number){
        this.name = name;
        this.gate = gate;
    }
    sendMessage(): void {
        console.log(this.name +', follow to the gate' + this.gate+'!')
    }
}

const airport = new Airport()
const passenger1 = new Passenger('Elton', 56)
const passenger2 = new Passenger('John', 14)
const passenger3 = new Passenger('Elvis', 27)

airport.addPerson(passenger1)
airport.addPerson(passenger2)
airport.addPerson(passenger3)

airport.notifyPassengers()