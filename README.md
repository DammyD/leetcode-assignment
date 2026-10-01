# Part B — LeetCode Assignment

This assignment contains my solutions to five JavaScript programming problems.

The solutions focus on problem-solving, JavaScript fundamentals, and writing functions that handle the requirements specified in each problem.

## Problems

### 1. Deep Equality

**Problem:** Implement `deepEqual(objA, objB)` to determine whether two objects have the same keys and values recursively, including nested objects.

**Constraint:** `JSON.stringify()` must not be used.

**Concepts:**

* Objects
* `Object.keys()`
* Recursion
* Strict equality
* Iteration

---

### 2. Object Difference

**Problem:**
Implement diffObjects(oldObj, newObj) to return an object describing the differences between two objects:

{
  added: {},
  removed: {},
  changed: {}
}

The comparison should consider only top-level keys.

**Concepts:**

* Object manipulation
* Object.keys()
* Property comparison
* Object construction
* Conditional logic

---

### 3. Deep Freeze

**Problem:**
Implement deepFreeze(obj) to recursively freeze an object and all of its nested objects, since Object.freeze() only freezes the top level.

The function should return the frozen object.

**Concepts:**
* Object.freeze()
* Recursion
* Nested objects
* Object traversal
* Immutability

---

### 4. Counter

**Problem:**
Implement createCounter() to return an object with increment(), decrement(), and value as a getter.

The internal count must remain truly private by using a closure.

**Concepts:**
* Closures
* Getters
* Encapsulation
* Object methods
* Private state

---

### 5. Schema Validation

**Problem:**
Implement validateSchema(obj, schema) where schema maps each key to an expected typeof string.

{
    name: 'string',
    age: 'number'
}

The function should return an array of error messages for missing keys or type mismatches. It should return an empty array when the object is valid.

**Concepts:**
* `typeof`
* Object properties
* Validation
* Arrays
* Conditional logic
* Error handling

## Technologies

* JavaScript
* Git
* GitHub

## Project Structure

```text
leetcode-assignment/
├── index.html/
├── problem_one/
├── problem_two/
├── problem_three/
├── problem_four/
├── problem_five/
└── README.md
```

## Author

**Blessing Dawodu**
