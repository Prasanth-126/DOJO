
# dojoX ArrayList Methods with Examples and Explanations

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
`add()` appends the given element to the **end of the list**.
Use it when you want to add elements one by one.

---

## 3️⃣ `addRange(array)` – Add multiple elements

```js
list.addRange(["C","D"]);
console.log(list.toArray()); // ["A","B","C","D"]
```

**Explanation:**
`addRange()` appends multiple elements from an array or another collection at once.
Useful for bulk insertion.

---

## 4️⃣ `clone()` – Copy the list

```js
var cloneList = list.clone();
console.log(cloneList.toArray()); // ["A","B","C","D"]
```

**Explanation:**
`clone()` creates a **separate copy** of the ArrayList.
Changes to the original list won’t affect the cloned list.

---

## 5️⃣ `contains(obj)` – Check existence

```js
console.log(list.contains("B")); // true
console.log(list.contains("Z")); // false
```

**Explanation:**
`contains()` checks if a specific element exists in the list.
Returns `true` if found, `false` otherwise.

---

## 6️⃣ `indexOf(obj)` – Find index

```js
console.log(list.indexOf("C")); // 2
console.log(list.indexOf("Z")); // -1
```

**Explanation:**
`indexOf()` returns the **0-based index** of the element in the list.
Returns `-1` if the element is not present.

---

## 7️⃣ `insert(idx, obj)` – Insert at a specific index

```js
list.insert(2, "X");
console.log(list.toArray()); // ["A","B","X","C","D"]
```

**Explanation:**
`insert()` places the element at the given index, shifting other elements to the right.

---

## 8️⃣ `remove(obj)` – Remove first occurrence

```js
list.remove("B");
console.log(list.toArray()); // ["A","X","C","D"]
```

**Explanation:**
`remove()` deletes the **first occurrence** of the specified element.

---

## 9️⃣ `removeAt(idx)` – Remove by index

```js
list.removeAt(0);
console.log(list.toArray()); // ["X","C","D"]
```

**Explanation:**
`removeAt()` deletes the element at the specified index.

---

## 🔟 `reverse()` – Reverse the list

```js
list.reverse();
console.log(list.toArray()); // ["D","C","X"]
```

**Explanation:**
`reverse()` flips the order of elements in the list.

---

## 1️⃣1️⃣ `sort()` – Sort ascending

```js
list.sort();
console.log(list.toArray()); // ["C","D","X"]
```

**Explanation:**
`sort()` orders the elements in **ascending order**.
Works with strings and numbers.

---

## 1️⃣2️⃣ `setByIndex(idx, obj)` – Replace element at index

```js
list.setByIndex(1, "ZZ");
console.log(list.toArray()); // ["C","ZZ","X"]
```

**Explanation:**
`setByIndex()` updates the element at the given index without changing the size of the list.

---

## 1️⃣3️⃣ `toArray()` – Convert to native array

```js
var arr = list.toArray();
console.log(arr); // ["C","ZZ","X"]
```

**Explanation:**
`toArray()` returns a **JavaScript array** containing all elements from the ArrayList.
Useful for normal JS array operations.

---

## ✅ Summary Table

| Method                | Example                    | What it Does                |
| --------------------- | -------------------------- | --------------------------- |
| `add(obj)`            | `list.add("A")`            | Adds element to the end     |
| `addRange(array)`     | `list.addRange(["C","D"])` | Adds multiple elements      |
| `clone()`             | `list.clone()`             | Creates a copy of the list  |
| `contains(obj)`       | `list.contains("B")`       | Checks if element exists    |
| `indexOf(obj)`        | `list.indexOf("C")`        | Returns index of element    |
| `insert(idx,obj)`     | `list.insert(2,"X")`       | Inserts element at index    |
| `remove(obj)`         | `list.remove("B")`         | Removes first occurrence    |
| `removeAt(idx)`       | `list.removeAt(0)`         | Removes element at index    |
| `reverse()`           | `list.reverse()`           | Reverses the list           |
| `sort()`              | `list.sort()`              | Sorts elements ascending    |
| `setByIndex(idx,obj)` | `list.setByIndex(1,"ZZ")`  | Replaces element at index   |
| `toArray()`           | `list.toArray()`           | Converts to native JS array |
