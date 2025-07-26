---
sidebar_position: 1
---

# 1 - Big O Notation

- Resource Docs

  - [Big O Notation Pdf Notes](https://github.com/pravn27/ds-algo-tech-doc/blob/master/docs/ds-algo-course-tutorials/from-colt-steele/readerDoc/pdf-docs/02-pdf-slides-big-o-notation.pdf)
  - [JS Code exercise](https://github.com/pravn27/ds-algo-tech-doc/tree/master/docs/ds-algo-course-tutorials/from-colt-steele/readerDoc/1-big-o/js-code-exercise)

## Introduction

- Resource Docs

  - [Big O Slides](https://cs.slides.com/colt_steele/big-o-notation)

- What is Big O Notation?
  - Big O Notation is a mathematical representation used to describe the efficiency of algorithms, specifically their time and space complexity. It provides an upper bound / worst-case scenario on the growth rate of an algorithm's resource consumption as the input size increases.
  - Its numerical representation of performance of your code / algorithm
  - Big O Notation helps developers understand the scalability of their code and make informed decisions about algorithm optimization.

## Timing our Code

- What metrics using for Big O Notation ?
  - Time Complexity (preferred)
  - Space Complexity
- **With Time Complexity, will not go with measuring time taken to run the code, instead we focus on the Number of Operations performed as the input size grows.**

- How to measure Time Complexity?

  - Count the number of simple Operations the computer has to perform.
  - We can measure Time Complexity by analyzing the algorithm and counting the number of basic operations it performs as a function of the input size.
  - This can often be done using "Big O" notation, which provides a high-level understanding of the algorithm's efficiency.

- [JS Code exercise](https://github.com/pravn27/ds-algo-tech-doc/tree/master/docs/ds-algo-course-tutorials/from-colt-steele/readerDoc/1-big-o/js-code-exercise)

## Visualizing Time Complexity

- https://rithmschool.github.io/function-timer-demo/

## Space Complexity

- Space Complexity measures the amount of working storage an algorithm needs. This includes both the temporary space allocated by the algorithm and the space needed for the input values.
- Like Time Complexity, we express Space Complexity using Big O notation, which allows us to describe the growth rate of the space requirements as the input size increases.
- When analyzing Space Complexity, we focus on the maximum amount of memory the algorithm requires at any point during its execution.
- Focus on **Auxiliary Space Complexity** refers to the extra space or temporary space used by an algorithm, excluding the space taken by the input values. It helps us understand the additional memory overhead introduced by the algorithm such as the space needed for variables, data structures, and function call stacks.
