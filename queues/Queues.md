# Queue
Queue is an abstract data structure, somewhat similar to stack. In contrast to stack, queue is opened at both end. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows First-In-First-Out methodology, i.e., the data item stored first will be accessed first.

A real world example of queue can be a single-lane one-way road, where the vehicle enters first, exits first. More real-world example can be seen as queues at ticket windows & bus-stops.

## Basic Operations
Queue operations may involve initializing or defining the queue, utilizing it and then completing erasing it from memory. Here we shall try to understand basic operations associated with queues −

enqueue() − add (store) an item to the queue.

dequeue() − remove (access) an item from the queue.

Few more functions are required to make above mentioned queue operation efficient. These are −

peek() − get the element at front of the queue without removing it.

isfull() − checks if queue is full.

isempty() − checks if queue is empty.

In queue, we always dequeue (or access) data, pointed by front pointer and while enqueing (or storing) data in queue we take help of rear pointer.


##Resources

 [Wiki](https://en.wikibooks.org/wiki/Data_Structures/Stacks_and_Queues#Queues)
