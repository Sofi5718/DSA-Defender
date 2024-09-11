export default class singlyLinkedList {
    head = null;

    constructor() {}

    add(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }
    getFirstNode() {
        return this.head;
    }
    getNextNode(node) {
        return node.next;
    }
    dumpList() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
    removeFirstNode() {
        if (this.head != null) {
            this.head = this.head.next;
        }
    }
    removeLastNode() {
        let current = this.head;
        let prevE = null;

        if (!current.next) {
            this.head = null;
            return;
        }
        while (current) {
            if (current.next == null) {
                //nu er du den sidste
                prevE.next = null;
            }
            prevE = current;
            current = current.next;
        }
    }
    removeNode(node) {
        let current = this.head;
        if (node == this.head) {
            this.head = node.next;
        }
        while (current) {
            if (current.next == node) {
                current.next = node.next;
                break;
            }
            current = current.next;
        }
    }
    getLastNode() {
        let current = this.head;
        while (current) {
            if (current.next == null) {
                return current;
            }
            current = current.next;
        }
    }

    getNodeWith(data) {
        let current = this.head;
        while (current) {
            if (current.data == data) {
                return current;
            }
            current = current.next;
        }
    }

    remove(data) {
        let nodeToRemove = this.getNodeWith(data);
        this.removeNode(nodeToRemove);
    }
    size() {
        let current = this.head;
        let count = 0;

        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

class Node {
    next = null;
    data = null;

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
