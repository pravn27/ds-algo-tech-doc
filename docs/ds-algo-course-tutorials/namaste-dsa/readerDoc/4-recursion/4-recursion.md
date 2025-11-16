---
sidebar_position: 4
---

# 4 - Recursion

> This video introduces you to the concept of recursion, explaining how a function can call itself and when to use this technique for solving problems.

## What is Recursion

- Recursion is **Function calls itself to solve smaller version of the same problem.**
- **2 main important parts of Recursion**
  - **Base case** - stop / termination condition (when to stop calling itself / recursive call)
  - **Recursive case** - where function calls itself

## Real life examples of Recursion usage

- Queue of people
- Nested Comment threads
- Organizational hierarchies structure

Examples:

![alt text](https://github.com/pravn27/ds-algo-coding-challenge/blob/master/namaste-dsa/ref-img/recursion/recursion-example.png?raw=true)

## Recursion & Callstack

- Infinite loop or Endless Recursion

  - Function calling itself without Base case / termination condition
  - Infinite recursion leads to Stack Overflow

    ![alt text](https://github.com/pravn27/ds-algo-coding-challenge/blob/master/namaste-dsa/ref-img/recursion/infinite-loop.png?raw=true)
    ![alt text](https://github.com/pravn27/ds-algo-coding-challenge/blob/master/namaste-dsa/ref-img/recursion/infinite-loop-1.png?raw=true)

- **When ever writing recursion / solving recursive problems, always first think about what is the Base case condition & written on top / begin of the function inside, so it will take care of stopping Infinite loop**

- Callstack
  ![alt text](https://github.com/pravn27/ds-algo-coding-challenge/blob/master/namaste-dsa/ref-img/recursion/callstack.png?raw=true)

- Callstack Overflow
  ![alt text](https://github.com/pravn27/ds-algo-coding-challenge/blob/master/namaste-dsa/ref-img/recursion/stack-overflow.png?raw=true)
  ![alt text](https://github.com/pravn27/ds-algo-coding-challenge/blob/master/namaste-dsa/ref-img/recursion/stack-overflow-demo.png?raw=true)

## Common Mistakes

- Missing Base case, leads to Stack Overflow
- Not simplifying the Input, while calling recursively, never reaches the base case
- Too Deep recursion, for very large inputs
- Keeping in the mind about time complexity

## When to use Recursion

- Problem can be broken into sub problems
- Trees and Graphs
- Backtracking, Dynamic Programming, Divide & Conquer
