### Dojo Widget – Real-Time Example (Enterprise Scenario)

Since you are learning **Dojo with IBM FileNet**, let’s take a **real-time office scenario** instead of a theoretical one.

---

## Real-Time Scenario: FileNet Document Search Screen

### Requirement (Real Life)

In an organization using **IBM FileNet ICN**, users want to:

* Enter **Document ID**
* Select **Document Type**
* Click **Search**
* View results in a table
* Validate input automatically

This entire screen is built using **Dojo Widgets**.

---

## How Widgets Are Used Here

### 1. TextBox Widget – Document ID Input

```html
<input data-dojo-type="dijit/form/TextBox"
       data-dojo-props="placeHolder:'Enter Document ID'" />
```

**Why widget?**

* Handles user input
* Manages focus and value
* Easy to read value using JS

📌 Real-life use: User enters `DOC12345`

---

### 2. Select Widget – Document Type

```html
<select data-dojo-type="dijit/form/Select">
    <option value="Invoice">Invoice</option>
    <option value="Agreement">Agreement</option>
</select>
```

**Why widget?**

* Automatically styled
* Cross-browser support
* Easy value retrieval

📌 Real-life use: User selects `Invoice`

---

### 3. Button Widget – Search Action

```html
<button data-dojo-type="dijit/form/Button">
    Search
</button>
```

**Why widget?**

* Supports click events using `on()`
* Clean event handling

---

### 4. Validation Widget – Required Field

```html
<input data-dojo-type="dijit/form/ValidationTextBox"
       data-dojo-props="required:true,
       invalidMessage:'Document ID is mandatory'" />
```

**Why widget?**

* No manual validation code
* Shows error messages automatically

📌 Real-life benefit: Prevents empty search requests

---

### 5. Data Display – Grid Widget

```js
require(["dojox/grid/DataGrid"], function(DataGrid){
   // Used to show search results
});
```

**Why widget?**

* Shows data in rows & columns
* Sorting and pagination support

📌 Real-life use: Displays search results from FileNet CE

---

## How Widgets Work Together (Flow)

1. User enters data into **TextBox widget**
2. Validation widget checks input
3. Button widget triggers event
4. AJAX call is made to **FileNet CE**
5. Response is shown using **Grid widget**

➡️ Each UI part is a **widget**
➡️ Each widget handles its own behavior

---

## Why Widgets Are Important (Real-Time Benefits)

| Without Widgets      | With Widgets          |
| -------------------- | --------------------- |
| Manual HTML + JS     | Ready-made components |
| Manual validation    | Built-in validation   |
| More bugs            | Less bugs             |
| Hard to maintain     | Easy to maintain      |
| Not enterprise-ready | Enterprise-grade UI   |

---

## One-Line Real-Time Summary

> **In FileNet ICN, every input box, button, dialog, and grid you see is a Dojo widget working together to build enterprise screens.**
