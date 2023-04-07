// linked list
//[vlue, next] -> [vlue, next] -> [vlue, next] -> null

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {                                 // add element in the end of the linked list
        const node = { data: data, next: null }

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node
    }
    prepend(data) {                                             // add element at the begining of the list
        const node = new Node(data, this.head)
        this.head = node
        if (!this.tail) {
            this.tail = node
        }                                               // если хвост еще не определен, то tail=node
    }

    find(data){
        if (!this.head){                          // Если список пустой выходим из функции
            return
        }

        while(this.head && this.head.data === data){
            this.head = this.head.next

        }

        let current = this.head
        while(current){
            if (current.data===data){
                return current
            }
            current = current.next
        }
    }

    toArray() {
        const array = []
        let current = this.head
        while (current) {                  // loop пока current не равно false
            array.push(current)
            current = current.next        // loop закончится когда current=null, то есть когда достигнет посл. елемента. 
                                           // так как next посл элемента равен null
        }
        return array
    }

    deteleElement(data){
        if (!this.head){
            return
        }

        let current = this.head
        while(current.next){
            if(current.next.data === data){
                //remove
                current.next = current.next.next
            }
            else{
                current = current.next
            }
        }

        if (this.tail.data === data){
            this.tail = current
        }

    }

    insert(data){
        var current;
        current = new Node()
        current.data = data;
        current.next = null;
        return current
    }

    elementCount(head){
        var count = 0;

        while(head!=0){
            count++;
            head=head.next
        }

        return count

    }
  
}
const list = new LinkedList();

list.append('B')
list.append('C')
list.append('D')
list.insert(42)
list.append('E')
list.prepend('A')

list.find('C')

console.log(list.count)
list.deteleElement('C')

console.log(list.toArray())