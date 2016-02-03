## QuickSort
Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

* Always pick first element as pivot.
* Always pick last element as pivot.
* Pick a random element as pivot.
* Pick median as pivot.

The steps for quickSort are next:

1. Pick an element, called a pivot, from the array.
2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

QuickSort is a recursive method, so we will have to use a technique to calculate the total running time of all the method calls. We can use a version of the "Recursion Tree Method" to estimate the running time for a given array of N element:

![RecursionTree](RecursionTree.png)

## Challenges

* Build QuickSort algorithm (pivot - middle element)

* In the Quicksort challenges, you sorted an entire array. Sometimes, you just need specific information about a list of numbers, and doing a full sort would be unnecessary. Can you figure out a way to use your partition code to find the median in an array? Given a list of numbers, can you find the median?

## Resources

* http://me.dt.in.th/page/Quicksort/
* [Link](http://www.sorting-algorithms.com/) which show how different algorithms works.
* [Another good explanation](http://www.code2learn.com/2013/02/quick-sort-algorithm-tutorial.html)
