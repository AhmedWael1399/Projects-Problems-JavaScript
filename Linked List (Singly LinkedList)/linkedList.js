class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = {
            value: null,
            next: null
        }
        this.tail = this.head
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
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
        if (!this.head.next) {
            const newNode = new Node(value);
            this.head = newNode;
            this.length++
            return this
        }
        else if (index >= this.length && this.length === 1) {
            const newNode = new Node(value);
            this.tail = newNode;
            this.length++;
            return this;
        }
        else {
            const newNode = new Node(value)
            const leader = this.traverseToIndex(index - 1);
            const holdingPointer = leader.next;
            leader.next = newNode;
            newNode.next = holdingPointer;
            this.length++;
            return this
        }
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
            this.length--;
            return this
        }
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let firstItem = this.head;
        this.tail = this.head;
        let secondItem = firstItem.next;
        while (secondItem) {
            let temp = secondItem.next;
            secondItem.next = firstItem;
            firstItem = secondItem;
            secondItem = temp;
        }
        this.head.next = null;
        this.head = firstItem;
        return this.printList()
    }
}
const l1 = new LinkedList();
l1.insert(2, 20)
l1.insert(3, 30)
l1.printList();