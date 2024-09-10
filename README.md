## Big O

![image](https://github.com/user-attachments/assets/061614ff-484d-42c1-a83b-5e173e4ea9ca)

![image](https://github.com/user-attachments/assets/715cd2e1-9f5e-4fc8-b7b3-265929423edc)

![image](https://github.com/user-attachments/assets/79fb0047-69d7-4756-820f-3698d0ac3701)



## Linked List
* each element of LL are not in same memory place, but scattered across them memory
* each element has pointer, pointing to next memory location, where next item is present

![LinkedList Big(O)](image.png)



## ALGORITHM
#### "tortoise and hare" algorithm also known as  Floyd's cycle-finding algorithm
This algorithm uses two pointers: a slow pointer and a fast pointer.
The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a loop in the linked list,
the two pointers will eventually meet at some point. If there is no loop, the fast pointer will reach the end of the list.
```js
// Finding the middle node in one iteration (in case of even select mid which is closer to tail) 
    findMiddleNode() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
//Write a method called hasLoop that is part of the linked list class. The method should be able to detect if there is a cycle or loop present in the linked list

  hasLoop() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

//Implement a member function called findKthFromEnd(k) that finds and returns the kth node from the end of the linked list.
    findKthFromEnd(k) {
        let slow = this.head;
        let fast = this.head;
 
        for (let i = 0; i < k; ++i) {
            if (fast === null) {
                return null;
            }
            fast = fast.next;
        }
 
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }
 
        return slow;
    }

//Implement a member function called partitionList(x) that partitions the linked list such that all nodes with values less than x come before nodes with values greater than or equal to x. 
//Note: this linked list class does not have a tail which will make this method easier to implement.
//The original relative order of the nodes should be preserved.



```
