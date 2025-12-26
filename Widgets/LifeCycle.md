
# Dojo Widget Lifecycle – Complete Explanation

In Dojo, every widget follows a **well-defined lifecycle**.  
Understanding this lifecycle is **very important** for:
- Custom widget development
- Validation
- Event binding
- IBM FileNet ICN plugin development

---

## Why Widget Lifecycle is Important
The lifecycle tells you:
- **When properties are available**
- **When DOM is created**
- **When child widgets are ready**
- **Where to write initialization logic**

Using the wrong method can cause:
- Undefined values
- DOM not found errors
- Event binding failures

---

## Complete Dojo Widget Lifecycle Flow

```

constructor
↓
postMixInProperties
↓
buildRendering
↓
postCreate
↓
startup
↓
(during usage)
↓
destroy

````

---

## 1. constructor()

### Purpose
- Initializes widget instance
- Receives parameters passed during creation

### When it runs
- Immediately when widget is instantiated
- DOM is **NOT available**

### Example
```js
constructor: function(params){
  console.log("Constructor called");
}
````

### Use it for

✔ Simple variable initialization
❌ DOM access
❌ Child widget access

---

## 2. postMixInProperties()

### Purpose

* Modify or compute properties **before rendering**
* Runs after parameters are mixed into widget

### When it runs

* Before template is processed

### Example

```js
postMixInProperties: function(){
  this.inherited(arguments);
  this.title = this.title || "Default Title";
}
```

### Use it for

✔ Dynamic property values
✔ Localization (`i18n`)
❌ DOM access

---

## 3. buildRendering()

### Purpose

* Creates the widget’s DOM
* Processes `templateString`

### When it runs

* Widget DOM is being created

### Example

```js
buildRendering: function(){
  this.inherited(arguments);
  console.log("DOM created");
}
```

### Use it for

✔ Custom DOM creation
✔ Overriding rendering logic
❌ Event binding

---

## 4. postCreate() ⭐ (MOST IMPORTANT)

### Purpose

* Runs **after DOM is fully created**
* Attach events
* Initialize UI behavior

### When it runs

* DOM is available
* Child widgets are created (but not started)

### Example

```js
postCreate: function(){
  this.inherited(arguments);
  console.log("postCreate called");
}
```

### Use it for

✔ Event binding
✔ DOM manipulation
✔ Setting default UI state

---

## 5. startup() ⭐⭐ (ENTERPRISE CRITICAL)

### Purpose

* Final initialization step
* Ensures **child widgets are ready**

### When it runs

* After widget is placed in DOM
* After all child widgets have started

### Example

```js
startup: function(){
  if(this._started){ return; }
  this.inherited(arguments);
  console.log("Widget fully started");
}
```

### Use it for

✔ Access child widgets
✔ Layout calculations
✔ Resize logic

---

## 6. During Widget Usage

At this stage:

* Widget is visible
* User interacts with it
* Events fire
* Data changes

Example:

```js
onClick: function(){
  console.log("Button clicked");
}
```

---

## 7. destroy()

### Purpose

* Cleanup before widget removal
* Prevent memory leaks

### When it runs

* When widget is destroyed or page unloads

### Example

```js
destroy: function(){
  console.log("Widget destroyed");
  this.inherited(arguments);
}
```

### Use it for

✔ Removing event handlers
✔ Clearing timers
✔ Freeing memory

---

## Lifecycle with Custom Widget Example

```js
define([
  "dojo/_base/declare",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin"
], function(declare, _WidgetBase, _TemplatedMixin){

  return declare([_WidgetBase, _TemplatedMixin], {

    templateString: "<div>My Widget</div>",

    constructor: function(){
      console.log("constructor");
    },

    postMixInProperties: function(){
      this.inherited(arguments);
      console.log("postMixInProperties");
    },

    buildRendering: function(){
      this.inherited(arguments);
      console.log("buildRendering");
    },

    postCreate: function(){
      this.inherited(arguments);
      console.log("postCreate");
    },

    startup: function(){
      this.inherited(arguments);
      console.log("startup");
    },

    destroy: function(){
      console.log("destroy");
      this.inherited(arguments);
    }
  });
});
```

---

## Execution Order (Interview Question)

```text
constructor
postMixInProperties
buildRendering
postCreate
startup
destroy
```

---

## Declarative vs Programmatic Lifecycle

### Declarative

```html
<div data-dojo-type="my/Widget"></div>
```

* `startup()` is called automatically

### Programmatic

```js
var w = new MyWidget().placeAt("node");
w.startup();
```

⚠ Must manually call `startup()`

---

## Widget Lifecycle in IBM FileNet ICN

In ICN plugins:

* `postCreate()` → UI setup
* `startup()` → Property pane logic
* `destroy()` → Cleanup on pane close

Incorrect lifecycle usage is a **common ICN bug**.

---

## Common Mistakes 🚫

❌ Accessing DOM in constructor
❌ Using child widgets before startup
❌ Forgetting `this.inherited(arguments)`
❌ Not calling `startup()` in programmatic widgets

---

## Summary

| Method              | Purpose              |
| ------------------- | -------------------- |
| constructor         | Initialize widget    |
| postMixInProperties | Prepare properties   |
| buildRendering      | Create DOM           |
| postCreate          | Attach behavior      |
| startup             | Final initialization |
| destroy             | Cleanup              |

---

## Key Takeaway

👉 **postCreate() = behavior setup**
👉 **startup() = child widgets ready**


