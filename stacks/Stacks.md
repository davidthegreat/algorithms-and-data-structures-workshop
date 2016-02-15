## Stacks
A stack is an abstract data type (ADT), commonly used in most programming languages.
A real-world stack allows operations at one end only. For example, we can place or remove a card or plate from top of the stack only. Likewise, Stack ADT allows all data operations at one end only. At any given time, we can only access the top element of a stack.

This feature makes it LIFO data structure. LIFO stands for Last-in-first-out. Here, the element which is placed (inserted or added) last, is accessed first. In stack terminology, insertion operation is called PUSH operation and removal operation is called POP operation.


![Stack](stack.jpg)

### Basic Operations
Stack operations may involve initializing the stack, using it and then de-initializing it. Apart from these basic stuffs, a stack is used for the following two primary operations −

`push()` − pushing (storing) an element on the stack.

`pop()` − removing (accessing) an element from the stack.

When data is PUSHed onto stack.

To use a stack efficiently we need to check status of stack as well. For the same purpose, the following functionality is added to stacks −

`peek()` − get the top data element of the stack, without removing it.

`isFull()` − check if stack is full.

`isEmpty()` − check if stack is empty.

##Challenges

### Balanced Parentheses
Given a sequence consisting of parentheses, determine whether the expression is balanced. A sequence of parentheses is balanced if every open parentheses can be paired uniquely with a closed parentheses that occurs after the former. You will be given three types of parentheses: (, {, and [. Return true or false.

  Examples:

    `{[()]} - This is a balanced parentheses.
    {[(])} - This is not a balanced parentheses.`

### Find maximum element in stack

Design a Data Structure SpecialStack which inheritance from Stack and have all stack operations like push, pop, empty. Implement additional operation get_max, which should return maximum element from SpecialStack. This operation
must be O(1). To implement get_max, you should only use standard Stack and no other data structure like arrays, .. etc.   


## Resources
[Wiki](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
