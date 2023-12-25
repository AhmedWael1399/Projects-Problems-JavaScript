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

const list1 = new LinkedList(1)
list1.append(1)
list1.append(1)
list1.append(2)
list1.append(3)
list1.append(3)

function removeDuplicates(l1) {
    if (l1 == null || l1.next == null)
        return l1;
    let num = l1;
    while (num != null && num.next != null) {
        if (num.val == num.next.val) {
            num.next = num.next.next;
        }
        else {
            num = num.next;
        }
    }
    return l1;
}

removeDuplicates(list1)