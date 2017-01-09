'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this._length = 0;
  }

  add(val) {
    if (!this.head) {
      this.head = this.tail = new Node(val);
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this._length++;
  }

  print() {
    // var items = [];
    if (!this.head == null) {
      console.log("no items");
    } else {
      var current = this.head;
      while(current != null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }

}

function reverseLL (LL) {
  var current = LL.head;
  var prev = null;
  var next = current.next;

  if (current.next == null) {
    return LL;
  } else {
    while(current.next != null) {
      current.next = prev;
      prev = current;
      current = next;
      // console.log(next, "next");
      next = current.next;
    }
    current.next = prev;
    LL.head = current;


  }
  return LL;

}

var newLL = new SinglyLinkedList();

newLL.add(1);
newLL.add(2);
newLL.add(3);
newLL.add(4);
newLL.print();
// console.log(newLL);
console.log("*********************");
reverseLL(newLL);
newLL.print();
