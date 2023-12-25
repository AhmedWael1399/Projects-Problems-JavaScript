class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
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
        if (index >= this.length) return this.append(value)
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()
    }
    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const nextValue = this.traverseToIndex(index + 1);
        leader.next = nextValue;
        this.length--;
        return this.printList()
    }
}

const list1 = new LinkedList(1);
list1.append(2);
list1.append(4);
const list2 = new LinkedList(1);
list2.append(3);
list2.append(4);


function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
}

mergeTwoLists(list1, list2)
