
`dojox.collections.ArrayList` is an index-based resizable collection of elements.

---

## 1️⃣ Create ArrayList

```js
require(["dojox/collections/ArrayList"], function(ArrayList){
    var list = new ArrayList();
    console.log(list.toArray()); // Output: []
});
````

**Explanation:**
Creates a new empty `ArrayList`. At this point, the list has no elements.

---

## 2️⃣ `add(obj)` – Add element to end

```js
list.add("A");
list.add("B");
console.log(list.toArray()); // ["A","B"]
```

**Explanation:**
Appends the given element to the **end of the list**. Useful for adding items one by one.

---

## 3️⃣ `addRange(array)` – Add multiple elements

```js
list.addRange(["C","D"]);
console.log(list.toArray()); // ["A","B","C","D"]
```

**Explanation:**
Adds multiple elements from an array or collection at once.

---

## 4️⃣ `clone()` – Copy the list

```js
var cloneList = list.clone();
console.log(cloneList.toArray()); // ["A","B","C","D"]
```

**Explanation:**
Creates a **separate copy** of the ArrayList. Modifying the original list does not affect the clone.

---

## 5️⃣ `contains(obj)` – Check existence

```js
console.log(list.contains("B")); // true
console.log(list.contains("Z")); // false
```

**Explanation:**
Returns `true` if the element exists in the list, otherwise `false`.

---

## 6️⃣ `indexOf(obj)` – Find index

```js
console.log(list.indexOf("C")); // 2
console.log(list.indexOf("Z")); // -1
```

**Explanation:**
Returns the **0-based index** of an element. Returns `-1` if the element is not found.

---

## 7️⃣ `insert(idx, obj)` – Insert at index

```js
list.insert(2, "X");
console.log(list.toArray()); // ["A","B","X","C","D"]
```

**Explanation:**
Inserts an element at the given index, shifting other elements to the right.

---

## 8️⃣ `remove(obj)` – Remove first occurrence

```js
list.remove("B");
console.log(list.toArray()); // ["A","X","C","D"]
```

**Explanation:**
Removes the **first occurrence** of the given element.

---

## 9️⃣ `removeAt(idx)` – Remove by index

```js
list.removeAt(0);
console.log(list.toArray()); // ["X","C","D"]
```

**Explanation:**
Removes the element at the specified index.

---

## 🔟 `reverse()` – Reverse the list

```js
list.reverse();
console.log(list.toArray()); // ["D","C","X"]
```

**Explanation:**
Reverses the order of elements in the list.

---

## 1️⃣1️⃣ `sort()` – Sort ascending

```js
list.sort();
console.log(list.toArray()); // ["C","D","X"]
```

**Explanation:**
Sorts elements in ascending order (works with strings and numbers).

---

## 1️⃣2️⃣ `setByIndex(idx, obj)` – Replace element at index

```js
list.setByIndex(1, "ZZ");
console.log(list.toArray()); // ["C","ZZ","X"]
```

**Explanation:**
Replaces the element at a specific index without changing the size of the list.

---

## 1️⃣3️⃣ `toArray()` – Convert to native array

```js
var arr = list.toArray();
console.log(arr); // ["C","ZZ","X"]
```

**Explanation:**
Returns a **JavaScript array** with all elements from the ArrayList.

---

## 1️⃣4️⃣ `forEach(func, scope)` – Iterate over elements

```js
list.forEach(function(item, index){
    console.log(index, item);
});
```

**Output:**

```
0 "C"
1 "ZZ"
2 "X"
```

**Explanation:**
Calls the given function for **every element**.

* `item` → current element
* `index` → position in list
* `scope` → optional `this` context

---

## 1️⃣5️⃣ `getIterator()` – Manual iteration

```js
var iterator = list.getIterator();
while(iterator.hasNext()){
    console.log(iterator.getNext());
}
```

**Output:**

```
"C"
"ZZ"
"X"
```

**Explanation:**
Returns an **Iterator object**.

* `hasNext()` → checks if more elements exist
* `getNext()` → retrieves next element
  Useful for **custom iteration logic**.

---

## 1️⃣6️⃣ `item(i)` – Get element by index

```js
console.log(list.item(1)); // "ZZ"
```

**Explanation:**
Returns the element at a **specific index**.
Returns `undefined` if index is out of bounds.

---

## ✅ Summary Table

| Method                 | Example                                                                     | Description                   |
| ---------------------- | --------------------------------------------------------------------------- | ----------------------------- |
| `add(obj)`             | `list.add("A")`                                                             | Adds element to the end       |
| `addRange(array)`      | `list.addRange(["C","D"])`                                                  | Adds multiple elements        |
| `clone()`              | `list.clone()`                                                              | Copies the list               |
| `contains(obj)`        | `list.contains("B")`                                                        | Checks if element exists      |
| `indexOf(obj)`         | `list.indexOf("C")`                                                         | Returns element index         |
| `insert(idx,obj)`      | `list.insert(2,"X")`                                                        | Inserts element at index      |
| `remove(obj)`          | `list.remove("B")`                                                          | Removes first occurrence      |
| `removeAt(idx)`        | `list.removeAt(0)`                                                          | Removes element at index      |
| `reverse()`            | `list.reverse()`                                                            | Reverses list                 |
| `sort()`               | `list.sort()`                                                               | Sorts ascending               |
| `setByIndex(idx,obj)`  | `list.setByIndex(1,"ZZ")`                                                   | Replaces element at index     |
| `toArray()`            | `list.toArray()`                                                            | Converts to JS array          |
| `forEach(func, scope)` | `list.forEach((item,i)=>console.log(i,item))`                               | Iterates through elements     |
| `getIterator()`        | `var it=list.getIterator(); while(it.hasNext()) console.log(it.getNext());` | Manual iteration              |
| `item(i)`              | `list.item(1)`                                                              | Get element at specific index |

