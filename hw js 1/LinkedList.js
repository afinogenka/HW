// linked list
//null -> [vlue, next] -> [vlue, next] -> [vlue, next] -> null

class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next

    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){                                 // add element in the end of the linked list
        const node = {data:data, next: null}

        if(this.tail){
            this.tail.next = node
        }

        if(!this.head){
            this.head = node
        }

        this.tail = node
    }
    prepend(data){                                             // add element at the begining of the list
        const node = new Node (data, this.head)
        this.head = node
        if (!this.tail){
            this.tail = node
        }                                               // если хвост еще не определен, то tail=node
    }

    toArray(){
        let current = this.head
        while(current){
            output.push(current)
            current = current.next

        }
    }
}
const list = new LinkedList();


list.append('My')
list.append('name')
list.prepend('Hi')
console.log(list)