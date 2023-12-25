class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = {
            value: null,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    traverseToIndex(index) {
        let currentNode = this.head
        let counter = 0;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index, value) {
        if (index >= this.length) return this.append(value)
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList()
    }
    remove(index) {
        if (this.head == null) return null
        if (index === 0) {
            this.head = this.head.next
            this.length--;
            return this
        }
        else {
            const leader = this.traverseToIndex(index - 1);
            const nextValue = this.traverseToIndex(index + 1);
            leader.next = nextValue;
            nextValue.prev = leader;
            this.length--;
            return this
        }
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList()
    }
}