
class HashTable {
    constructor() {
        this.size = 0;
        this.dataStore = {};
    }
    toString() {
        return String(this.dataStore);
    }

    put(key, value) {
        if (this.dataStore.hasOwnProperty(key)) {
            throw new Error("Hash table cannot contain same values");
        }
        else {
            this.dataStore[key] = value;
            this.size += 1;
        }
    }

    remove(key) {
        if (this.dataStore.hasOwnProperty(key)) {
            delete this.dataStore[key];
            this.size -= 1;
            return this.dataStore;
        }
    }

    clear() {
        this.dataStore = {};
        this.size = 0;
        return this.dataStore;
    }
    
    contains(key) {
        if (this.dataStore.hasOwnProperty(key)) {
            return true;
        }

        else {
            return false;
        }

    }
}

HashTable.prototype.size = function(){
    return this.size;
}



var ht = new HashTable();

ht.put("A", "a");
ht.put("B", "b");
ht.put("C", "c");
console.log(ht)