type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;
        if (this.head === undefined) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as Node<T>;
        this.head = head?.prev;

        // free in traditional languages like C++; linked list is too difficult in rust

        return head.value;
    }

    peek(): T | undefined {
        // what is at the head
        return this.head?.value;
    }
}
// For a queue you do enqueue and dequeue; for a stack its push and pop
