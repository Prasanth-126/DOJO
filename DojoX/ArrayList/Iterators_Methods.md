
# dojoX ArrayList Iterator Methods

`dojox.collections.Iterator` allows controlled iteration over an `ArrayList`.  
You can also use `dojox.collections.DictionaryIterator` for objects.

---

## 1️⃣ Create ArrayList

```js
require(["dojox/collections/ArrayList", "dojox/collections/Iterator"], function(ArrayList, Iterator){
    var list = new ArrayList();
    list.add("A");
    list.add("B");
    list.add("C");

    console.log("Original List:", list.toArray());
});
````

**Result:**

```
["A", "B", "C"]
```

**Explanation:**

* Created an ArrayList and added three elements.

---

## 2️⃣ Create an Iterator

```js
var it = new Iterator(list);
```

**Explanation:**

* Creates an iterator to traverse the ArrayList manually.

---

## 3️⃣ Iterate using `get()` and `atEnd()`

```js
console.log("Iterating using get() and atEnd():");
while(!it.atEnd()){
    console.log(it.get());
}
```

**Result:**

```
"A"
"B"
"C"
```

**Explanation:**

* `get()` returns the next element.
* `atEnd()` checks if the iterator has reached the end.

---

## 4️⃣ Reset the Iterator

```js
it.reset();
console.log("After reset, next element:", it.get());
```

**Result:**

```
"A"
```

**Explanation:**

* `reset()` moves the cursor back to the start of the list.
* The next `get()` call returns the first element.

---

## 5️⃣ Access current element using `element`

```js
console.log("Current element using element property:", it.element);
```

**Result:**

```
"A"
```

**Explanation:**

* `element` returns the current element (last returned by `get()`).

---

## 6️⃣ Iterate using `map(function, scope)`

```js
it.reset(); // Reset to start
console.log("Using map() to iterate:");
it.map(function(el, idx){
    console.log(idx, el);
});
```

**Result:**

```
0 "A"
1 "B"
2 "C"
```

**Explanation:**

* `map()` applies the given function to each element.
* The function receives `(element, index)`.
* Optionally, you can pass a `scope` as the second argument.

---

## ✅ Iterator Methods Summary

| Method / Property | Example                             | Description                                    | Result                               |
| ----------------- | ----------------------------------- | ---------------------------------------------- | ------------------------------------ |
| `atEnd()`         | `it.atEnd()`                        | Checks if the iterator reached the end         | true / false                         |
| `get()`           | `it.get()`                          | Returns next element & moves cursor            | "A", "B", "C"                        |
| `map(func)`       | `it.map((el,i)=>console.log(i,el))` | Applies function to each element               | Prints index & element               |
| `reset()`         | `it.reset()`                        | Resets cursor to the beginning                 | Next `get()` starts at first element |
| `element`         | `it.element`                        | Returns current element (last returned by get) | "A"                                  |

---
