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
//adding nodes to LL
  add(val) {
    if (!this.head) {
      this.head = this.tail = new Node(val);
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this._length++;
  }
//Print val of nodes
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
//Reverse a LL
function reverseLL(LL) {
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

//remove kth node
function remove_k_node(LL, k) {
  var count = 0;
  var current = LL.head;
  var next = current.next;

  if (k == count) {
    LL.head = current.next;
    return LL;
  } else {
    while(count != k-1) {
      count += 1;
      current = next;
      next = current.next;
    }
    current.next = current.next.next;
  }
  return LL;
}

//delete a node from LL
//we don't know anything before the node
function delete_unknown_node(LL, k) {
  var current = k;

  if (current.next == null) {
    current = null;
  }
  else {
    current.value = current.next.value;
    current.next = current.next.next;
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
// reverseLL(newLL);
// newLL.print();
// remove_k_node(newLL, 2);

delete_unknown_node(newLL, newLL.head.next.next);
newLL.print();
