
##  Linked List
A linked-list is a sequence of data structures which are connected together via links.

Linked List is a sequence of links which contains items. Each link contains a connection to another link. Linked list the second most used data structure after array. Following are important terms to understand the concepts of Linked List.

Link − Each Link of a linked list can store a data called an element.

Next − Each Link of a linked list contain a link to next link called Next.

###Linked List Representation

Linked list can be visualized as a chain of nodes, where every node points to the next node.

![LinkedList](linked_list.jpg)

###Basic Operations
Following are the basic operations supported by a list.

`Insertion` − add an element at the beginning of the list.

`Deletion` − delete an element at the beginning of the list.

`Display` − displaying complete list.

`Search` − search an element using given key.

`Delete` − delete an element using given key.


##Challenges

### Delete node in link list.

You’re given the pointer to the head node of a single linked list and the position of a node to delete.
Delete the node at the given position and return the head node. A position of 0 indicates head,
a position of 1 indicates one node away from the head and so on.

  Input:

    1` --> 2 --> 3 --> NULL, position = 0
    1 --> NULL , position = 0`

  Output:

    `2 --> 3 --> NULL
    NULL`

###Find Merge Point of Two Lists
You're given two single linked lists. You should find the node where two linked list have intersection.

  Input:

    `1 -> 3 -> 4 -> 6 -> NULL`

    `2 -> 4 -> 7 -> NULL`

  Output:

    `4`

###Find middle element in linked List
You're given single linked list. Find the middle element.

  Input:

    `1 -> 3 -> 5 -> 6 -> 10 -> NULL`

  Output:

    `5`

###Merge two sorted linked lists in reverse order
You’re given the pointer to the head nodes of two sorted linked lists. The data in both lists will be sorted in ascending order. Change the next pointers to obtain a single, merged linked list which also has data in ascending order. Either head pointer given may be null meaning that the corresponding list is empty.

  Input:

    `1 -> 3 -> 5 -> 6 -> NULL
    2 -> 4 -> 7 -> NULL

    15 -> NULL
    12 -> NULL

    NULL
    1 -> 2 -> NULL`

  Output:

    `1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

    12 -> 15 -> NULL

    1 -> 2 -> NULL`

###Detect cycle
You’re given the pointer to the head node of a linked list. Find whether the list contains any cycle (or loop). A linked list is said to contain cycle if any node is re-visited while traversing the list. The head pointer given may be null meaning that the list is empty.

## Resources

[Wiki](https://en.wikipedia.org/wiki/Linked_list)

## More challenges

[Leetcode](https://leetcode.com/tag/linked-list/)
