const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let temp;
        if (this._head == null) {
            temp = new Node(data);
            this._head = temp;
            this._tail = temp;
            this.length++;
            return this;
        } else {
            temp = new Node(data, this._tail);
            this._tail.next = temp;
            this._tail = temp;
            this.length++;
            return this;
        }
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let temp = this._head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp.data;
    }

    insertAt(index, data) {
        let node = new Node(data);
        let temp = this._head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        node.next = temp;
        node.prev = temp.prev;
        if (temp.prev != null) {
            temp.prev.next = node;
            temp.prev = node;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        return false;
    }

    clear() {
        let temp = new Node(null);
        this._head = temp;
        this._tail = temp;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let temp = this._head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        if (temp.next != null) {
            temp.next.prev = temp.prev;
        }
        if (temp.prev != null) {
            temp.prev.next = temp.next;
        }
        this.length--;
        if (index = 0) {
            this._head = temp.next;
        } else if (index = this.lnegth) {
            this._tail = temp.prev;
        }
        return this;
    }

    reverse() {
        let temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        temp = this._head;
        let temp2;
        for (let i = 0; i < this.length; i++) {
            temp2 = temp.next;
            temp.next = temp.prev;
            temp.prev = temp2;
            temp = temp.next;
        }
        return this;
    }

    indexOf(data) {
        let temp = this._head;
        for (let i = 0; i < this.length; i++) {
            if (temp.data == data) {
                return i;
            }
            temp = temp.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
