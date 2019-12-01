# interview-text-analyzer
Text analyzer using graph

## Description

Create a web application that will analyse customer input and provide some statistics.

## Acceptance Criteria

1. Customer is asked to insert a string (not longer then 255 chars).
2. Customer submits the data and receives a grid overview with character statistics.
  - column1 - character symbol
  - column2 - how many times character encountered.
  - column3 - sibling character info: character was seen standing before [list of chars], after [list of chars], longest distance between chars (in case of 2 or more characters).

## Guidance Step

- Use framework if needed.
- Create an MVC application. Follow SOLID principles in your work.
- Using DB is not required in this assignment.
- Assignment should be implemented using objects arranged into graph - Write a unit test for function that will traverse the graph.

## Example

String 'football vs soccer' should output:

- f : 1 : before: o after: none
- o : 3 : before: o,t,c after: o,f,s max-distance: 10 chars
- t : 1 : before: b, after: o
- ...
- s	: 2	: before: s,o after: v,s max-distance: 1 char