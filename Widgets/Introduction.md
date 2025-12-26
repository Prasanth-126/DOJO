
# 📦 Widgets in Dojo (Dojo Toolkit)

## 🔹 What is a Widget?
In **Dojo**, a **widget** is a reusable **UI component** that controls both **presentation (HTML)** and **behavior (JavaScript)**.  
Widgets help build rich, interactive web applications in a structured and modular way.

---

## ✨ Key Features of Dojo Widgets
- Reusable UI components  
- Encapsulate HTML, CSS, and JavaScript  
- Manage their own DOM lifecycle  
- Support accessibility and internationalization  

---

## 🏗️ Dojo Widget Architecture
Dojo widgets are created using:
- `dojo/_base/declare` – Class creation  
- `dijit/_WidgetBase` – Base widget class  
- `dijit/_TemplatedMixin` – HTML template support  
- `dijit/_WidgetsInTemplateMixin` – Nested widgets  

---

## 🧩 Types of Widgets in Dojo

### 1. Dijit Widgets (Standard UI Widgets)
Ready-made UI components provided by Dojo.

**Examples:**
- `dijit/form/Button`  
- `dijit/form/TextBox`  
- `dijit/Dialog`  
- `dijit/Calendar`  
- `dijit/Menu`  

**Example:**
```html
<button data-dojo-type="dijit/form/Button">
  Submit
</button>

### 2. Custom Widgets
Developers can create reusable custom widgets in Dojo.

**Example:**
```javascript
define([
  "dojo/_base/declare",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin"
], function(declare, _WidgetBase, _TemplatedMixin){
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: "<div>Hello Dojo Widget</div>"
  });
});


### 3. Layout Widgets
Used to structure and organize page layout.

**Examples:**
- `dijit/layout/BorderContainer`
- `dijit/layout/ContentPane`
- `dijit/layout/TabContainer`
- `dijit/layout/AccordionContainer`

**Example:**
```html
<div data-dojo-type="dijit/layout/BorderContainer" style="height:300px;">
  <div data-dojo-type="dijit/layout/ContentPane" region="center">
    Center Content
  </div>
</div>


### 4. Form Widgets
Used to collect and validate user input.

**Examples:**
- `TextBox`
- `ValidationTextBox`
- `CheckBox`
- `RadioButton`
- `ComboBox`
- `DateTextBox`

**Example:**
```html
<input data-dojo-type="dijit/form/TextBox" placeholder="Enter name">


## 🔄 Widget Lifecycle
Every Dojo widget follows a lifecycle:

1. constructor  
2. postMixInProperties  
3. buildRendering  
4. postCreate  
5. startup  
6. destroy  

**Example:**
```javascript
postCreate: function(){
  this.inherited(arguments);
  console.log("Widget created");
}
```

---

## ⚖️ Declarative vs Programmatic Widgets

### Declarative (HTML-based)
```html
<input data-dojo-type="dijit/form/TextBox">
```

### Programmatic (JavaScript-based)
```javascript
require(["dijit/form/TextBox"], function(TextBox){
  var tb = new TextBox({}, "textNode");
  tb.startup();
});


## 🏢 Widgets in IBM FileNet (ICN)
Dojo widgets are widely used in **IBM FileNet ICN** for:

- Custom plugins  
- Property panes  
- Dialogs  
- Workflow UI  

**Example:**
```javascript
define([
  "dojo/_base/declare",
  "ecm/widget/dialog/BaseDialog"
], function(declare, BaseDialog){
  return declare([BaseDialog], {
    title: "Custom Dialog"
  });
});


## ✅ Advantages of Using Dojo Widgets
- Modular and reusable  
- Built-in accessibility  
- Clean separation of concerns  
- Ideal for enterprise applications  
```
