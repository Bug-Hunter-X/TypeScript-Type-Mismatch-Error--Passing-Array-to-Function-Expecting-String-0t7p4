# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error: passing an array to a function that expects a string. The error arises from a type mismatch between the function's parameter type and the argument type.

## Bug Description

The `greeter` function is defined to accept a single string argument. However, in the code, an array of strings `["Jane", "Doe"]` is passed as an argument. This leads to a type error because TypeScript enforces type safety.

## Solution

The solution involves modifying the code to ensure that the function receives a string argument.  This can be done by either modifying the function to accept an array or by modifying the way the array is handled in the function call. Several solutions are given in the `bugSolution.ts` file.